import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { simPrices } from "@/data/do-sim";
import { batteryPrices } from "@/data/thay-pin";

type TeaserRow = { model: string; detail: string; price: string };

type Teaser = {
  title: string;
  href: string;
  note: string;
  rows: TeaserRow[];
  total: number;
};

const teasers: Teaser[] = [
  {
    title: "ĐỘ SIM MÁY LOCK",
    href: "/bang-gia-do-sim",
    note: "Giá sỉ, khách lẻ cộng thêm 200-300k",
    total: simPrices.length,
    rows: simPrices.slice(0, 3).map((row) => ({
      model: row.model,
      detail: row.service,
      price: row.price,
    })),
  },
  {
    title: "THAY PIN DUNG LƯỢNG CAO",
    href: "/bang-gia-thay-pin",
    note: "Pin Energizer, bảo hành 1 năm",
    total: batteryPrices.length,
    rows: batteryPrices.slice(0, 3).map((row) => ({
      model: row.model,
      detail: `${row.capacityMah.toLocaleString("vi-VN")} mAh`,
      price: row.price,
    })),
  },
];

export function PriceTeaser() {
  return (
    <section aria-labelledby="bang-gia-teaser" className="reveal">
      <h2 id="bang-gia-teaser" className="type-display text-2xl sm:text-3xl">
        Bảng giá
      </h2>

      <div className="mt-6 grid gap-3 lg:grid-cols-2">
        {teasers.map((teaser) => (
          <Link
            key={teaser.href}
            href={teaser.href}
            className="group flex flex-col rounded-xl border border-line bg-surface p-5 transition-colors hover:border-neon/45"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="type-display text-lg leading-tight sm:text-xl">{teaser.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{teaser.note}</p>
              </div>
              <ArrowRight
                className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-neon"
                aria-hidden="true"
              />
            </div>

            <ul className="mt-4 divide-y divide-line/70 border-t border-line/70">
              {teaser.rows.map((row) => (
                <li
                  key={`${row.model}-${row.detail}`}
                  className="flex items-start justify-between gap-3 py-2.5"
                >
                  <span className="min-w-0 text-sm">
                    <span className="num text-foreground">{row.model}</span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                      {row.detail}
                    </span>
                  </span>
                  <span className="num shrink-0 text-sm font-medium text-neon">{row.price}</span>
                </li>
              ))}
            </ul>

            <p className="type-eyebrow mt-4">
              Xem đủ <span className="num">{teaser.total}</span> mục
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
