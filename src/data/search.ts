import { simPageTitle, simPrices, simTerms } from "@/data/do-sim";
import { faceIdPageTitle, faceIdServiceRows } from "@/data/face-id";
import { glassOnlyPrices, glassRepairPageTitle, touchRepairPrices } from "@/data/ep-kinh";
import { priceCatalog } from "@/data/price-catalog";
import { shippingPoints, site, services } from "@/data/site";
import {
  batteryPageTitle,
  batteryPrices,
  batteryTableTitle,
  batteryTerms,
} from "@/data/thay-pin";
import {
  cameraGlassPageTitle,
  cameraGlassPrices,
  cameraGlassTableTitle,
  cameraGlassTerms,
} from "@/data/thay-kinh-camera";

export type SearchEntry = {
  id: string;
  title: string;
  description: string;
  href: string;
  section: string;
  keywords?: string[];
};

function buildPriceKeywords(price: string) {
  const normalized = price.toLowerCase().replace(/\s+/g, "");
  const digits = normalized.replace(/[^\d]/g, "");
  const keywords = new Set<string>([price, normalized]);

  if (normalized.includes("tr")) {
    keywords.add(normalized.replace("tr", "000k"));
    keywords.add(normalized.replace("tr", " triệu"));
  }

  if (digits) {
    keywords.add(digits);
  }

  return [...keywords];
}

function buildModelKeywords(model: string) {
  const normalized = model
    .toLowerCase()
    .replace(/\//g, " ")
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const keywords = new Set<string>([model, normalized]);

  if (normalized.includes("seri")) {
    keywords.add(normalized.replace("seri", "series"));
  }

  if (normalized.includes("promax")) {
    keywords.add(normalized.replace("promax", "pro max"));
  }

  if (normalized.includes("xsm")) {
    keywords.add(normalized.replace("xsm", "xs max"));
  }

  if (normalized.includes("camera")) {
    keywords.add("camera sau");
    keywords.add("kinh camera");
  }

  return [...keywords];
}

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
    id: "price-hub",
    title: "Tất cả bảng giá dịch vụ",
    description: priceCatalog.map((item) => item.title).join(" • "),
    href: "/bang-gia",
    section: "Bảng giá",
    keywords: ["bảng giá", "giá dịch vụ", "thay kính camera", "ép kính", "ép cảm ứng"],
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
    keywords: [...buildModelKeywords(row.model), row.service, ...buildPriceKeywords(row.price)],
  })),
];

const batteryEntries: SearchEntry[] = [
  {
    id: "battery-overview",
    title: batteryPageTitle,
    description: `${batteryTableTitle}. Energizer DLC, Bison chuẩn, pin sàn cổ cáp. Bảo hành 1 năm tất cả các lỗi, bảo hành % pin dưới 85%.`,
    href: "/bang-gia-thay-pin",
    section: "Bảng giá thay pin",
    keywords: ["pin iphone", "energizer", "bison", "pin san co cap", "dung lượng cao", "bảo hành pin"],
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
    title: `Thay pin ${row.model}`,
    description: `Energizer DLC: ${row.energizerDlc} • Bison chuẩn: ${row.bisonDlChuan}${row.pinSanCoCap !== "-" ? ` • Pin sàn: ${row.pinSanCoCap}` : ""}`,
    href: "/bang-gia-thay-pin",
    section: "Giá thay pin",
    keywords: [
      ...buildModelKeywords(row.model),
      "energizer",
      "bison",
      "pin dung luong cao",
      "pin san co cap",
      "thay pin",
      ...buildPriceKeywords(row.energizerDlc),
      ...buildPriceKeywords(row.bisonDlChuan),
      ...(row.pinSanCoCap !== "-" ? buildPriceKeywords(row.pinSanCoCap) : []),
    ],
  })),
];

const faceIdEntries: SearchEntry[] = [
  {
    id: "faceid-overview",
    title: faceIdPageTitle,
    description: "Bảng giá sửa Face ID iPhone.",
    href: "/bang-gia-sua-face-id",
    section: "Sửa Face ID",
    keywords: ["face id", "sua face id iphone", "bang gia face id"],
  },
  ...faceIdServiceRows.map((row, index) => ({
    id: `faceid-price-${index + 1}`,
    title: row.model,
    description: row.price,
    href: "/bang-gia-sua-face-id",
    section: "Giá sửa Face ID",
    keywords: [...buildModelKeywords(row.model), ...buildPriceKeywords(row.price), "face id"],
  })),
];

const cameraGlassEntries: SearchEntry[] = [
  {
    id: "camera-glass-overview",
    title: cameraGlassPageTitle,
    description: `${cameraGlassTableTitle}. Giá theo đời máy từ iPhone X đến iPhone 17 Series.`,
    href: "/bang-gia-thay-kinh-camera",
    section: "Bảng giá thay kính camera",
    keywords: ["kính camera", "camera sau", "thay kính camera iphone"],
  },
  ...cameraGlassTerms.map((term, index) => ({
    id: `camera-glass-term-${index + 1}`,
    title: `Lưu ý thay kính camera ${index + 1}`,
    description: term,
    href: "/bang-gia-thay-kinh-camera",
    section: "Lưu ý thay kính camera",
    keywords: ["kính camera", "báo giá", "kiểm tra máy"],
  })),
  ...cameraGlassPrices.map((row, index) => ({
    id: `camera-glass-price-${index + 1}`,
    title: row.model,
    description: `Thay kính camera sau - Giá ${row.price}`,
    href: "/bang-gia-thay-kinh-camera",
    section: "Giá thay kính camera",
    keywords: [
      ...buildModelKeywords(row.model),
      ...buildPriceKeywords(row.price),
      "kính camera",
      "camera sau",
      "thay kính camera",
    ],
  })),
];

const glassRepairEntries: SearchEntry[] = [
  {
    id: "glass-repair-overview",
    title: glassRepairPageTitle,
    description: "Bảng giá ép kính và ép cảm ứng iPhone.",
    href: "/bang-gia-ep-kinh",
    section: "Bảng giá ép kính",
    keywords: ["ép kính", "ép cảm ứng", "màn hình iphone"],
  },
  ...glassOnlyPrices.map((row, index) => ({
    id: `glass-only-price-${index + 1}`,
    title: `${row.model} - ${row.service}`,
    description: `Giá ${row.price}`,
    href: "/bang-gia-ep-kinh",
    section: "Giá ép kính",
    keywords: [...buildModelKeywords(row.model), row.service, ...buildPriceKeywords(row.price)],
  })),
  ...touchRepairPrices.map((row, index) => ({
    id: `touch-repair-price-${index + 1}`,
    title: `${row.model} - ${row.service}`,
    description: `Giá ${row.price}`,
    href: "/bang-gia-ep-kinh",
    section: "Giá ép cảm ứng",
    keywords: [...buildModelKeywords(row.model), row.service, ...buildPriceKeywords(row.price)],
  })),
];

export const searchEntries: readonly SearchEntry[] = [
  ...homeEntries,
  ...simEntries,
  ...batteryEntries,
  ...faceIdEntries,
  ...cameraGlassEntries,
  ...glassRepairEntries,
];
