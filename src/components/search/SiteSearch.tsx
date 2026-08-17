"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { useDeferredValue, useEffect, useId, useMemo, useState } from "react";
import { Search, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { searchEntries, type SearchEntry } from "@/data/search";
import { cn } from "@/lib/utils";

type SiteSearchProps = {
  compact?: boolean;
};

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function buildSearchText(entry: SearchEntry) {
  return normalizeText(
    [entry.title, entry.description, entry.section, ...(entry.keywords ?? [])].join(" "),
  );
}

const indexedEntries = searchEntries.map((entry) => ({
  ...entry,
  searchText: buildSearchText(entry),
}));

export function SiteSearch({ compact = false }: SiteSearchProps) {
  const inputId = useId();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const isModifier = event.metaKey || event.ctrlKey;

      if (isModifier && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const results = useMemo(() => {
    const normalizedQuery = normalizeText(deferredQuery);

    if (!normalizedQuery) {
      return indexedEntries.slice(0, 10);
    }

    const tokens = normalizedQuery.split(/\s+/).filter(Boolean);

    return indexedEntries
      .map((entry) => {
        let score = 0;

        for (const token of tokens) {
          if (entry.searchText.includes(token)) {
            score += 1;
          }

          if (normalizeText(entry.title).includes(token)) {
            score += 2;
          }
        }

        return { entry, score };
      })
      .filter((item) => item.score > 0)
      .sort((left, right) => right.score - left.score)
      .slice(0, 12)
      .map((item) => item.entry);
  }, [deferredQuery]);

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(nextOpen) => {
        setOpen(nextOpen);
        if (!nextOpen) {
          setQuery("");
        }
      }}
    >
      <Dialog.Trigger asChild>
        <Button variant="outline" size={compact ? "icon" : "sm"} aria-label="Mở tìm kiếm">
          <Search aria-hidden="true" />
          {!compact ? (
            <>
              <span>Tìm kiếm</span>
              <span className="hidden rounded border border-line px-1.5 py-0.5 text-[10px] text-muted-foreground lg:inline">
                Ctrl K
              </span>
            </>
          ) : null}
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/55 backdrop-blur-sm" />
        <Dialog.Content className="fixed top-[6vh] left-1/2 z-50 flex max-h-[88vh] w-[min(94vw,42rem)] -translate-x-1/2 flex-col rounded-2xl border border-line bg-background p-3 shadow-2xl outline-none sm:top-[10vh] sm:p-4">
          <div className="flex items-center gap-2">
            <div className="flex flex-1 items-center gap-3 rounded-xl border border-line bg-surface px-3">
              <Search className="size-4 text-neon" aria-hidden="true" />
              <label htmlFor={inputId} className="sr-only">
                Tìm kiếm toàn bộ nội dung website
              </label>
              <input
                id={inputId}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Tìm model, dịch vụ, giá, địa chỉ, bảo hành..."
                className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                autoFocus
              />
            </div>

            <Dialog.Close asChild>
              <Button variant="ghost" size="icon" aria-label="Đóng tìm kiếm">
                <X aria-hidden="true" />
              </Button>
            </Dialog.Close>
          </div>

          <div className="mt-3 flex flex-col gap-1 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <Dialog.Title className="type-eyebrow not-italic">Tìm kiếm toàn bộ website</Dialog.Title>
            <Dialog.Description>Từ khóa có thể không cần gõ dấu.</Dialog.Description>
          </div>

          <div className="mt-4 min-h-0 flex-1 space-y-2 overflow-y-auto pr-1">
            {results.length > 0 ? (
              results.map((entry) => (
                <Dialog.Close asChild key={entry.id}>
                  <Link
                    href={entry.href}
                    className="block rounded-xl border border-line bg-surface px-4 py-3 transition-colors hover:border-neon/45 hover:bg-neon/5"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <p className="type-display text-base leading-tight">{entry.title}</p>
                      <span className="w-fit rounded-full border border-line px-2 py-1 text-[10px] text-muted-foreground">
                        {entry.section}
                      </span>
                    </div>
                    <p className={cn("mt-2 text-sm leading-relaxed text-muted-foreground")}>
                      {entry.description}
                    </p>
                  </Link>
                </Dialog.Close>
              ))
            ) : (
              <div className="rounded-xl border border-dashed border-line bg-surface px-4 py-8 text-center">
                <p className="type-display text-lg">Không tìm thấy kết quả phù hợp</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thử tên model, dịch vụ như eSIM, CNC, thay pin, hoặc địa chỉ cửa tiệm.
                </p>
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
