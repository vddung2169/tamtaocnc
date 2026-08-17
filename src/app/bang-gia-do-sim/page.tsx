import type { Metadata } from "next";

import { PriceTable } from "@/components/sections/PriceTable";
import { TermsList } from "@/components/sections/TermsList";
import { ContactStrip } from "@/components/sections/ContactStrip";
import { ShippingInfo } from "@/components/sections/ShippingInfo";
import { simPageTitle, simPrices, simTerms } from "@/data/do-sim";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Bảng giá độ SIM iPhone Lock 2026",
  description:
    "Bảng giá độ SIM vật lý, eSIM, up ổ EID và CNC máy iPhone lock từ iPhone 12 đến 17 Pro Max. Giá sỉ cho thợ và chủ tiệm, bảo hành 1 năm phần độ SIM.",
  keywords: [
    "bảng giá độ SIM iPhone lock",
    "giá độ eSIM iPhone lock",
    "giá CNC iPhone lock",
    "up ổ EID iPhone",
    "Tâm Táo CNC",
  ],
  alternates: { canonical: "/bang-gia-do-sim" },
  openGraph: {
    title: "Bảng giá độ SIM iPhone Lock 2026 | Tâm Táo CNC",
    description:
      "Giá độ SIM vật lý, eSIM, up ổ EID và CNC máy lock từ iPhone 12 đến 17 Pro Max. Giá sỉ, bảo hành 1 năm.",
    url: "/bang-gia-do-sim",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Bảng giá độ SIM iPhone Lock tại Tâm Táo CNC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bảng giá độ SIM iPhone Lock 2026 | Tâm Táo CNC",
    description:
      "Giá độ SIM vật lý, eSIM, up ổ EID và CNC máy iPhone lock từ iPhone 12 đến 17 Pro Max.",
    images: ["/opengraph-image"],
  },
};

export default function SimPricePage() {
  const rows = simPrices.map((row) => ({
    model: row.model,
    detail: row.service,
    price: row.price,
    note: row.note,
  }));

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10 sm:px-6 sm:py-14">
      <header>
        <p className="type-eyebrow">{site.tagline}</p>
        <h1 className="type-display mt-3 text-4xl sm:text-5xl">{simPageTitle}</h1>
      </header>

      <TermsList items={simTerms} />

      <PriceTable title="Giá độ SIM theo model" detailLabel="Dịch vụ" rows={rows} />

      <p className="text-sm text-muted-foreground">
        Giá có thể thay đổi theo tình trạng máy. Số lượng lớn inbox để ép giá.
      </p>

      <ContactStrip />
      <ShippingInfo />
    </div>
  );
}
