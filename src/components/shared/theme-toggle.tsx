import { useEffect, useMemo, useState } from "react";
import { useTheme } from "@/components/theme-provider";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [systemDark, setSystemDark] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => setSystemDark(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const isDark = useMemo(() => {
    if (theme === "dark") return true;
    if (theme === "light") return false;
    return systemDark;
  }, [theme, systemDark]);

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100]">
      <button
        aria-label="Toggle theme"
        role="switch"
        aria-checked={isDark}
        onClick={toggleTheme}
        className="w-12 h-[18px] rounded-full border border-black/10 bg-white/80 dark:bg-black/70 dark:border-white/10 backdrop-blur-sm flex items-center px-0.5 shadow-sm"
      >
        <span
          className={
            "inline-block h-[14px] w-[14px] rounded-full transition-transform duration-200 " +
            (isDark ? "translate-x-6 bg-white" : "translate-x-0.5 bg-black/60")
          }
        />
      </button>
    </div>
  );
};

export default ThemeToggle;
