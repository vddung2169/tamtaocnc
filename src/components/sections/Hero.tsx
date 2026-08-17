import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ZaloIcon } from "@/components/BrandIcons";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
      <div>
        <div className="neon-frame inline-flex w-full max-w-3xl items-center gap-3 rounded-2xl bg-surface px-4 py-3 sm:px-5 sm:py-4">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-neon/10 text-neon">
            <ShieldCheck className="size-6" aria-hidden="true" />
          </span>
          <div className="min-w-0 overflow-hidden">
            <div className="type-display truncate whitespace-nowrap text-sm leading-tight sm:text-base lg:text-lg">
              {site.tagline}
            </div>
          </div>
        </div>

        <h1 className="type-display mt-3 text-[2.5rem] leading-[1.28] sm:text-6xl sm:leading-[1.28] lg:text-7xl">
          {site.heroTitle}
        </h1>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {site.heroSubtitle}
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="neon" size="lg">
            <Link href="/bang-gia-do-sim">
              Xem bảng giá độ SIM
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/bang-gia-thay-pin">
              Xem bảng giá pin
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <a href={site.phoneHref} className="flex items-center gap-2 rounded-md hover:text-neon">
            <Phone className="size-4 text-neon" aria-hidden="true" />
            <span className="num">{site.phoneDisplay}</span>
          </a>
          <a
            href={site.zaloHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md hover:text-neon"
          >
            <ZaloIcon className="size-4 text-neon" aria-hidden="true" />
            Nhắn Zalo
          </a>
          <a
            href={site.storeMapHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md text-muted-foreground hover:text-neon"
          >
            <MapPin className="size-4 text-neon" aria-hidden="true" />
            {site.storeAddressShort}
          </a>
        </div>
      </div>

      <figure className="neon-frame overflow-hidden rounded-2xl bg-surface">
        <Image
          src="/images/tamtao.jpg"
          alt={`Mặt tiền cửa tiệm ${site.name} với bảng hiệu xanh neon tại ${site.storeAddress}`}
          width={1200}
          height={900}
          priority
          sizes="(max-width: 1024px) 100vw, 44vw"
          className="h-auto w-full object-cover"
        />
        <figcaption className="flex items-center gap-2 border-t border-neon/25 bg-background/60 px-4 py-3 text-xs text-muted-foreground">
          <MapPin className="size-3.5 shrink-0 text-neon" aria-hidden="true" />
          {site.storeAddress}
        </figcaption>
      </figure>
    </section>
  );
}
