import type { Metadata } from "next";

import { PriceTable } from "@/components/sections/PriceTable";
import { TermsList } from "@/components/sections/TermsList";
import { ContactStrip } from "@/components/sections/ContactStrip";
import { ShippingInfo } from "@/components/sections/ShippingInfo";
import {
  batteryPageTitle,
  batteryPrices,
  batteryTableTitle,
  batteryTerms,
} from "@/data/thay-pin";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Bảng giá thay pin iPhone dung lượng cao",
  description:
    "Bảng giá thay pin iPhone dung lượng cao Energizer từ iPhone X đến iPhone 16 Pro Max. Bảo hành 1 năm, pin có giấy chứng nhận thẩm định.",
  alternates: { canonical: "/bang-gia-thay-pin" },
  openGraph: {
    title: "Bảng giá thay pin iPhone dung lượng cao | Tâm Táo CNC",
    description:
      "Pin dung lượng cao Energizer cho iPhone X đến 16 Pro Max, bảo hành 1 năm, có giấy chứng nhận thẩm định.",
    url: "/bang-gia-thay-pin",
  },
};

export default function BatteryPricePage() {
  const rows = batteryPrices.map((row) => ({
    model: row.model,
    detail: `${row.capacityMah.toLocaleString("vi-VN")} mAh`,
    price: row.price,
  }));

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-4 py-10 sm:px-6 sm:py-14">
      <header>
        <p className="type-eyebrow">{site.tagline}</p>
        <h1 className="type-display mt-3 text-4xl sm:text-5xl">{batteryPageTitle}</h1>
      </header>

      <TermsList items={batteryTerms} />

      <PriceTable title={batteryTableTitle} detailLabel="Dung lượng" rows={rows} />

      <p className="text-sm text-muted-foreground">
        Giá đã gồm công thay. Máy gửi từ xa vui lòng xem hai địa chỉ nhận máy bên dưới.
      </p>

      <ContactStrip />
      <ShippingInfo />
    </div>
  );
}
