import type { Metadata } from "next";

import { BatteryPriceTable } from "@/components/sections/BatteryPriceTable";
import { TermsList } from "@/components/sections/TermsList";
import { ContactStrip } from "@/components/sections/ContactStrip";
import { ShippingInfo } from "@/components/sections/ShippingInfo";
import {
  batteryPageTitle,
  batteryPrices,
  batteryTableTitle,
  batteryTerms,
  batteryWarrantyNotice,
} from "@/data/thay-pin";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Bảng giá thay pin iPhone Energizer, Bison, Sàn cổ cáp",
  description:
    "Bảng giá thay pin iPhone chính hãng Energizer dung lượng cao, Bison dung lượng chuẩn, DLC hãng không tên và pin sàn cổ cáp từ iPhone X đến iPhone 16 Pro Max. Bảo hành 1 năm tất cả các lỗi, bảo hành % pin nếu dưới 85%.",
  keywords: [
    "bảng giá thay pin iPhone",
    "thay pin iPhone",
    "pin Energizer iPhone",
    "pin Bison iPhone",
    "pin sàn cổ cáp iPhone",
    "thay pin iPhone TP HCM",
    "Tâm Táo CNC",
  ],
  alternates: { canonical: "/bang-gia-thay-pin" },
  openGraph: {
    title: "Bảng giá thay pin iPhone | Tâm Táo CNC",
    description:
      "Pin Energizer DLC, Bison DL chuẩn, DLC hãng ko tên, pin sàn cổ cáp từ iPhone X đến 16 Pro Max. Bảo hành 1 năm.",
    url: "/bang-gia-thay-pin",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Bảng giá thay pin iPhone tại Tâm Táo CNC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bảng giá thay pin iPhone | Tâm Táo CNC",
    description:
      "Bảng giá thay pin iPhone Energizer, Bison, sàn cổ cáp cho iPhone X đến iPhone 16 Pro Max. Bảo hành 1 năm.",
    images: ["/opengraph-image"],
  },
};

export default function BatteryPricePage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10 sm:px-6 sm:py-14">
      <header>
        <p className="type-eyebrow">{site.tagline}</p>
        <h1 className="type-display mt-3 text-4xl sm:text-5xl">{batteryPageTitle}</h1>
      </header>

      <BatteryPriceTable
        title={batteryTableTitle}
        warrantyNotice={batteryWarrantyNotice}
        rows={batteryPrices}
      />

      <TermsList items={batteryTerms} />

      <p className="text-sm text-muted-foreground">
        Giá đã bao gồm công thay lắp. Khách hàng gửi máy từ xa vui lòng xem thông tin địa chỉ nhận máy bên dưới.
      </p>

      <ContactStrip />
      <ShippingInfo />
    </div>
  );
}
