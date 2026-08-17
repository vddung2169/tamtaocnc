import { DEFAULT_THEME, THEME_STORAGE_KEY } from "@/components/theme/ThemeProvider";

/**
 * Chạy trước khi trang vẽ lần đầu để không bị chớp trắng khi vào ở dark mode.
 * Giữ thật gọn vì script này chặn render.
 */
const script = `
(function () {
  try {
    var stored = localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});
    var theme = stored === "light" || stored === "dark" || stored === "system"
      ? stored
      : ${JSON.stringify(DEFAULT_THEME)};
    var dark = theme === "dark" ||
      (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
  } catch (e) {}
})();
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
