import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";
import { useLocation, Link, useNavigate } from "react-router-dom";
import logoLight from "@/assets/images/playhire-logo-light.webp";
import logoDark from "@/assets/images/playhire-logo-dark.webp";

interface NavigationProps {
  className?: string;
}

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Blogs", href: "#blogs" },
];

const Navigation = ({ className }: NavigationProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { theme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 实现section检测
  useEffect(() => {
    if (!isHomePage) return;

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // 观察所有sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [isHomePage]);

  // 处理URL中的hash，实现从detail页面返回时的自动滚动
  useEffect(() => {
    if (isHomePage && location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100); // 延迟确保页面渲染完成
    }
  }, [location, isHomePage]);

  useEffect(() => {
    // 检测实际的暗色模式状态
    const checkDarkMode = () => {
      const isDark = theme === "dark" ||
        (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
      setIsDarkMode(isDark);
    };

    checkDarkMode();

    // 监听系统主题变化
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => checkDarkMode();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  // 处理导航点击
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();

    if (!isHomePage) {
      // 如果不在首页，先导航到首页，然后滚动到对应section
      navigate('/' + sectionId);
    } else {
      // 如果在首页，直接滚动
      const element = document.querySelector(sectionId);
      if (element) {
        const offset = 100; // 导航栏高度偏移
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav className={cn("fixed top-6 left-0 w-full z-50 transition-all duration-300", className)}>
      <div className="max-w-[1440px] mx-auto px-4 flex justify-center">
        {/* 浮岛式导航栏：自适应内容宽度，整体更紧凑 */}
        <div
          className={cn(
            "flex items-center gap-8 pl-2.5 pr-2.5 py-2 rounded-full transition-all duration-300 w-max border",
            scrolled
              ? "bg-fs-white border-black/10 shadow-[0_2px_12px_rgba(0,0,0,0.1)] dark:bg-black dark:border-white/15"
              : "bg-fs-white border-black/10 shadow-[0_1px_6px_rgba(0,0,0,0.08)] dark:bg-black dark:border-white/15"
          )}
        >
          {/* 左侧 - Logo - 根据主题切换，放大中心内容 */}
          <Link to="/" className="relative group">
            <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded transition-transform duration-200 group-hover:scale-110">
              {/* 亮色logo */}
              <img
                src={logoLight}
                alt="PlayHire"
                className="absolute object-contain transition-opacity duration-200"
                style={{
                  width: '220%',
                  height: '220%',
                  maxWidth: 'none',
                  imageRendering: '-webkit-optimize-contrast',
                  transform: 'translate(-50%, calc(-50% - 2%))',
                  left: '50%',
                  top: '50%',
                  opacity: isDarkMode ? 0 : 1
                }}
              />
              {/* 暗色logo */}
              <img
                src={logoDark}
                alt="PlayHire"
                className="absolute object-contain transition-opacity duration-200"
                style={{
                  width: '75%',
                  height: '75%',
                  maxWidth: 'none',
                  imageRendering: '-webkit-optimize-contrast',
                  transform: 'translate(calc(-50% + 1px), calc(-50% - 1px))',
                  left: '50%',
                  top: '50%',
                  opacity: isDarkMode ? 1 : 0
                }}
              />
            </div>
          </Link>

          {/* 中间 - 导航链接，更小字号更紧凑 */}
          <div className="flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = isHomePage && activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "text-[14px] font-normal transition-all duration-200 relative cursor-pointer",
                    isActive
                      ? "text-fs-orange dark:text-fs-orange"
                      : "text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white"
                  )}
                >
                  {item.label}
                  {/* 激活状态指示器 */}
                  <span
                    className={cn(
                      "absolute -bottom-1.5 left-0 right-0 h-0.5 bg-fs-orange rounded-full transition-all duration-200",
                      isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                    )}
                  />
                </a>
              );
            })}
          </div>

          {/* 右侧 - Contact 胶囊链接（跳转到联系区） */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className={cn(
              "px-5 py-2 text-white text-[14px] font-medium rounded-full transition-all duration-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] cursor-pointer",
              isHomePage && activeSection === "contact"
                ? "bg-fs-blue dark:bg-fs-blue hover:bg-fs-blue/90"
                : "bg-fs-orange dark:bg-fs-orange hover:bg-fs-orange/90"
            )}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
