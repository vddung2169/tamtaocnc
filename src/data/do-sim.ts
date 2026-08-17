export type SimPriceRow = {
  model: string;
  service: string;
  price: string; // giữ dạng chuỗi vì có khoảng giá "800k - 1.000k"
  note?: string;
};

export const simPageTitle = "BẢNG GIÁ ĐỘ SIM MÁY LOCK";

export const simTerms: readonly string[] = [
  "Bảng giá cho khách sỉ. Khách lẻ vui lòng cộng thêm 200-300k.",
  "Tất cả máy lock muốn độ SIM đều phải tháo máy, kể cả độ eSIM.",
  "Máy độ SIM được bảo hành 1 năm phần độ SIM, không bảo hành những chức năng khác không liên quan đến phần độ.",
  "Máy sau khi ráp lại sẽ được vệ sinh sạch sẽ, có dán ron kháng nước nhưng không thể còn tuyệt đối như nguyên bản. Khách hàng vui lòng tránh tiếp xúc nước.",
  "Số lượng lớn inbox để ép giá.",
];

export const simPrices: readonly SimPriceRow[] = [
  { model: "12 / Pro / Max", service: "Up ổ EID", price: "350k" },
  {
    model: "13 / 14 / 15 / 16 / Plus",
    service: "Up ổ EID cho máy đã độ SIM rồi",
    price: "350k - 400k",
  },
  {
    model: "14 / 15 / Plus / Pro / Max",
    service: "CNC độ SIM với máy nguyên bản",
    price: "700k",
  },
  { model: "16 / Plus / 17", service: "CNC, riêng 17 có thể add thêm eSIM", price: "800k" },
  { model: "17 Pro Max", service: "CNC, add eSIM được", price: "1.200k" },
  { model: "17 Pro / Max", service: "Thuần eSIM, add như quốc tế", price: "1.000k - 1.200k" },
  {
    model: "16 Pro / Max",
    service: "eSIM không CNC / CNC + SIM vật lý",
    price: "800k - 1.000k",
  },
  { model: "16 Pro / Max", service: "Đã CNC, up EID", price: "700k" },
  { model: "15 Pro / Max", service: "Đã CNC up EID / up EID kèm eSIM", price: "500k / 650k" },
  { model: "16e / 17e", service: "CNC TMSI, không cần SIM ghép", price: "700k" },
];
