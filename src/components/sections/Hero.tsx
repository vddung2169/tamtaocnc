import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ZaloIcon } from "@/components/BrandIcons";
import { site } from "@/data/site";
import { mapPlaceUrl } from "@/lib/maps";

export function Hero() {
  return (
    <section className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
      <div>
        <p className="type-eyebrow">{site.tagline}</p>

        <h1 className="type-display mt-3 text-[2.5rem] leading-[0.98] sm:text-6xl lg:text-7xl">
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
            href={mapPlaceUrl(site.storeMapQuery)}
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
