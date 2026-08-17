import { ExternalLink, Navigation } from "lucide-react";

import { mapDirectionsUrl, mapEmbedUrl, mapPlaceUrl } from "@/lib/maps";
import { cn } from "@/lib/utils";

type MapEmbedProps = {
  /** Chuỗi địa chỉ đưa vào Google Maps */
  query: string;
  /** Dùng cho title của iframe, đọc bằng trình đọc màn hình */
  title: string;
  /** Chiều cao khung bản đồ, mặc định vừa cho thẻ trong lưới 2 cột */
  className?: string;
};

export function MapEmbed({ query, title, className }: MapEmbedProps) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-xl border border-line bg-surface",
        className,
      )}
    >
      <iframe
        src={mapEmbedUrl(query)}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="block w-full flex-1 border-0 min-h-56 sm:min-h-64"
      />

      <div className="grid grid-cols-2 divide-x divide-line border-t border-line">
        <a
          href={mapDirectionsUrl(query)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-medium transition-colors hover:bg-neon/10 hover:text-neon"
        >
          <Navigation className="size-3.5 shrink-0" aria-hidden="true" />
          Chỉ đường
        </a>
        <a
          href={mapPlaceUrl(query)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-medium transition-colors hover:bg-neon/10 hover:text-neon"
        >
          <ExternalLink className="size-3.5 shrink-0" aria-hidden="true" />
          Mở Google Maps
        </a>
      </div>
    </div>
  );
}
