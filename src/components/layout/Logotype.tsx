import { cn } from "@/lib/utils";
import { site } from "@/data/site";

type LogotypeProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "text-lg sm:text-xl",
  md: "text-2xl",
  lg: "text-4xl sm:text-5xl",
} as const;

export function Logotype({ className, size = "md" }: LogotypeProps) {
  return (
    <span
      className={cn(
        "type-display inline-flex items-baseline gap-1 whitespace-nowrap sm:gap-1.5",
        sizes[size],
        className,
      )}
    >
      <span className="neon-text">{site.nameParts.green}</span>
      <span className="text-foreground">{site.nameParts.white}</span>
    </span>
  );
}
