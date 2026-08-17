import { cn } from "@/lib/utils";

export type PriceTableRow = {
  /** Cột trái: model máy, hiển thị dạng chip viền xanh */
  model: string;
  /** Cột giữa: dịch vụ hoặc dung lượng pin */
  detail: string;
  /** Cột phải: giá, luôn là chuỗi vì có khoảng giá */
  price: string;
  note?: string;
};

type PriceTableProps = {
  title: string;
  /** Nhãn cột giữa: "DỊCH VỤ" hoặc "DUNG LƯỢNG" */
  detailLabel: string;
  rows: readonly PriceTableRow[];
  className?: string;
};

export function PriceTable({ title, detailLabel, rows, className }: PriceTableProps) {
  return (
    <section aria-labelledby="bang-gia" className={cn("w-full", className)}>
      <div className="overflow-hidden rounded-xl border border-line bg-surface">
        <div className="flex items-baseline justify-between gap-4 border-b border-line bg-neon/5 px-4 py-4 sm:px-6">
          <h2 id="bang-gia" className="type-display text-lg sm:text-xl">
            {title}
          </h2>
          <span className="type-eyebrow shrink-0">
            <span className="num">{rows.length}</span> mục
          </span>
        </div>

        {/* Desktop: spec sheet, hairline rule, giá mono căn phải */}
        <table className="hidden w-full border-collapse text-left md:table">
          <caption className="sr-only">
            {title} — cột model, {detailLabel.toLowerCase()} và giá tham khảo
          </caption>
          <thead>
            <tr className="border-b border-line">
              <th scope="col" className="type-eyebrow px-6 py-3 font-normal">
                Model
              </th>
              <th scope="col" className="type-eyebrow px-6 py-3 font-normal">
                {detailLabel}
              </th>
              <th scope="col" className="type-eyebrow px-6 py-3 text-right font-normal">
                Giá
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={`${row.model}-${row.detail}-${index}`}
                className="border-b border-line/70 last:border-b-0 transition-colors hover:bg-neon/[0.04]"
              >
                <th scope="row" className="px-6 py-3.5 align-middle font-normal">
                  <span className="num inline-flex rounded-md border border-neon/40 bg-neon/10 px-2.5 py-1 text-xs text-neon">
                    {row.model}
                  </span>
                </th>
                <td className="px-6 py-3.5 align-middle text-sm text-foreground/90">
                  {row.detail}
                  {row.note ? (
                    <span className="mt-0.5 block text-xs text-muted-foreground">{row.note}</span>
                  ) : null}
                </td>
                <td className="num px-6 py-3.5 text-right align-middle text-base font-medium text-neon whitespace-nowrap">
                  {row.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile: đổ thành card xếp dọc, không scroll ngang */}
        <ul className="divide-y divide-line/70 md:hidden">
          {rows.map((row, index) => (
            <li key={`${row.model}-${row.detail}-${index}`} className="px-4 py-4">
              <div className="flex flex-col gap-3">
                <div className="min-w-0">
                  <p className="type-display text-base leading-tight text-foreground sm:text-lg">
                    {row.model}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{row.detail}</p>
                  {row.note ? <p className="mt-1 text-xs text-muted-foreground">{row.note}</p> : null}
                </div>
                <p className="num text-lg font-semibold text-neon">{row.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
