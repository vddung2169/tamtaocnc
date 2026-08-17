import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

import { Logotype } from "@/components/layout/Logotype";
import { StoreLocation } from "@/components/sections/StoreLocation";
import { nav, site } from "@/data/site";
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-line">
      {/* Thanh liên hệ nền xanh lá đặc, lấy đúng từ dải dưới bảng hiệu */}
      <div className="bg-neon-deep text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <a
            href={site.storeMapHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 rounded-md text-sm underline-offset-4 hover:underline"
          >
            <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <span>{site.storeAddress}</span>
          </a>
          <a href={site.phoneHref} className="flex items-center gap-2 rounded-md text-sm font-semibold">
            <Phone className="size-4 shrink-0" aria-hidden="true" />
            <span className="num tracking-wide">{site.phoneDisplay}</span>
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 pb-24 sm:px-6 sm:pb-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Logotype size="md" />
            <p className="type-eyebrow mt-2">{site.taglineSecondary}</p>
          </div>

          <nav aria-label="Điều hướng chân trang">
            <ul className="flex flex-col gap-2 sm:items-end">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-md text-sm text-muted-foreground transition-colors hover:text-neon"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          © {year} {site.name} — {site.owner}. Hotline & Zalo{" "}
          <span className="num">{site.phoneDisplay}</span>.
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 pt-0 sm:px-6">
        <StoreLocation />
      </div>
    </footer>
  );
}
