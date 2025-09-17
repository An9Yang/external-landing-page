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
        className="relative w-[44px] h-[22px] rounded-full border border-black/10 bg-white/80 dark:bg-black/70 dark:border-white/10 backdrop-blur-sm flex items-center p-[3px] shadow-sm transition-colors duration-200"
      >
        <span
          className={
            "absolute h-[16px] w-[16px] rounded-full transition-all duration-200 shadow-sm " +
            (isDark ? "translate-x-[22px] bg-white" : "translate-x-0 bg-black/70")
          }
        />
      </button>
    </div>
  );
};

export default ThemeToggle;
