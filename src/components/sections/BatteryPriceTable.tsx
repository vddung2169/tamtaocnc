"use client";

import { useMemo, useState } from "react";
import { Battery, CheckCircle2, Search, ShieldCheck, X } from "lucide-react";

import { cn } from "@/lib/utils";
import type { BatteryPriceRow } from "@/data/thay-pin";

type BatteryPriceTableProps = {
  title: string;
  warrantyNotice?: string;
  rows: readonly BatteryPriceRow[];
  className?: string;
};

export function BatteryPriceTable({
  title,
  warrantyNotice,
  rows,
  className,
}: BatteryPriceTableProps) {
  const [query, setQuery] = useState("");

  const filteredRows = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((row) => row.model.toLowerCase().includes(q));
  }, [rows, query]);

  return (
    <section aria-label={title} className={cn("w-full space-y-4", className)}>
      {/* Khung bảo hành nổi bật như trong file gốc */}
      <div className="relative overflow-hidden rounded-xl border border-neon/40 bg-neon/[0.07] p-4 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neon/20 text-neon">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="font-semibold tracking-wide text-foreground uppercase sm:text-base">
                {warrantyNotice ?? "PIN BẢO HÀNH 1 NĂM TẤT CẢ CÁC LỖI LIÊN QUAN ĐẾN PIN"}
              </p>
              <p className="mt-0.5 text-sm font-medium text-neon">
                Bảo hành đổi pin mới nếu dung lượng % pin tụt dưới 85% trong 1 năm
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 self-start rounded-full border border-neon/30 bg-background/80 px-3 py-1 text-xs text-muted-foreground sm:self-center">
            <CheckCircle2 className="h-3.5 w-3.5 text-neon" />
            <span>Có giấy chứng nhận kiểm định an toàn</span>
          </div>
        </div>
      </div>

      {/* Box bảng giá chính */}
      <div className="overflow-hidden rounded-xl border border-line bg-surface">
        {/* Header điều khiển: tiêu đề + ô tìm kiếm nhanh */}
        <div className="flex flex-col gap-3 border-b border-line bg-neon/5 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="type-display text-lg sm:text-xl">{title}</h2>
            <p className="mt-1 text-xs text-muted-foreground">
              ⚡ Pin DLC hãng không tên: bằng giá với Bison dung lượng chuẩn
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Thanh tìm kiếm nhanh model */}
            <div className="relative w-full sm:w-64">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Tìm model (vd: 13, Pro Max, 15)..."
                className="w-full rounded-lg border border-line bg-background py-1.5 pr-8 pl-9 text-xs text-foreground placeholder:text-muted-foreground focus:border-neon focus:outline-none"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label="Xóa tìm kiếm"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              ) : null}
            </div>

            <span className="type-eyebrow shrink-0 text-xs">
              <span className="num font-semibold text-neon">{filteredRows.length}</span> / {rows.length} máy
            </span>
          </div>
        </div>

        {/* Thông báo nếu không tìm thấy kết quả */}
        {filteredRows.length === 0 ? (
          <div className="p-8 text-center">
            <Battery className="mx-auto h-8 w-8 text-muted-foreground" />
            <p className="mt-2 text-sm text-muted-foreground">
              Không tìm thấy model nào phù hợp với từ khóa &ldquo;{query}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => setQuery("")}
              className="mt-3 rounded-md border border-neon/40 px-3 py-1 text-xs font-medium text-neon hover:bg-neon/10"
            >
              Xem tất cả model
            </button>
          </div>
        ) : null}

        {/* Desktop view (>= md): Bảng 5 cột chuẩn xác theo tài liệu */}
        {filteredRows.length > 0 ? (
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-line bg-background/50">
                  <th scope="col" className="type-eyebrow px-5 py-3.5 font-semibold text-foreground">
                    MODEL
                  </th>
                  <th scope="col" className="type-eyebrow px-5 py-3.5 text-center font-semibold text-neon">
                    ENERGIZER DLC
                  </th>
                  <th scope="col" className="type-eyebrow px-5 py-3.5 text-center font-semibold text-foreground">
                    BISON DL CHUẨN
                  </th>
                  <th scope="col" className="type-eyebrow px-5 py-3.5 text-center font-semibold text-foreground">
                    DLC HÃNG KO TÊN
                    <span className="block text-[10px] font-normal text-muted-foreground">(= Bison DL chuẩn)</span>
                  </th>
                  <th scope="col" className="type-eyebrow px-5 py-3.5 text-center font-semibold text-foreground">
                    PIN SÀN CỔ CÁP
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line/70">
                {filteredRows.map((row) => {
                  const isPinSanEmpty = row.pinSanCoCap === "-";
                  const isPinSanDLC = row.pinSanCoCap.startsWith("DLC");

                  return (
                    <tr
                      key={row.model}
                      className="transition-colors hover:bg-neon/[0.04]"
                    >
                      {/* Cột 1: Model */}
                      <th scope="row" className="px-5 py-3.5 font-normal">
                        <span className="num inline-flex items-center rounded-md border border-neon/40 bg-neon/10 px-2.5 py-1 text-xs font-semibold text-neon">
                          {row.model}
                        </span>
                      </th>

                      {/* Cột 2: Energizer DLC */}
                      <td className="num px-5 py-3.5 text-center font-semibold text-neon">
                        {row.energizerDlc}
                      </td>

                      {/* Cột 3: Bison DL chuẩn */}
                      <td className="num px-5 py-3.5 text-center font-medium text-foreground">
                        {row.bisonDlChuan}
                      </td>

                      {/* Cột 4: DLC hãng ko tên (= giá Bison DL chuẩn) */}
                      <td className="num px-5 py-3.5 text-center">
                        <span className="font-medium text-foreground/90">{row.dlcNoName}</span>
                        <span className="mt-0.5 block text-[10px] text-muted-foreground">
                          Bằng Bison
                        </span>
                      </td>

                      {/* Cột 5: Pin sàn cổ cáp */}
                      <td className="num px-5 py-3.5 text-center">
                        {isPinSanEmpty ? (
                          <span className="text-muted-foreground/40">—</span>
                        ) : isPinSanDLC ? (
                          <span className="inline-flex items-center gap-1 font-medium text-foreground">
                            <span className="rounded bg-neon/15 px-1 py-0.5 text-[10px] font-semibold text-neon">
                              DLC
                            </span>
                            {row.pinSanCoCap.replace("DLC ", "")}
                          </span>
                        ) : (
                          <span className="font-medium text-foreground">{row.pinSanCoCap}</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : null}

        {/* Mobile view (< md): Thiết kế dạng Card thông minh, rõ ràng, không bị chật chội */}
        {filteredRows.length > 0 ? (
          <ul className="divide-y divide-line/70 md:hidden">
            {filteredRows.map((row) => {
              const isPinSanEmpty = row.pinSanCoCap === "-";

              return (
                <li key={row.model} className="p-4 transition-colors hover:bg-neon/[0.02]">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="num inline-flex items-center rounded-md border border-neon/40 bg-neon/10 px-2.5 py-1 text-sm font-semibold text-neon">
                      {row.model}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {/* Energizer DLC */}
                    <div className="rounded-lg border border-neon/20 bg-neon/[0.04] p-2.5">
                      <p className="text-[11px] text-muted-foreground">Energizer DLC</p>
                      <p className="num mt-1 text-base font-semibold text-neon">
                        {row.energizerDlc}
                      </p>
                    </div>

                    {/* Bison DL chuẩn */}
                    <div className="rounded-lg border border-line bg-background/50 p-2.5">
                      <p className="text-[11px] text-muted-foreground">Bison DL chuẩn</p>
                      <p className="num mt-1 text-base font-semibold text-foreground">
                        {row.bisonDlChuan}
                      </p>
                    </div>

                    {/* DLC hãng ko tên */}
                    <div className="rounded-lg border border-line bg-background/50 p-2.5">
                      <div className="flex items-center justify-between">
                        <p className="text-[11px] text-muted-foreground">DLC hãng ko tên</p>
                      </div>
                      <p className="num mt-1 text-base font-semibold text-foreground">
                        {row.dlcNoName}
                      </p>
                      <p className="text-[10px] text-muted-foreground">(= Giá Bison)</p>
                    </div>

                    {/* Pin sàn cổ cáp */}
                    <div className="rounded-lg border border-line bg-background/50 p-2.5">
                      <p className="text-[11px] text-muted-foreground">Pin sàn cổ cáp</p>
                      <p className="num mt-1 text-base font-semibold text-foreground">
                        {isPinSanEmpty ? (
                          <span className="text-muted-foreground/50">—</span>
                        ) : (
                          row.pinSanCoCap
                        )}
                      </p>
                      {row.pinSanCoCap.startsWith("DLC") ? (
                        <p className="text-[10px] text-neon">Phôi pin DLC</p>
                      ) : null}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
