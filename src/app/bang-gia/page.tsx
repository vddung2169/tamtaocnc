import type { Metadata } from "next";

import { ContactStrip } from "@/components/sections/ContactStrip";
import { PriceTeaser } from "@/components/sections/PriceTeaser";
import { ShippingInfo } from "@/components/sections/ShippingInfo";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Tất cả bảng giá dịch vụ iPhone",
  description:
    "Tổng hợp bảng giá độ SIM máy lock, thay pin dung lượng cao, thay kính camera và ép kính, ép cảm ứng tại Tâm Táo CNC.",
  keywords: [
    "bảng giá iphone",
    "bảng giá độ sim",
    "bảng giá thay pin",
    "bảng giá thay kính camera",
    "bảng giá ép kính iphone",
  ],
  alternates: { canonical: "/bang-gia" },
};

export default function PriceHubPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 sm:py-14">
      <header>
        <p className="type-eyebrow">{site.tagline}</p>
        <h1 className="type-display mt-3 text-4xl sm:text-5xl">TẤT CẢ BẢNG GIÁ DỊCH VỤ</h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Gom toàn bộ bảng giá để khách dễ tra theo đúng hạng mục: độ SIM, thay pin, kính camera
          và ép kính hoặc ép cảm ứng màn hình.
        </p>
      </header>

      <PriceTeaser title="Chọn bảng giá cần xem" />

      <ContactStrip />
      <ShippingInfo />
    </div>
  );
}
