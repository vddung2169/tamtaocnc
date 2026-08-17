import { KeyRound, Phone, type LucideIcon } from "lucide-react";

import { FacebookIcon, ZaloIcon } from "@/components/BrandIcons";
import { site } from "@/data/site";

type Channel = {
  label: string;
  sub: string;
  href: string;
  external: boolean;
  Icon: LucideIcon | ((props: React.SVGProps<SVGSVGElement>) => React.JSX.Element);
};

const channels: Channel[] = [
  {
    label: "ZALO",
    sub: site.phoneDisplay,
    href: site.zaloHref,
    external: true,
    Icon: ZaloIcon,
  },
  {
    label: "FACEBOOK",
    sub: site.name,
    href: site.facebookHref,
    external: true,
    Icon: FacebookIcon,
  },
  {
    label: "HOTLINE",
    sub: site.owner,
    href: site.phoneHref,
    external: false,
    Icon: Phone,
  },
  {
    label: "DỊCH VỤ UNLOCK - CHECK IMEI",
    sub: "checkle.vn",
    href: site.imeiHref,
    external: true,
    Icon: KeyRound,
  },
];

export function ContactStrip() {
  return (
    <section aria-label="Kênh liên hệ" className="reveal">
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {channels.map(({ label, sub, href, external, Icon }) => (
          <li key={label}>
            <a
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex h-full items-center gap-3 rounded-xl border border-line bg-surface px-4 py-4 transition-colors hover:border-neon/45 hover:bg-neon/5"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-neon-deep text-white">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="type-display block text-sm leading-tight">{label}</span>
                <span className="mt-0.5 block truncate text-xs text-muted-foreground">{sub}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
