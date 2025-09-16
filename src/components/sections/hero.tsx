import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";

interface HeroSectionProps {
  hideCard?: boolean;
}

const HeroSection = ({ hideCard = false }: HeroSectionProps) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center bg-transparent overflow-hidden">
      {/* Main Content Container */}
      <div className="w-full px-[5vw]">
        <div className="relative max-w-[1440px] mx-auto">

          {/* Main Layout - 优化对称性 */}
          <div className="relative grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-x-16">
            {/* DIGITAL - 左侧 */}
            <div className="flex justify-end">
              <div className="text-right space-y-3">
                <span className="text-[14px] font-medium uppercase tracking-[0.3em] text-[#666666] dark:text-[#B0B0B0]">
                  DUNCAN ROBERT
                </span>
                <h1 className="font-sans font-extrabold uppercase text-display-hero text-foreground">
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
            <div className="flex justify-start">
              <div className="text-left space-y-4 max-w-[220px]">
                <h1 className="font-sans font-extrabold uppercase text-display-hero text-foreground">
                  Designer
                </h1>

                {/* Subtitle - 与 DESIGNER 左对齐 */}
                <p className="text-subtitle text-[#909090] dark:text-[#B0B0B0] leading-[1.6]">
                  I'm a US-based digital designer
                  <br />
                  and Framer developer
                </p>
              </div>
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
