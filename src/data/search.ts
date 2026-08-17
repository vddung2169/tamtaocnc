import { simPageTitle, simPrices, simTerms } from "@/data/do-sim";
import { shippingPoints, site, services } from "@/data/site";
import {
  batteryPageTitle,
  batteryPrices,
  batteryTableTitle,
  batteryTerms,
} from "@/data/thay-pin";

export type SearchEntry = {
  id: string;
  title: string;
  description: string;
  href: string;
  section: string;
  keywords?: string[];
};

const homeEntries: SearchEntry[] = [
  {
    id: "home-hero",
    title: site.heroTitle,
    description: `${site.heroSubtitle}. ${site.commitment}`,
    href: "/",
    section: "Trang chủ",
    keywords: ["độ sim", "esim", "eid", "cnc", "thay pin", "iphone lock"],
  },
  {
    id: "home-contact",
    title: "Kênh liên hệ",
    description: `Hotline ${site.phoneDisplay}, Zalo, Facebook, unlock và check IMEI tại checkle.vn.`,
    href: "/",
    section: "Liên hệ",
    keywords: ["hotline", "zalo", "facebook", "imei", "unlock"],
  },
  {
    id: "home-services",
    title: "Dịch vụ tại tiệm",
    description: services.map((service) => service.title).join(" • "),
    href: "/",
    section: "Dịch vụ",
  },
  {
    id: "home-shipping",
    title: "Gửi máy về tiệm",
    description: `Nhận máy qua ${shippingPoints
      .map((point) => `${point.label}: ${point.address}`)
      .join(" | ")}.`,
    href: "/",
    section: "Gửi máy",
    keywords: ["chành xe", "futa", "chuyển phát", "gửi máy"],
  },
  {
    id: "home-store",
    title: "Địa chỉ cửa tiệm",
    description: `${site.storeAddress}. Chủ tiệm ${site.owner}. Gọi hoặc nhắn Zalo trước khi tới.`,
    href: "/",
    section: "Địa chỉ",
    keywords: ["địa chỉ", "bản đồ", "google maps", "cửa tiệm"],
  },
];

const simEntries: SearchEntry[] = [
  {
    id: "sim-overview",
    title: simPageTitle,
    description: "Bảng giá độ SIM vật lý, eSIM, up ổ EID và CNC máy iPhone lock.",
    href: "/bang-gia-do-sim",
    section: "Bảng giá độ SIM",
    keywords: ["giá độ sim", "up eid", "cnc", "esim", "sim vật lý"],
  },
  ...simTerms.map((term, index) => ({
    id: `sim-term-${index + 1}`,
    title: `Lưu ý độ SIM ${index + 1}`,
    description: term,
    href: "/bang-gia-do-sim",
    section: "Lưu ý độ SIM",
    keywords: ["bảo hành", "khách sỉ", "khách lẻ", "vệ sinh máy"],
  })),
  ...simPrices.map((row, index) => ({
    id: `sim-price-${index + 1}`,
    title: `${row.model} - ${row.service}`,
    description: `Giá ${row.price}${row.note ? `. ${row.note}` : ""}`,
    href: "/bang-gia-do-sim",
    section: "Giá độ SIM",
    keywords: [row.model, row.service, row.price],
  })),
];

const batteryEntries: SearchEntry[] = [
  {
    id: "battery-overview",
    title: batteryPageTitle,
    description: `${batteryTableTitle}. Bảo hành 1 năm cho pin iPhone dung lượng cao.`,
    href: "/bang-gia-thay-pin",
    section: "Bảng giá thay pin",
    keywords: ["pin iphone", "energizer", "dung lượng cao", "bảo hành pin"],
  },
  ...batteryTerms.map((term, index) => ({
    id: `battery-term-${index + 1}`,
    title: `Lưu ý thay pin ${index + 1}`,
    description: term,
    href: "/bang-gia-thay-pin",
    section: "Lưu ý thay pin",
    keywords: ["pin", "bảo hành", "chứng nhận"],
  })),
  ...batteryPrices.map((row, index) => ({
    id: `battery-price-${index + 1}`,
    title: row.model,
    description: `${row.capacityMah.toLocaleString("vi-VN")} mAh - Giá ${row.price}`,
    href: "/bang-gia-thay-pin",
    section: "Giá thay pin",
    keywords: [row.model, `${row.capacityMah}`, row.price, "energizer"],
  })),
];

export const searchEntries: readonly SearchEntry[] = [
  ...homeEntries,
  ...simEntries,
  ...batteryEntries,
];
