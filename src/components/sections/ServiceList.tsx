import Link from "next/link";
import {
  ArrowUpRight,
  BatteryCharging,
  CircuitBoard,
  Cpu,
  Globe,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import { services, site, type ServiceItem } from "@/data/site";
import { cn } from "@/lib/utils";

const iconMap: Record<ServiceItem["icon"], LucideIcon> = {
  battery: BatteryCharging,
  chip: CircuitBoard,
  cnc: Cpu,
  wrench: Wrench,
  globe: Globe,
  shield: ShieldCheck,
};

function ServiceBlock({ service }: { service: ServiceItem }) {
  const Icon = iconMap[service.icon];
  const isPrimary = service.level === "primary";
  const isExternal = service.href?.startsWith("http");

  const content = (
    <>
      <Icon
        className={cn("shrink-0 text-neon", isPrimary ? "size-8" : "size-5")}
        aria-hidden="true"
      />
      <span
        className={cn(
          "type-display",
          isPrimary ? "mt-4 block text-xl sm:text-2xl" : "text-sm sm:text-base",
        )}
      >
        {service.title}
      </span>
      {service.href ? (
        <ArrowUpRight
          className="absolute top-4 right-4 size-4 text-muted-foreground transition-colors group-hover:text-neon"
          aria-hidden="true"
        />
      ) : null}
    </>
  );

  const className = cn(
    "group relative block rounded-xl bg-surface transition-shadow",
    isPrimary ? "neon-frame p-5 sm:p-6" : "border border-line p-4 flex items-center gap-3",
    service.href && "hover:shadow-[0_0_28px_-10px_var(--neon)]",
  );

  if (!service.href) {
    return <div className={className}>{content}</div>;
  }

  if (isExternal) {
    return (
      <a href={service.href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={service.href} className={className}>
      {content}
    </Link>
  );
}

export function ServiceList() {
  const primary = services.filter((service) => service.level === "primary");
  const secondary = services.filter((service) => service.level === "secondary");

  return (
    <section aria-labelledby="dich-vu" className="reveal">
      <h2 id="dich-vu" className="type-display text-2xl sm:text-3xl">
        {site.tagline}
      </h2>
      <p className="type-eyebrow mt-2">{site.taglineSecondary}</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {primary.map((service) => (
          <ServiceBlock key={service.title} service={service} />
        ))}
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        {secondary.map((service) => (
          <ServiceBlock key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
}
