"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type Theme = "light" | "dark" | "system";
/** Theme thực sự đang hiển thị sau khi đã giải nghĩa "system" */
export type ResolvedTheme = "light" | "dark";

export const THEME_STORAGE_KEY = "tamtao-theme";
/** Dark là theme gốc của thương hiệu nên làm mặc định khi khách chưa chọn gì */
export const DEFAULT_THEME: Theme = "dark";

type ThemeContextValue = {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (next: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function systemTheme(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function resolve(theme: Theme): ResolvedTheme {
  return theme === "system" ? systemTheme() : theme;
}

function applyTheme(resolved: ResolvedTheme) {
  const root = document.documentElement;
  root.classList.toggle("dark", resolved === "dark");
  root.style.colorScheme = resolved;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(
    DEFAULT_THEME === "dark" ? "dark" : "light",
  );

  // Đọc lựa chọn đã lưu sau khi mount; script chặn ở <head> đã dựng đúng class từ trước
  useEffect(() => {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
    const initial = stored === "light" || stored === "dark" || stored === "system" ? stored : DEFAULT_THEME;

    setThemeState(initial);
    setResolvedTheme(resolve(initial));
  }, []);

  // Chỉ khi khách chọn "system" mới bám theo cài đặt máy
  useEffect(() => {
    if (theme !== "system") return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const next = systemTheme();
      setResolvedTheme(next);
      applyTheme(next);
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [theme]);

  const setTheme = useCallback((next: Theme) => {
    const nextResolved = resolve(next);

    setThemeState(next);
    setResolvedTheme(nextResolved);
    applyTheme(nextResolved);

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Chế độ riêng tư chặn localStorage thì vẫn đổi được theme trong phiên này
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, resolvedTheme, setTheme, toggleTheme }),
    [theme, resolvedTheme, setTheme, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);

  if (!ctx) {
    throw new Error("useTheme phải nằm trong <ThemeProvider>");
  }

  return ctx;
}
