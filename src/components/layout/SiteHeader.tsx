"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logotype } from "@/components/layout/Logotype";
import { SiteSearch } from "@/components/search/SiteSearch";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { ZaloIcon } from "@/components/BrandIcons";
import { nav, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-2 px-4 sm:h-16 sm:gap-4 sm:px-6">
        <Link
          href="/"
          className="min-w-0 rounded-md"
          aria-label={`${site.name} — về trang chủ`}
        >
          <Logotype size="sm" />
        </Link>

        <nav aria-label="Điều hướng chính" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      active ? "text-neon" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <SiteSearch />
          <ThemeToggle />
          <Button asChild variant="neon" size="sm">
            <a href={site.phoneHref}>
              <Phone aria-hidden="true" />
              <span className="num">{site.phoneDisplay}</span>
            </a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <div className="shrink-0 flex items-center gap-2 md:hidden">
            <SiteSearch compact />
            <ThemeToggle />
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Mở menu">
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
          </div>
          <SheetContent side="right" className="w-[86%] max-w-xs">
            <SheetHeader>
              <SheetTitle asChild>
                <Logotype size="md" />
              </SheetTitle>
              <SheetDescription>{site.tagline}</SheetDescription>
            </SheetHeader>

            <nav aria-label="Điều hướng chính trên di động" className="px-5">
              <ul className="flex flex-col gap-1">
                {nav.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "block rounded-lg border px-4 py-3 text-base font-medium transition-colors",
                          active
                            ? "border-neon/45 bg-neon/10 text-neon"
                            : "border-line bg-surface text-foreground hover:border-neon/40",
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-auto flex flex-col gap-2 p-5">
              <Button asChild variant="neon" size="lg">
                <a href={site.phoneHref}>
                  <Phone aria-hidden="true" />
                  <span className="num">{site.phoneDisplay}</span>
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={site.zaloHref} target="_blank" rel="noopener noreferrer">
                  <ZaloIcon className="size-4" />
                  Nhắn Zalo
                </a>
              </Button>
              <ThemeToggle variant="full" />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
