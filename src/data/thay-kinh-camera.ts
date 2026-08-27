export type CameraGlassPriceRow = {
  model: string;
  price: string;
};

export const cameraGlassPageTitle = "BẢNG GIÁ THAY KÍNH CAMERA";
export const cameraGlassTableTitle = "THAY KÍNH CAMERA SAU IPHONE";

export const cameraGlassTerms: readonly string[] = [
  "Giá tham khảo cho kính camera sau, chưa gồm các lỗi phát sinh ngoài hạng mục kính.",
  "Máy trầy cấn hoặc đã sửa trước đó vui lòng báo trước để chốt giá chính xác.",
];

export const cameraGlassPrices: readonly CameraGlassPriceRow[] = [
  { model: "iPhone X - 11 Pro Max", price: "500k" },
  { model: "iPhone 12 Series", price: "600k" },
  { model: "iPhone 13 Series", price: "750k" },
  { model: "iPhone 14 / 15 Series", price: "850k" },
  { model: "iPhone 16 Series", price: "1.000k" },
  { model: "iPhone 17 Series", price: "1.200k" },
];
