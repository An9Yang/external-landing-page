import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  hideCard?: boolean;
}

const HeroSection = ({ hideCard = false }: HeroSectionProps) => {
  const [isDark, setIsDark] = useState(false);

  const applyTheme = (dark: boolean) => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  };

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initDark = stored ? stored === "dark" : prefersDark;
    applyTheme(initDark);
    setIsDark(initDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    applyTheme(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center bg-transparent overflow-hidden">
      {/* Main Content Container */}
      <div className="w-full px-[5vw]">
        <div className="relative max-w-[1440px] mx-auto">

          {/* Main Layout - 优化对称性 */}
          <div className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-8">
            {/* DIGITAL - 左侧 */}
            <div className="text-right relative pr-4">
              <div className="inline-block text-left">
                {/* DUNCAN ROBERT - 名字标题 */}
                <div className="mb-2">
                  <span className="text-[14px] font-medium uppercase tracking-[0.3em] text-[#666666] dark:text-[#B0B0B0]">
                    DUNCAN ROBERT
                  </span>
                </div>
                <h1 className="font-display uppercase text-display-hero text-foreground">
                  Digital
                </h1>
              </div>
            </div>

            {/* Hero Image - 中间 */}
            {/* 占位区域 - 实际卡片由 FlipCard 组件渲染 */}
            <div className="relative">
              <div className={cn(
                "relative w-[330px] h-[440px] z-10",
                hideCard ? "opacity-0" : "opacity-0" // 始终隐藏，因为 FlipCard 会接管
              )}>
                {/* 占位空间，保持布局 */}
              </div>
            </div>

            {/* DESIGNER - 右侧 */}
            <div className="text-left relative pl-4">
              <h1 className="font-display uppercase text-display-hero text-foreground -mt-4">
                Designer
              </h1>

              {/* Subtitle - 与 DESIGNER 左对齐，稍微上移和左移 */}
              <p className="text-subtitle text-[#909090] dark:text-[#B0B0B0] mt-4 -ml-1 max-w-[220px] leading-[1.6]">
                I'm a US-based digital designer
                <br />
                and Framer developer
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 右侧蓝点（原图光标，不再渲染） */}

      {/* Bottom Theme Toggle - 悬浮在页面底部，随滚动固定 */}
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
              (isDark ? "translate-x-6 bg-white" : "translate-x-0.5 bg-gray-500")
            }
          />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
