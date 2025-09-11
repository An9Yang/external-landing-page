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
    <nav className={cn("fixed top-8 left-0 w-full z-50 transition-all duration-300", className)}>
      <div className="max-w-[1440px] mx-auto px-20">
        {/* 浮岛式导航栏 */}
        <div className={cn(
          "flex items-center justify-between px-4 py-3 rounded-full transition-all duration-300",
          scrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg" 
            : "bg-white/80 backdrop-blur-sm shadow-md"
        )}>
          {/* 左侧 - Logo和状态 */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-gray-300 overflow-hidden">
                <img 
                  src="https://via.placeholder.com/40x40" 
                  alt="Duncan Robert"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <span className="text-xs text-dr-gray hidden sm:inline">Available for work</span>
          </div>

          {/* 中间 - 导航链接 */}
          <div className="flex items-center gap-8">
            <a href="#home" className="text-sm font-medium text-dr-black hover:text-dr-blue transition-colors">
              Home
            </a>
            <a href="#about" className="text-sm font-medium text-dr-black hover:text-dr-blue transition-colors">
              About
            </a>
            <a href="#projects" className="text-sm font-medium text-dr-black hover:text-dr-blue transition-colors">
              Projects
            </a>
            <a href="#blogs" className="text-sm font-medium text-dr-black hover:text-dr-blue transition-colors">
              Blogs
            </a>
          </div>

          {/* 右侧 - Contact按钮 */}
          <button className="px-5 py-2 bg-dr-black text-white text-sm font-medium rounded-full hover:bg-gray-900 transition-colors">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;