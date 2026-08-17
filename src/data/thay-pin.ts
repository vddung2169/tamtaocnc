export type BatteryPriceRow = {
  model: string;
  capacityMah: number;
  price: string;
};

export const batteryPageTitle = "BẢNG GIÁ THAY PIN IPHONE";
export const batteryTableTitle = "PIN DUNG LƯỢNG CAO ENERGIZER";

export const batteryTerms: readonly string[] = [
  "Thay pin bảo hành 1 năm tất cả tình trạng lỗi của pin (không bảo hành nếu tuổi thọ pin trên 85% sau 1 năm sử dụng).",
  "Pin Bision và Energizer đều có giấy chứng nhận thẩm định từ cơ quan Việt Nam.",
];

export const batteryPrices: readonly BatteryPriceRow[] = [
  { model: "iPhone X", capacityMah: 3180, price: "800k" },
  { model: "iPhone XR", capacityMah: 3580, price: "750k" },
  { model: "iPhone XS", capacityMah: 3200, price: "800k" },
  { model: "iPhone XS Max", capacityMah: 3725, price: "800k" },
  { model: "iPhone 11", capacityMah: 3600, price: "800k" },
  { model: "iPhone 11 Pro", capacityMah: 3650, price: "950k" },
  { model: "iPhone 11 Pro Max", capacityMah: 4800, price: "1.000k" },
  { model: "iPhone 12 / 12 Pro", capacityMah: 3350, price: "800k" },
  { model: "iPhone 12 Pro Max", capacityMah: 4600, price: "950k" },
  { model: "iPhone 13", capacityMah: 3550, price: "900k" },
  { model: "iPhone 13 Pro", capacityMah: 3400, price: "1.000k" },
  { model: "iPhone 13 Pro Max", capacityMah: 4870, price: "1.050k" },
  { model: "iPhone 14", capacityMah: 3670, price: "800k" },
  { model: "iPhone 14 Plus", capacityMah: 4850, price: "900k" },
  { model: "iPhone 14 Pro", capacityMah: 3490, price: "1.000k" },
  { model: "iPhone 14 Pro Max", capacityMah: 4870, price: "1.200k" },
  { model: "iPhone 15", capacityMah: 3620, price: "850k" },
  { model: "iPhone 15 Plus", capacityMah: 4780, price: "1.000k" },
  { model: "iPhone 15 Pro", capacityMah: 3500, price: "1.000k" },
  { model: "iPhone 15 Pro Max", capacityMah: 4860, price: "1.200k" },
  { model: "iPhone 16", capacityMah: 3890, price: "900k" },
  { model: "iPhone 16 Pro", capacityMah: 3900, price: "1.100k" },
  { model: "iPhone 16 Pro Max", capacityMah: 5180, price: "1.400k" },
];
