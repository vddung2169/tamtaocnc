export type ScreenRepairPriceRow = {
  model: string;
  service: string;
  price: string;
};

export const glassRepairPageTitle = "BẢNG GIÁ ÉP KÍNH & ÉP CẢM ỨNG";

export const glassOnlyPrices: readonly ScreenRepairPriceRow[] = [
  { model: "iPhone X / XS / 11", service: "Ép kính", price: "500k" },
  { model: "iPhone XS Max / 11 Pro", service: "Ép kính", price: "550k" },
  { model: "iPhone 11 Pro Max / 12 Series", service: "Ép kính", price: "750k" },
  { model: "iPhone 13 Series", service: "Ép kính", price: "800k" },
  { model: "iPhone 14 Series", service: "Ép kính", price: "850k" },
  { model: "iPhone 15 Series", service: "Ép kính", price: "1.000k" },
  { model: "iPhone 16 Series", service: "Ép kính", price: "1.200k" },
  { model: "iPhone 17 Series", service: "Ép kính", price: "1.500k" },
];

export const touchRepairPrices: readonly ScreenRepairPriceRow[] = [
  { model: "iPhone X / XS / 11", service: "Ép cảm ứng", price: "800k" },
  { model: "iPhone XS Max / 11 Pro", service: "Ép cảm ứng", price: "850k" },
  { model: "iPhone 11 Pro Max", service: "Ép cảm ứng", price: "1.000k" },
  { model: "iPhone 12 Pro", service: "Ép cảm ứng", price: "1.100k" },
  { model: "iPhone 12 Pro Max", service: "Ép cảm ứng", price: "1.400k" },
];
