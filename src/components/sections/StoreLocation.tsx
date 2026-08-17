import { Clock, MapPin, Phone } from "lucide-react";

import { MapEmbed } from "@/components/MapEmbed";
import { Button } from "@/components/ui/button";
import { ZaloIcon } from "@/components/BrandIcons";
import { site } from "@/data/site";

export function StoreLocation() {
  return (
    <section aria-labelledby="dia-chi-tiem" className="reveal">
      <h2 id="dia-chi-tiem" className="type-display text-2xl sm:text-3xl">
        Địa chỉ cửa tiệm
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Khách ghé trực tiếp bấm chỉ đường để Google Maps dẫn tận nơi.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-xl border border-line bg-surface p-5">
          <p className="type-eyebrow">{site.name}</p>

          <p className="mt-3 flex items-start gap-2 text-base font-medium">
            <MapPin className="mt-1 size-4 shrink-0 text-neon" aria-hidden="true" />
            {site.storeAddress}
          </p>

          <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="size-4 shrink-0 text-neon" aria-hidden="true" />
            {site.owner} — <span className="num">{site.phoneDisplay}</span>
          </p>

          <p className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
            <Clock className="mt-0.5 size-4 shrink-0 text-neon" aria-hidden="true" />
            Gọi hoặc nhắn Zalo trước khi tới để tiệm chuẩn bị máy và linh kiện.
          </p>

          <div className="mt-5 flex flex-col gap-2 sm:flex-row lg:flex-col">
            <Button asChild variant="neon" size="sm" className="sm:flex-1 lg:flex-none">
              <a href={site.phoneHref}>
                <Phone aria-hidden="true" />
                <span className="num">{site.phoneDisplay}</span>
              </a>
            </Button>
            <Button asChild variant="outline" size="sm" className="sm:flex-1 lg:flex-none">
              <a href={site.zaloHref} target="_blank" rel="noopener noreferrer">
                <ZaloIcon className="size-4" />
                Nhắn Zalo
              </a>
            </Button>
          </div>
        </div>

        <MapEmbed
          query={site.storeMapQuery}
          title={`Bản đồ Google tới ${site.name}, ${site.storeAddress}`}
          className="min-h-[22rem]"
        />
      </div>
    </section>
  );
}
