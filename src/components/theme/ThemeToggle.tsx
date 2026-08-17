"use client";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/theme/ThemeProvider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
  /** "icon" cho thanh header, "full" cho menu di động có kèm chữ */
  variant?: "icon" | "full";
};

export function ThemeToggle({ className, variant = "icon" }: ThemeToggleProps) {
  const { resolvedTheme, toggleTheme } = useTheme();

  const toDark = resolvedTheme === "light";
  const label = toDark ? "Chuyển sang nền tối" : "Chuyển sang nền sáng";
  const Icon = toDark ? Moon : Sun;

  if (variant === "full") {
    return (
      <Button
        type="button"
        variant="outline"
        size="lg"
        onClick={toggleTheme}
        aria-label={label}
        className={className}
      >
        <Icon aria-hidden="true" />
        {toDark ? "Nền tối" : "Nền sáng"}
      </Button>
    );
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      title={label}
      aria-label={label}
      className={cn("shrink-0", className)}
    >
      <Icon aria-hidden="true" />
    </Button>
  );
}
