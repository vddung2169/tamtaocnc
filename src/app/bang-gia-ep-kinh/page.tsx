import type { Metadata } from "next";

import { ContactStrip } from "@/components/sections/ContactStrip";
import { PriceTable } from "@/components/sections/PriceTable";
import { ShippingInfo } from "@/components/sections/ShippingInfo";
import { glassOnlyPrices, glassRepairPageTitle, touchRepairPrices } from "@/data/ep-kinh";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Bảng giá ép kính và ép cảm ứng iPhone",
  description:
    "Bảng giá ép kính và ép cảm ứng iPhone theo model tại Tâm Táo CNC, tách rõ từng hạng mục để dễ tra cứu.",
  keywords: [
    "bảng giá ép kính iphone",
    "bảng giá ép cảm ứng iphone",
    "ép kính iphone",
    "ép cảm ứng iphone",
    "Tâm Táo CNC",
  ],
  alternates: { canonical: "/bang-gia-ep-kinh" },
};

export default function GlassRepairPricePage() {
  const glassRows = glassOnlyPrices.map((row) => ({
    model: row.model,
    detail: row.service,
    price: row.price,
  }));

  const touchRows = touchRepairPrices.map((row) => ({
    model: row.model,
    detail: row.service,
    price: row.price,
  }));

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10 sm:px-6 sm:py-14">
      <header>
        <p className="type-eyebrow">{site.tagline}</p>
        <h1 className="type-display mt-3 text-4xl sm:text-5xl">{glassRepairPageTitle}</h1>
      </header>

      <PriceTable
        id="bang-gia-ep-kinh"
        title="ÉP KÍNH MÀN HÌNH"
        detailLabel="Dịch vụ"
        rows={glassRows}
      />

      <PriceTable
        id="bang-gia-ep-cam-ung"
        title="ÉP CẢM ỨNG"
        detailLabel="Dịch vụ"
        rows={touchRows}
      />

      <ContactStrip />
      <ShippingInfo />
    </div>
  );
}
