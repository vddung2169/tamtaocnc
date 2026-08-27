import { simPrices } from "@/data/do-sim";
import { batteryPrices } from "@/data/thay-pin";
import { faceIdServiceRows } from "@/data/face-id";
import { glassOnlyPrices, touchRepairPrices } from "@/data/ep-kinh";

export type PriceCatalogRow = {
  model: string;
  detail?: string;
  price: string;
};

export type PriceCatalogItem = {
  title: string;
  href: string;
  note: string;
  rows: PriceCatalogRow[];
  total: number;
};

export const priceCatalog: readonly PriceCatalogItem[] = [
  {
    title: "ĐỘ SIM MÁY LOCK",
    href: "/bang-gia-do-sim",
    note: "Giá sỉ, khách lẻ cộng thêm 200-300k",
    total: simPrices.length,
    rows: simPrices.slice(0, 3).map((row) => ({
      model: row.model,
      detail: row.service,
      price: row.price,
    })),
  },
  {
    title: "THAY PIN DUNG LƯỢNG CAO",
    href: "/bang-gia-thay-pin",
    note: "Pin Energizer, bảo hành 1 năm",
    total: batteryPrices.length,
    rows: batteryPrices.slice(0, 3).map((row) => ({
      model: row.model,
      detail: `${row.capacityMah.toLocaleString("vi-VN")} mAh`,
      price: row.price,
    })),
  },
  {
    title: "SỬA FACE ID",
    href: "/bang-gia-sua-face-id",
    note: "Bảng giá theo đời máy",
    total: faceIdServiceRows.length,
    rows: faceIdServiceRows.slice(0, 3).map((row) => ({
      model: row.model,
      price: row.price,
    })),
  },
  {
    title: "ÉP KÍNH & ÉP CẢM ỨNG",
    href: "/bang-gia-ep-kinh",
    note: "Tách riêng 2 hạng mục để dễ tra giá",
    total: glassOnlyPrices.length + touchRepairPrices.length,
    rows: [
      ...glassOnlyPrices.slice(0, 2).map((row) => ({
        model: row.model,
        detail: row.service,
        price: row.price,
      })),
      ...touchRepairPrices.slice(0, 1).map((row) => ({
        model: row.model,
        detail: row.service,
        price: row.price,
      })),
    ],
  },
];
