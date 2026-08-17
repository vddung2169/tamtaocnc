import { ShieldCheck } from "lucide-react";

import { site } from "@/data/site";

export function WarrantyNote() {
  return (
    <section className="reveal neon-frame flex items-center gap-4 rounded-xl bg-surface px-5 py-5 sm:px-7">
      <ShieldCheck className="size-8 shrink-0 text-neon sm:size-10" aria-hidden="true" />
      <p className="type-display text-lg leading-snug sm:text-2xl">{site.commitment}</p>
    </section>
  );
}
