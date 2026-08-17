export type NavItem = {
  label: string;
  href: string;
};

export type ServiceItem = {
  title: string;
  /** Tên icon trong lucide-react, map ở ServiceList */
  icon: "battery" | "chip" | "cnc" | "wrench" | "globe" | "shield";
  /** Mức nhấn: 3 khối chính trên bảng hiệu to hơn 3 mục phụ ở hai cột cửa */
  level: "primary" | "secondary";
  href?: string;
};

export type ShippingPoint = {
  label: string;
  address: string;
  /** Chuỗi tra cứu Google Maps, ghi đầy đủ hơn địa chỉ hiển thị để pin đúng vị trí */
  mapQuery: string;
  receiver: string;
  phone: string;
  note: string;
};

export const site = {
  name: "Tâm Táo CNC",
  nameParts: { green: "Tâm Táo", white: "CNC" },
  owner: "Nguyễn Đức Tâm",
  url: "https://tamtaocnc.com",

  tagline: "CHUYÊN ĐỘ SIM - ESIM - EID - CNC",
  taglineSecondary: "UY TÍN - CHẤT LƯỢNG - TẬN TÂM",

  heroTitle: "DỊCH VỤ ĐỘ SIM MÁY LOCK",
  heroSubtitle:
    "Độ SIM vật lý • EID • CNC máy Lock • Sửa chữa & thay thế linh kiện • Thay pin dung lượng cao",
  commitment: "ĐỘ SIM IPHONE LOCK CHUYÊN NGHIỆP, BẢO HÀNH 12 THÁNG.",

  phone: "0786789636",
  phoneDisplay: "078 6789 636",
  phoneIntl: "+84786789636",
  phoneHref: "tel:0786789636",
  zaloHref: "http://zalo.me/84786789636",
  facebookHref: "https://www.facebook.com/share/1Aymivcxkd/?mibextid=wwXIfr",
  imeiHref: "https://checkle.vn/dang-nhap",

  storeAddress: "135 đường Lê Lợi, P. Hạnh Thông, TP. HCM",
  storeAddressShort: "135 Lê Lợi, P. Hạnh Thông, TP HCM",
  storeMapQuery: "135 Lê Lợi, Phường Hạnh Thông, Thành phố Hồ Chí Minh, Việt Nam",
} as const;

export const nav: readonly NavItem[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Bảng giá độ SIM", href: "/bang-gia-do-sim" },
  { label: "Bảng giá thay pin", href: "/bang-gia-thay-pin" },
];

/** 6 mục lấy đúng từ bảng hiệu cửa tiệm, không tự nghĩ thêm. */
export const services: readonly ServiceItem[] = [
  { title: "CNC SIM VẬT LÝ", icon: "cnc", level: "primary", href: "/bang-gia-do-sim" },
  { title: "THAY PIN", icon: "battery", level: "primary", href: "/bang-gia-thay-pin" },
  { title: "THAY THẾ LINH KIỆN", icon: "chip", level: "primary" },
  { title: "SỬA CHỮA ĐIỆN THOẠI", icon: "wrench", level: "secondary" },
  { title: "MỞ MẠNG QUỐC TẾ", icon: "globe", level: "secondary", href: site.imeiHref },
  { title: "BẢO HÀNH DÀI HẠN", icon: "shield", level: "secondary" },
];

export const shippingPoints: readonly ShippingPoint[] = [
  {
    label: "Gửi chành xe FuTa",
    address: "9A đường số 6, Linh Xuân, TP HCM",
    mapQuery: "9A Đường số 6, Linh Xuân, Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam",
    receiver: site.owner,
    phone: site.phone,
    note: "ae ở xa gửi qua chành FuTa",
  },
  {
    label: "Gửi chuyển phát",
    address: "135 Lê Lợi, P. Hạnh Thông, TP HCM",
    mapQuery: site.storeMapQuery,
    receiver: site.owner,
    phone: site.phone,
    note: "Địa chỉ cửa tiệm, khách đến trực tiếp cũng tại đây",
  },
];
