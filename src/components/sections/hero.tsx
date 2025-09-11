import { useEffect, useState } from "react";

const HeroSection = () => {
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
    <section className="relative min-h-[92vh] flex items-center justify-center bg-transparent overflow-hidden">
      {/* Main Content Container */}
      <div className="w-full px-20">
        <div className="relative max-w-[1400px] mx-auto">

          {/* Main Layout - 更贴近图卡的两侧大字 */}
          <div className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            {/* DIGITAL - 左侧 */}
            <div className="text-right mr-[-14px] relative">
              <h1 className="font-display uppercase text-display-hero text-foreground">
                Digital
              </h1>
            </div>

            {/* Hero Image - 中间 */}
            <div className="relative">
              <div className="relative w-[330px] h-[440px] z-10">
                {/* Image Container */}
                {/* soft glow behind card */}
                <div className="absolute -inset-8 rounded-[36px] bg-white/80 blur-2xl -z-10"></div>
                <div className="w-full h-full rounded-[24px] overflow-hidden bg-gray-200 shadow-[0_34px_80px_rgba(0,0,0,0.13)]">
                  <img
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=840&auto=format&fit=crop"
                    alt="Portrait"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name Tag - 精确贴在图卡左上外侧 */}
                <div className="absolute -left-[120px] -top-7">
                  <span className="uppercase tracking-[0.45em] text-[12px] text-foreground/80">Duncan Robert</span>
                </div>

                {/* Hi Button - 再放大 */}
                <button className="absolute -bottom-9 -left-9 w-24 h-24 bg-dr-blue text-white rounded-full flex items-center justify-center text-[22px] font-medium hover:bg-dr-blue-hover transition-all duration-300 shadow-[0_20px_44px_rgba(91,95,255,0.35)] hover:scale-105 transform">
                  Hi
                </button>
              </div>
            </div>

            {/* DESIGNER - 右侧 */}
            <div className="text-left ml-[-14px]">
              <h1 className="font-display uppercase text-display-hero text-foreground">
                Designer
              </h1>

              {/* Subtitle - 使用设计规范的 subtitle 尺寸（响应式 14–16px） */}
              <p className="text-subtitle text-[#909090] dark:text-[#B0B0B0] mt-1 ml-2 max-w-[220px] leading-[1.6]">
                I'm a US-based digital designer
                <br className="hidden sm:block" />
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
