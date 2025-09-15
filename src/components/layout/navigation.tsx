import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn("fixed top-6 left-0 w-full z-50 transition-all duration-300", className)}>
      <div className="max-w-[1440px] mx-auto px-4 flex justify-center">
        {/* 浮岛式导航栏：自适应内容宽度，整体更紧凑 */}
        <div
          className={cn(
            "flex items-center gap-8 pl-2.5 pr-2.5 py-2 rounded-full transition-all duration-300 w-max border",
            scrolled
              ? "bg-white/95 border-black/10 shadow-[0_2px_8px_rgba(0,0,0,0.06)] dark:bg-black/60 dark:border-white/15"
              : "bg-white/90 border-black/8 shadow-[0_1px_4px_rgba(0,0,0,0.05)] dark:bg-black/50 dark:border-white/10"
          )}
        >
          {/* 左侧 - Avatar */}
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=120&auto=format&fit=crop"
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-green-500 rounded-full border-2 border-white"></div>
          </div>

          {/* 中间 - 导航链接，更小字号更紧凑 */}
          <div className="flex items-center gap-8">
            <a href="#hero" className="text-[14px] font-normal text-black/90 hover:text-black transition-colors dark:text-white/90 dark:hover:text-white">Home</a>
            <a href="#about" className="text-[14px] font-normal text-black/90 hover:text-black transition-colors dark:text-white/90 dark:hover:text-white">About</a>
            <a href="#projects" className="text-[14px] font-normal text-black/90 hover:text-black transition-colors dark:text-white/90 dark:hover:text-white">Projects</a>
            <a href="#blogs" className="text-[14px] font-normal text-black/90 hover:text-black transition-colors dark:text-white/90 dark:hover:text-white">Blogs</a>
          </div>

          {/* 右侧 - Contact 胶囊链接（跳转到联系区） */}
          <a href="#contact" className="px-5 py-2 bg-black text-white text-[14px] font-normal rounded-full hover:bg-black/90 transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] dark:bg-white dark:text-black dark:hover:bg-white/90">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
