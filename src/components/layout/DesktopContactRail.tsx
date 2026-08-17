import Image from "next/image";

import { site } from "@/data/site";

const actions = [
  {
    label: "Zalo",
    href: site.zaloHref,
    imageSrc: "/images/zalo.jpg",
  },
  {
    label: "Facebook",
    href: site.facebookHref,
    imageSrc: "/images/fbicon.png",
  },
] as const;

export function DesktopContactRail() {
  return (
    <div className="fixed top-1/2 right-4 z-40 hidden -translate-y-1/4 md:block">
      <nav aria-label="Liên hệ nhanh trên desktop" className="flex flex-col gap-4">
        {actions.map((action) => (
          <a
            key={action.label}
            href={action.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={action.label}
            className="group flex size-16 items-center justify-center rounded-full border border-line bg-background/90 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.55)] backdrop-blur-md transition-transform hover:-translate-y-0.5 hover:border-neon/45"
          >
            <Image
              src={action.imageSrc}
              alt=""
              width={38}
              height={38}
              className="size-10 rounded-full object-cover"
              aria-hidden="true"
            />
          </a>
        ))}
      </nav>
    </div>
  );
}
