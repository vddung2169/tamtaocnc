import { Clock, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ZaloIcon } from "@/components/BrandIcons";
import { shippingPoints, site } from "@/data/site";

const footerLocations = [
  {
    key: "store",
    eyebrow: site.name,
    title: site.storeAddress,
    placeHref: site.storeMapHref,
    note: "Gọi hoặc nhắn Zalo trước khi tới để tiệm chuẩn bị máy và linh kiện.",
  },
  {
    key: "futa",
    eyebrow: shippingPoints[0].label,
    title: shippingPoints[0].address,
    placeHref: shippingPoints[0].mapHref,
    note: shippingPoints[0].note,
  },
] as const;

export function StoreLocation() {
  return (
    <section aria-labelledby="dia-chi-tiem" className="reveal">
      <h2 id="dia-chi-tiem" className="type-display text-2xl sm:text-3xl">
        Địa chỉ & chỉ đường
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Chọn điểm cần tới rồi bấm mở Google Maps để dẫn đường nhanh.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {footerLocations.map((location) => (
          <div key={location.key} className="rounded-xl border border-line bg-surface p-5">
            <p className="type-eyebrow">{location.eyebrow}</p>

            <p className="mt-3 flex items-start gap-2 text-base font-medium">
              <MapPin className="mt-1 size-4 shrink-0 text-neon" aria-hidden="true" />
              {location.title}
            </p>

            <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="size-4 shrink-0 text-neon" aria-hidden="true" />
              {site.owner} — <span className="num">{site.phoneDisplay}</span>
            </p>

            <p className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
              <Clock className="mt-0.5 size-4 shrink-0 text-neon" aria-hidden="true" />
              {location.note}
            </p>

            <div className="mt-5 grid gap-2 sm:grid-cols-3">
              <Button asChild variant="neon" size="sm">
                <a href={site.phoneHref}>
                  <Phone aria-hidden="true" />
                  <span className="num">{site.phoneDisplay}</span>
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href={site.zaloHref} target="_blank" rel="noopener noreferrer">
                  <ZaloIcon className="size-4" />
                  Nhắn Zalo
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href={location.placeHref} target="_blank" rel="noopener noreferrer">
                  <MapPin aria-hidden="true" />
                  Google Maps
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
