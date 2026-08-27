import type { Metadata } from "next";

import { ContactStrip } from "@/components/sections/ContactStrip";
import { PriceTable } from "@/components/sections/PriceTable";
import { ShippingInfo } from "@/components/sections/ShippingInfo";
import { TermsList } from "@/components/sections/TermsList";
import {
  cameraGlassPageTitle,
  cameraGlassPrices,
  cameraGlassTableTitle,
  cameraGlassTerms,
} from "@/data/thay-kinh-camera";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Bảng giá thay kính camera iPhone",
  description:
    "Bảng giá thay kính camera sau iPhone từ iPhone X đến iPhone 17 Series tại Tâm Táo CNC.",
  keywords: [
    "bảng giá thay kính camera iphone",
    "thay kính camera sau iphone",
    "giá thay kính camera iphone",
    "Tâm Táo CNC",
  ],
  alternates: { canonical: "/bang-gia-thay-kinh-camera" },
};

export default function CameraGlassPricePage() {
  const rows = cameraGlassPrices.map((row) => ({
    model: row.model,
    price: row.price,
  }));

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10 sm:px-6 sm:py-14">
      <header>
        <p className="type-eyebrow">{site.tagline}</p>
        <h1 className="type-display mt-3 text-4xl sm:text-5xl">{cameraGlassPageTitle}</h1>
      </header>

      <TermsList items={cameraGlassTerms} />

      <PriceTable id="bang-gia-thay-kinh-camera" title={cameraGlassTableTitle} rows={rows} />

      <p className="text-sm text-muted-foreground">
        Giá có thể thay đổi nếu cụm camera hoặc viền kính bị hư thêm ngoài phần mặt kính.
      </p>

      <ContactStrip />
      <ShippingInfo />
    </div>
  );
}
