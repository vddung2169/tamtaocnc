import { Info } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type TermsListProps = {
  title?: string;
  items: readonly string[];
  /** Từ 4 mục trở lên thì gấp vào accordion cho đỡ đẩy bảng giá xuống dưới */
  collapsible?: boolean;
};

export function TermsList({ title = "Điều khoản dịch vụ", items, collapsible }: TermsListProps) {
  const useAccordion = collapsible ?? items.length >= 4;

  const list = (
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
          <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-neon" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );

  if (!useAccordion) {
    return (
      <section aria-label={title} className="rounded-xl border border-line bg-surface p-4 sm:p-6">
        <h2 className="type-eyebrow mb-3 flex items-center gap-2">
          <Info className="size-3.5 text-neon" aria-hidden="true" />
          {title}
        </h2>
        {list}
      </section>
    );
  }

  return (
    <section aria-label={title} className="rounded-xl border border-line bg-surface px-4 sm:px-6">
      <Accordion type="single" collapsible defaultValue="terms">
        <AccordionItem value="terms" className="border-b-0">
          <AccordionTrigger className="type-eyebrow py-4 hover:no-underline">
            <span className="flex items-center gap-2">
              <Info className="size-3.5 text-neon" aria-hidden="true" />
              {title}
            </span>
          </AccordionTrigger>
          <AccordionContent>{list}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
