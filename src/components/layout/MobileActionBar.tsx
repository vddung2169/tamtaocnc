import Image from "next/image";
import { Phone } from "lucide-react";

import { site } from "@/data/site";

const actions = [
  {
    label: "Gọi",
    href: site.phoneHref,
    external: false,
    Icon: Phone,
    imageSrc: null,
    primary: true,
  },
  {
    label: "Zalo",
    href: site.zaloHref,
    external: true,
    Icon: null,
    imageSrc: "/images/zalo.jpg",
    primary: false,
  },
  {
    label: "Facebook",
    href: site.facebookHref,
    external: true,
    Icon: null,
    imageSrc: "/images/fbicon.png",
    primary: false,
  },
];

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-background/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)] md:hidden">
      <nav aria-label="Liên hệ nhanh" className="grid grid-cols-3">
        {actions.map(({ label, href, external, Icon, imageSrc, primary }) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={`flex h-16 flex-col items-center justify-center gap-1 text-xs font-medium transition-colors ${
              primary ? "bg-neon text-primary-foreground" : "text-foreground hover:bg-secondary"
            }`}
          >
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt=""
                width={20}
                height={20}
                className="size-5 rounded-full object-cover"
                aria-hidden="true"
              />
            ) : (
              Icon ? <Icon className="size-5" aria-hidden="true" /> : null
            )}
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
}
