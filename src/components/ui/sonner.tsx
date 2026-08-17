"use client";

import type * as React from "react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

import { useTheme } from "@/components/theme/ThemeProvider";

function Toaster({ ...props }: ToasterProps) {
  const { resolvedTheme } = useTheme();

  return (
    <Sonner
      theme={resolvedTheme}
      className="toaster group"
      position="bottom-center"
      toastOptions={{
        style: {
          background: "var(--surface)",
          border: "1px solid var(--line)",
          color: "var(--foreground)",
        },
      }}
      style={
        {
          "--normal-bg": "var(--surface)",
          "--normal-text": "var(--foreground)",
          "--normal-border": "var(--line)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
}

export { Toaster };
