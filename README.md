# Tâm Táo CNC — Website

## Website giới thiệu + bảng giá của tiệm **Tâm Táo CNC**: độ SIM máy lock, eSIM/EID, CNC, thay pin, ép kính, sửa Face ID, thay kính camera.

## Mục lục

1. [Cài đặt máy lần đầu](#1-cài-đặt-máy-lần-đầu)
2. [Clone repo và chạy lên localhost](#2-clone-repo-và-chạy-lên-localhost)
3. [Muốn sửa gì thì mở file nào](#3-muốn-sửa-gì-thì-mở-file-nào)
4. [Cách sửa từng loại nội dung (có ví dụ)](#4-cách-sửa-từng-loại-nội-dung)
5. [Vibe code với AI (Claude Code / Cursor) — cách ra lệnh cho đúng](#5-vibe-code-với-ai)
6. [Kiểm tra trên localhost trước khi push](#6-kiểm-tra-trên-localhost)
7. [Lỗi thường gặp và cách xử lý](#7-lỗi-thường-gặp)
8. [Push code lên Git](#8-push-code-lên-git)
9. [Deploy](#9-deploy)
10. [Tham khảo kỹ thuật](#10-tham-khảo-kỹ-thuật)

---

## 1. Cài đặt máy lần đầu

Chỉ làm **một lần duy nhất** trên máy mới.

### Cần có

| Phần mềm              | Kiểm tra bằng lệnh | Bản tối thiểu                       |
| --------------------- | ------------------ | ----------------------------------- |
| Node.js               | `node -v`          | v18.18 trở lên (khuyến nghị v22)    |
| pnpm                  | `pnpm -v`          | 9 trở lên (dự án đang dùng 10.32.1) |
| Git                   | `git --version`    | bản nào cũng được                   |
| VS Code (hoặc Cursor) |                    | để mở và sửa code                   |

### Cài

**macOS:**

```bash
# Cài Node (nếu chưa có) — tải từ https://nodejs.org (chọn bản LTS)
# Cài pnpm:
npm install -g pnpm
```

**Windows:**

- Tải Node.js LTS từ https://nodejs.org rồi cài như phần mềm bình thường.
- Tải Git từ https://git-scm.com/download/win.
- Mở **PowerShell** hoặc **Git Bash**, chạy: `npm install -g pnpm`

Chạy lại `node -v`, `pnpm -v`, `git --version` — ra số phiên bản là xong.

---

## 2. Clone repo và chạy lên localhost

Repo: `https://github.com/vddung2169/tamtaocnc.git`
_(nếu chủ dự án đưa link repo khác thì thay vào chỗ này)_

```bash
# 1. Về thư mục bạn muốn chứa code, ví dụ:
cd ~/Documents

# 2. Tải code về
git clone https://github.com/vddung2169/tamtaocnc.git

# 3. Vào thư mục dự án
cd tamtaocnc

# 4. Cài thư viện (lần đầu hơi lâu, 1-3 phút)
pnpm install

# 5. Chạy web ở máy mình
pnpm dev
```

Terminal sẽ hiện:

```
▲ Next.js 15.x
- Local:  http://localhost:3000
✓ Ready in 2s
```

Mở trình duyệt vào **http://localhost:3000** là thấy web.

> **Giữ terminal này chạy suốt lúc làm việc.** Mỗi lần bạn lưu file (Cmd+S / Ctrl+S), trình duyệt tự load lại — không cần tắt bật gì cả.
> Muốn dừng: bấm `Ctrl + C` trong terminal đó.

Nếu `pnpm install` hỏi cho phép chạy build script của `sharp` / `unrs-resolver` → chọn **cho phép (y)**.

### Lần sau muốn làm việc tiếp

```bash
cd ~/Documents/tamtaocnc
git pull            # lấy code mới nhất về
pnpm install        # chỉ cần khi có thay đổi thư viện, chạy cho chắc
pnpm dev
```

---

## 3. Muốn sửa gì thì mở file nào

**Đây là bảng quan trọng nhất của tài liệu này.** 90% yêu cầu sửa web đều nằm trong thư mục `src/data/`.

| Muốn sửa                                                  | Mở file                                                |
| --------------------------------------------------------- | ------------------------------------------------------ |
| Số điện thoại, Zalo, Facebook, địa chỉ tiệm, tên chủ tiệm | `src/data/site.ts`                                     |
| Tiêu đề lớn trang chủ, slogan, câu cam kết                | `src/data/site.ts` (phần `site`)                       |
| Menu trên đầu trang                                       | `src/data/site.ts` → biến `nav`                        |
| 6 khối dịch vụ ở trang chủ                                | `src/data/site.ts` → biến `services`                   |
| Địa chỉ nhận máy gửi từ xa                                | `src/data/site.ts` → biến `shippingPoints`             |
| **Giá độ SIM** + điều khoản độ SIM                        | `src/data/do-sim.ts`                                   |
| **Giá thay pin** + điều khoản pin                         | `src/data/thay-pin.ts`                                 |
| **Giá ép kính / sửa cảm ứng**                             | `src/data/ep-kinh.ts`                                  |
| **Giá sửa Face ID**                                       | `src/data/face-id.ts`                                  |
| **Giá thay kính camera**                                  | `src/data/thay-kinh-camera.ts`                         |
| Trang "Tất cả bảng giá" (`/bang-gia`)                     | `src/data/price-catalog.ts`                            |
| Từ khoá cho ô tìm kiếm trên web                           | `src/data/search.ts` (thường **tự động**, xem mục 4.5) |
| Màu sắc, font chữ, bo góc                                 | `src/app/globals.css`                                  |
| Ảnh (mặt tiền, logo Zalo/FB...)                           | thư mục `public/images/`                               |
| Tiêu đề SEO / mô tả Google của 1 trang                    | `src/app/<tên-trang>/page.tsx` → phần `metadata`       |

Các trang hiện có:

| Đường dẫn                    | File                                         |
| ---------------------------- | -------------------------------------------- |
| `/` (trang chủ)              | `src/app/page.tsx`                           |
| `/bang-gia`                  | `src/app/bang-gia/page.tsx`                  |
| `/bang-gia-do-sim`           | `src/app/bang-gia-do-sim/page.tsx`           |
| `/bang-gia-thay-pin`         | `src/app/bang-gia-thay-pin/page.tsx`         |
| `/bang-gia-ep-kinh`          | `src/app/bang-gia-ep-kinh/page.tsx`          |
| `/bang-gia-sua-face-id`      | `src/app/bang-gia-sua-face-id/page.tsx`      |
| `/bang-gia-thay-kinh-camera` | `src/app/bang-gia-thay-kinh-camera/page.tsx` |

---

## 4. Cách sửa từng loại nội dung

### 4.1. Đổi số điện thoại / Zalo / Facebook / địa chỉ

Mở `src/data/site.ts`, sửa **đúng phần chữ nằm trong dấu nháy kép**:

```ts
  phone: "0786789636",              // số thô
  phoneDisplay: "078 6789 636",     // số hiển thị đẹp trên web
  phoneIntl: "+84786789636",        // số quốc tế (dùng cho Google)
  phoneHref: "tel:0786789636",      // link bấm để gọi
  zaloHref: "http://zalo.me/84786789636",
  facebookHref: "https://www.facebook.com/...",

  storeAddress: "135 đường Lê Lợi, P. Hạnh Thông, TP. Hồ Chí Minh",
```

> ⚠️ Đổi số điện thoại thì phải đổi **cả 4 dòng** `phone`, `phoneDisplay`, `phoneIntl`, `phoneHref` — nếu không sẽ chỗ đúng chỗ sai.

### 4.2. Sửa giá / thêm dòng giá

Ví dụ thêm một dòng vào bảng giá pin. Mở `src/data/thay-pin.ts`:

```ts
export const batteryPrices: readonly BatteryPriceRow[] = [
  { model: "iPhone 16 Pro", capacityMah: 3900, price: "1.100k" },
  { model: "iPhone 16 Pro Max", capacityMah: 5180, price: "1.400k" },
  { model: "iPhone 17", capacityMah: 4000, price: "1.500k" }, // ← dòng mới thêm
];
```

Quy tắc bắt buộc:

- Copy nguyên một dòng cũ rồi sửa chữ bên trong → an toàn nhất.
- **Giá luôn để trong dấu nháy kép**: `price: "800k"`, `price: "800k - 1.000k"`. Không được viết `price: 800`.
- Mỗi dòng kết thúc bằng dấu **phẩy** `,`.
- Số dung lượng pin (`capacityMah`) thì **không** có nháy kép, vì đó là số thật.

Bảng giá độ SIM (`src/data/do-sim.ts`) có dạng hơi khác — 3 cột `model`, `service`, `price`:

```ts
{ model: "17 Pro Max", service: "CNC, add eSIM được", price: "1.200k" },
```

### 4.3. Sửa điều khoản / lưu ý

Trong cùng file data, tìm biến có chữ `Terms`. Mỗi điều khoản là **một câu trong nháy kép, kết thúc bằng phẩy**:

```ts
export const batteryTerms: readonly string[] = [
  "Thay pin bảo hành 1 năm tất cả tình trạng lỗi của pin.",
  "Pin có giấy chứng nhận thẩm định từ cơ quan Việt Nam.",
  "Câu mới thêm vào đây.",
];
```

### 4.4. Thay ảnh

- Bỏ ảnh mới vào `public/images/`.
- **Cách dễ nhất:** đặt tên file **trùng y hệt** tên file cũ (ví dụ đè lên `mat-tien-tam-tao-cnc.jpg`) → không phải sửa code dòng nào.
- Nếu đặt tên mới: tên **không dấu, không khoảng trắng** (dùng gạch ngang), rồi tìm tên file cũ trong code để thay.

### 4.5. Ô tìm kiếm trên web

File `src/data/search.ts` **tự động** đọc dữ liệu từ các file bảng giá. Bạn thêm dòng giá mới ở mục 4.2 thì ô tìm kiếm tự có, **không cần đụng vào file này**.

### 4.6. Sửa tiêu đề hiện trên Google (SEO)

Mở file `page.tsx` của trang đó, sửa phần `metadata` ở đầu file:

```ts
export const metadata: Metadata = {
  title: "Bảng giá thay pin iPhone dung lượng cao",
  description: "Mô tả ngắn hiện dưới tiêu đề trên Google, khoảng 150 ký tự.",
  ...
};
```

---

## 5. Vibe code với AI

Nếu bạn không tự sửa code được thì dùng **Claude Code** (terminal) hoặc **Cursor** (editor) — mở ngay tại thư mục dự án và ra lệnh bằng tiếng Việt.

### Cách ra lệnh cho đúng

**Prompt tốt** = nói rõ _sửa cái gì_, _thành cái gì_, và _ở file nào (nếu biết)_:

> ✅ "Thêm dòng giá pin iPhone 17, dung lượng 4000 mAh, giá 1.500k vào file `src/data/thay-pin.ts`"

> ✅ "Đổi số điện thoại toàn bộ website từ 0786789636 sang 0909123456. Nhớ đổi cả `phoneDisplay`, `phoneIntl`, `phoneHref` và JSON-LD trong `layout.tsx`."

> ✅ "Thêm trang bảng giá mới `/bang-gia-thay-man-hinh`, làm y hệt cấu trúc trang `/bang-gia-thay-pin`, dữ liệu để trong `src/data/thay-man-hinh.ts`, và nhớ thêm vào menu, sitemap, trang `/bang-gia` và ô tìm kiếm."

**Prompt tệ:**

> ❌ "Làm web đẹp hơn"
> ❌ "Sửa giá đi"
> ❌ "Thêm trang mới"

### 4 câu nên dán kèm khi nhờ AI

```
- Chỉ sửa đúng phần tôi yêu cầu, không tự ý đổi thiết kế, màu sắc hay bố cục.
- Sau khi sửa xong chạy `pnpm build` để chắc chắn không lỗi.
- Nói cho tôi biết bạn đã sửa những file nào.
- Đừng xoá nội dung cũ nếu tôi không bảo xoá.
```

### Nguyên tắc an toàn khi vibe code

1. **Trước khi nhờ AI sửa, hãy commit code đang chạy tốt** (mục 8). Sai thì quay lại được bằng `git checkout .`
2. **Sửa từng việc một.** Đừng gộp "đổi giá + thêm trang + đổi màu" vào một lần.
3. **AI sửa xong → tự mắt nhìn localhost**, đừng tin lời AI nói "đã xong".
4. **Không đụng vào các thư mục này:** `node_modules/`, `.next/`, `pnpm-lock.yaml`. Đây là file máy tự sinh.
5. Nếu AI đề nghị cài thêm thư viện lạ, database, hay backend → **hỏi lại chủ dự án trước**. Web này cố ý làm đơn giản, không cần những thứ đó.

---

## 6. Kiểm tra trên localhost

Sau **mỗi lần sửa**, làm đủ 4 bước này rồi mới push:

### Bước 1 — Xem trang vừa sửa

Terminal vẫn đang `pnpm dev`. Mở http://localhost:3000, bấm vào đúng trang bạn vừa sửa, xem nội dung đã đổi chưa.

Nếu không thấy đổi: bấm **Cmd+Shift+R** (Mac) / **Ctrl+F5** (Windows) để load lại sạch cache.

### Bước 2 — Xem trên giao diện điện thoại

Khách chủ yếu vào bằng điện thoại. Trong Chrome: bấm **F12** → bấm icon điện thoại/tablet ở góc trái thanh công cụ → chọn **iPhone 14 Pro**. Kiểm tra chữ không bị tràn, bảng giá không bị vỡ.

### Bước 3 — Kiểm tra terminal có báo lỗi đỏ không

Nhìn lại cửa sổ đang chạy `pnpm dev`. Có chữ đỏ `Error` → xem mục 7.

### Bước 4 — Chạy thử bản thật

```bash
# Dừng pnpm dev bằng Ctrl+C, rồi:
pnpm build
```

- Ra dòng `✓ Compiled successfully` → **an toàn, được phép push**.
- Ra chữ đỏ `Failed to compile` → **chưa được push**, xem mục 7.

Muốn xem thử bản thật:

```bash
pnpm start     # rồi mở http://localhost:3000
```

---

## 7. Lỗi thường gặp

| Hiện tượng                        | Nguyên nhân & cách xử lý                                                                                  |
| --------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `pnpm: command not found`         | Chưa cài pnpm → `npm install -g pnpm`                                                                     |
| `Port 3000 is already in use`     | Đã có một cửa sổ `pnpm dev` chạy rồi. Đóng bớt, hoặc dùng `pnpm dev -- -p 3001`                           |
| `Module not found`                | Thiếu thư viện → chạy `pnpm install`                                                                      |
| `Unexpected token` / `,` expected | Thiếu dấu **phẩy** hoặc thiếu **nháy kép** ở dòng vừa sửa. Đọc số dòng trong báo lỗi rồi soi đúng dòng đó |
| Trang trắng / lỗi đỏ đầy màn hình | Đọc dòng đầu tiên của lỗi, nó ghi rõ file và số dòng                                                      |
| Sửa xong nhưng web không đổi      | Cmd+Shift+R. Vẫn không được thì Ctrl+C rồi `pnpm dev` lại                                                 |
| Sửa loạn xạ, muốn quay về như cũ  | `git checkout .` — xoá hết thay đổi chưa commit, quay về bản gần nhất                                     |

Cách nhanh nhất khi bí: **copy nguyên đoạn lỗi đỏ trong terminal, dán cho AI và hỏi "lỗi này sửa sao?"**

---

## 8. Push code lên Git

### Lần đầu trên máy mới — khai báo tên

```bash
git config --global user.name "Tên của bạn"
git config --global user.email "email@cua.ban"
```

### Quy trình push (làm mỗi lần sửa xong)

```bash
# 1. Kiểm tra mình đã sửa những file nào
git status

# 2. Chắc chắn code build được (rất quan trọng!)
pnpm build

# 3. Thêm toàn bộ thay đổi
git add .

# 4. Ghi lại mô tả ngắn — viết bằng tiếng Việt cũng được
git commit -m "Cap nhat gia thay pin iPhone 17"

# 5. Đẩy lên GitHub
git push
```

Xong.

### Nếu `git push` báo lỗi bị từ chối

Nghĩa là có người khác đã push trước bạn:

```bash
git pull --rebase
git push
```

### Nếu chưa có quyền push

GitHub sẽ hỏi tài khoản. Nhờ chủ repo **add bạn làm Collaborator** (Settings → Collaborators trên GitHub), rồi đăng nhập bằng **Personal Access Token** thay cho mật khẩu (GitHub → Settings → Developer settings → Personal access tokens).

### Mẹo: làm trên nhánh riêng cho an toàn

Nếu thay đổi lớn hoặc bạn chưa tự tin, đừng push thẳng vào `main`:

```bash
git checkout -b sua-gia-thang-9     # tạo nhánh mới
# ... sửa code ...
git add .
git commit -m "Cap nhat bang gia thang 9"
git push -u origin sua-gia-thang-9
```

Rồi vào GitHub bấm **Compare & pull request** để chủ dự án duyệt trước khi lên web thật.

### Không bao giờ commit những thứ này

`node_modules/`, `.next/`, `.env*` — đã được chặn sẵn trong `.gitignore`, cứ để nguyên đừng sửa file đó.

---

### Cấu trúc thư mục

```
src/
  app/
    layout.tsx                  # font, metadata gốc, JSON-LD LocalBusiness
    page.tsx                    # Trang chủ
    bang-gia/page.tsx           # Trang tổng hợp tất cả bảng giá
    bang-gia-*/page.tsx         # Các trang bảng giá riêng
    opengraph-image.tsx         # ảnh chia sẻ mạng xã hội, tự sinh
    sitemap.ts · robots.ts      # SEO, sinh tự động từ nav
    globals.css                 # màu, font, class dùng chung
  components/
    layout/                     # SiteHeader, SiteFooter, MobileActionBar, Logotype
    sections/                   # Hero, ServiceList, PriceTable, TermsList, ContactStrip...
    search/SiteSearch.tsx       # ô tìm kiếm
    theme/                      # chuyển sáng/tối
    ui/                         # component shadcn/ui — hạn chế sửa tay
    BrandIcons.tsx              # icon Zalo, Facebook
  data/                         # ⭐ toàn bộ nội dung web nằm ở đây
  lib/                          # hàm tiện ích
public/images/                  # ảnh
```

### Hệ màu (khai báo trong `src/app/globals.css`)

| Token                | Hex       |
| -------------------- | --------- |
| `--background`       | `#0B0D0C` |
| `--surface`          | `#161A18` |
| `--line`             | `#2A302C` |
| `--neon`             | `#2BE85F` |
| `--neon-deep`        | `#128A3A` |
| `--foreground`       | `#FFFFFF` |
| `--muted-foreground` | `#A8B0AA` |

Ba class CSS dùng lại nhiều:

- `.type-display` — chữ hoa Barlow Condensed, dùng cho tiêu đề và tên dịch vụ
- `.neon-frame` — khối bo góc viền xanh phát sáng, motif chính lấy từ bảng hiệu
- `.num` — JetBrains Mono + `tabular-nums`, dùng cho giá, dung lượng, số điện thoại

### SEO

- Mỗi trang có `metadata` + canonical riêng, `lang="vi"`.
- JSON-LD `LocalBusiness` trong `layout.tsx`.
- `sitemap.xml` và `robots.txt` sinh tự động từ `nav` trong `src/data/site.ts`.
- `next.config.ts` redirect 301 các URL WordPress cũ (`?page_id=20` → `/bang-gia-do-sim`, v.v.).

### Muốn thêm hẳn một trang bảng giá mới

Cần đụng vào 5 chỗ (nhờ AI làm cả 5, đừng làm thiếu):

1. Tạo file dữ liệu `src/data/<ten-moi>.ts` — copy `src/data/thay-pin.ts` rồi sửa.
2. Tạo `src/app/bang-gia-<ten-moi>/page.tsx` — copy từ `src/app/bang-gia-thay-pin/page.tsx`.
3. Thêm vào `nav` trong `src/data/site.ts` (nếu muốn hiện trên menu) → sitemap tự cập nhật theo.
4. Thêm vào `priceCatalog` trong `src/data/price-catalog.ts` để hiện ở trang `/bang-gia`.
5. Thêm import vào `src/data/search.ts` để ô tìm kiếm nhận ra.

### Lệnh hay dùng

```bash
pnpm dev      # chạy localhost, tự reload khi lưu file
pnpm build    # build thử, kiểm tra lỗi trước khi push
pnpm start    # chạy bản build (giống web thật nhất)
pnpm lint     # kiểm tra chất lượng code
```

### Việc còn tồn

- [ ] Thay ảnh mặt tiền thật vào `public/images/mat-tien-tam-tao-cnc.jpg`
- [ ] Bổ sung ảnh xưởng / máy CNC / sản phẩm sau khi làm
- [ ] Có logo vector thì thay logotype chữ trong `src/components/layout/Logotype.tsx`
- [ ] Đo Lighthouse mobile (mục tiêu Performance ≥ 95, Accessibility ≥ 95, SEO 100)
