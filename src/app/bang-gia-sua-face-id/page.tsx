import type { Metadata } from "next";

import { ContactStrip } from "@/components/sections/ContactStrip";
import { PriceTable } from "@/components/sections/PriceTable";
import { ShippingInfo } from "@/components/sections/ShippingInfo";
import { faceIdPageTitle, faceIdServiceRows, faceIdTableTitle } from "@/data/face-id";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Sửa Face ID iPhone",
  description: "Bảng giá sửa Face ID iPhone tại Tâm Táo CNC.",
  keywords: ["sửa face id iphone", "bảng giá sửa face id iphone", "Tâm Táo CNC"],
  alternates: { canonical: "/bang-gia-sua-face-id" },
};

export default function FaceIdPricePage() {
  const rows = faceIdServiceRows.map((row) => ({
    model: row.model,
    price: row.price,
  }));

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10 sm:px-6 sm:py-14">
      <header>
        <p className="type-eyebrow">{site.tagline}</p>
        <h1 className="type-display mt-3 text-4xl sm:text-5xl">{faceIdPageTitle}</h1>
      </header>

      <PriceTable
        id="bang-gia-sua-face-id"
        title={faceIdTableTitle}
        rows={rows}
      />

      <ContactStrip />
      <ShippingInfo />
    </div>
  );
}
