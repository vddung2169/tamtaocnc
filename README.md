# Tâm Táo CNC — website

Website tĩnh cho tiệm Tâm Táo CNC: độ SIM vật lý / eSIM / EID, CNC máy iPhone lock, sửa chữa linh kiện và thay pin dung lượng cao.

Next.js 15 (App Router) · TypeScript strict · Tailwind CSS v4 · shadcn/ui · pnpm.

## Chạy dự án

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # build production
pnpm start    # chạy bản build
pnpm lint
```

Yêu cầu Node 18.18+ (đã test trên Node 22) và pnpm 9+.

Lần `pnpm install` đầu tiên, nếu pnpm hỏi về build script của `sharp` / `unrs-resolver`, chọn cho phép. File `pnpm-workspace.yaml` đã khai báo sẵn `allowBuilds`.

Lần `pnpm build` đầu tiên cần mạng để `next/font` tải Barlow Condensed, Be Vietnam Pro và JetBrains Mono từ Google Fonts. Sau đó font được self-host trong bundle, không gọi ra ngoài lúc chạy.

## Cấu trúc

```
src/
  app/
    layout.tsx                  # font, metadata gốc, JSON-LD LocalBusiness
    page.tsx                    # Trang chủ
    bang-gia-do-sim/page.tsx
    bang-gia-thay-pin/page.tsx
    opengraph-image.tsx         # og:image tự sinh
    sitemap.ts · robots.ts
    globals.css                 # design token, dark-only
  components/
    layout/                     # SiteHeader, SiteFooter, MobileActionBar, Logotype
    sections/                   # Hero, ServiceList, PriceTeaser, PriceTable,
                                # TermsList, WarrantyNote, ShippingInfo, ContactStrip
    ui/                         # shadcn/ui
    BrandIcons.tsx              # icon Zalo, Facebook (lucide 1.x đã bỏ brand icon)
  data/
    site.ts                     # liên hệ, địa chỉ, nav, 6 dịch vụ trên bảng hiệu
    do-sim.ts                   # bảng giá độ SIM + điều khoản
    thay-pin.ts                 # bảng giá pin + điều khoản
  lib/utils.ts
```

## Sửa nội dung

Nội dung tĩnh, không CMS. Sửa giá = sửa file TypeScript rồi deploy lại.

| Muốn sửa | Mở file |
| --- | --- |
| Số điện thoại, Zalo, Facebook, địa chỉ | `src/data/site.ts` |
| Giá độ SIM, điều khoản độ SIM | `src/data/do-sim.ts` |
| Giá pin, điều khoản pin | `src/data/thay-pin.ts` |
| Menu 3 mục | `nav` trong `src/data/site.ts` |
| 6 khối dịch vụ | `services` trong `src/data/site.ts` |
| Màu, font, bo góc | `src/app/globals.css` |

Giá để dạng chuỗi (`"800k - 1.000k"`) vì có khoảng giá, đừng đổi sang number.

## Ảnh

| File | Dùng ở đâu | Trạng thái |
| --- | --- | --- |
| `public/images/mat-tien-tam-tao-cnc.jpg` | Khối ảnh trong Hero | **Placeholder** — thay bằng ảnh mặt tiền thật, tỉ lệ 4:3 |
| `public/placeholder/xuong-cnc.jpg` | chưa dùng | chờ ảnh xưởng / máy CNC |
| `public/placeholder/san-pham-sau-khi-lam.jpg` | chưa dùng | chờ ảnh máy sau khi làm |
| `public/placeholder/og-cover.jpg` | chưa dùng | og:image hiện được sinh động bằng `opengraph-image.tsx` |

Thay ảnh: giữ nguyên tên file và tỉ lệ là xong, không phải sửa code. Ảnh mới đặt trong `public/images/`, tên không dấu, và dùng qua `next/image` kèm `width`/`height`.

Chưa có logo vector. Logo hiện là logotype bằng chữ (`src/components/layout/Logotype.tsx`): "Tâm Táo" xanh neon + "CNC" trắng, đúng như bảng hiệu. Có file SVG thì thay trong component đó.

## Hệ màu

Lấy từ bảng hiệu cửa tiệm, khai báo trong `globals.css`:

| Token | Hex |
# tamtaocnc
| --- | --- |
| `--background` | `#0B0D0C` |
| `--surface` | `#161A18` |
| `--line` | `#2A302C` |
| `--neon` | `#2BE85F` |
| `--neon-deep` | `#128A3A` |
| `--foreground` | `#FFFFFF` |
| `--muted-foreground` | `#A8B0AA` |

Dark là mặc định và là duy nhất, không có light mode.

Ba class dùng lại nhiều:
- `.type-display` — chữ hoa Barlow Condensed, dùng cho tiêu đề và tên dịch vụ
- `.neon-frame` — khối bo góc viền xanh phát sáng nhẹ, motif chính lấy từ bảng hiệu
- `.num` — JetBrains Mono + `tabular-nums`, dùng cho giá, dung lượng, số điện thoại

## SEO

- Metadata + canonical riêng cho từng trang, `lang="vi"`.
- JSON-LD `LocalBusiness` trong `layout.tsx`, telephone `+84786789636`.
- `sitemap.xml` và `robots.txt` sinh tự động từ `nav`.
- `next.config.ts` redirect 301 URL WordPress cũ:
  - `/?page_id=20` → `/bang-gia-do-sim`
  - `/?page_id=40` → `/bang-gia-thay-pin`
  - `/?page_id=2` → `/`

**Cần kiểm tra trước khi lên production:** Next mặc định giữ query string khi redirect, nên rule `?page_id=2` → `/` có thể lặp. Sau khi `pnpm build && pnpm start`, chạy:

```bash
curl -I "http://localhost:3000/?page_id=2"
curl -I "http://localhost:3000/?page_id=20"
```

Nếu rule `page_id=2` trả về vòng lặp, xóa hẳn block đó trong `next.config.ts`. Thẻ canonical trên trang chủ đã xử lý được trường hợp này rồi.

Trước khi deploy, đổi `site.url` trong `src/data/site.ts` sang domain thật nếu khác `https://tamtaocnc.com` — `metadataBase`, canonical, sitemap và og:image đều lấy từ đó.

## Deploy

Toàn bộ trang là Server Component tĩnh, không database, không API route. Deploy thẳng lên Vercel là chạy được, không cần biến môi trường.

## Việc còn lại

- [ ] Thay ảnh mặt tiền thật vào `public/images/mat-tien-tam-tao-cnc.jpg`
- [ ] Bổ sung ảnh xưởng / máy CNC / sản phẩm sau khi làm
- [ ] Logo vector thay cho logotype chữ
- [ ] Kiểm tra redirect `?page_id=2` như ghi ở trên
- [ ] Đo Lighthouse mobile trên bản deploy (mục tiêu Performance ≥ 95, Accessibility ≥ 95, SEO 100)
# tamtaocnc
# tamtaocnc
