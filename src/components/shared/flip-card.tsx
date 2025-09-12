import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface FlipCardProps {
  frontImage: string;
  backImage: string;
  className?: string;
}

const FlipCard = ({ frontImage, backImage, className }: FlipCardProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });
  const [hiButtonScale, setHiButtonScale] = useState(1);
  const [isVisible, setIsVisible] = useState(true);
  const cardRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLElement | null>(null);
  const servicesSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // 获取 section 引用
    heroSectionRef.current = document.getElementById("hero");
    servicesSectionRef.current = document.getElementById("services");

    const handleScroll = () => {
      if (!heroSectionRef.current || !servicesSectionRef.current || !cardRef.current) return;

      const heroRect = heroSectionRef.current.getBoundingClientRect();
      const servicesRect = servicesSectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // 计算滚动进度 (0 到 1)
      // 调整时机：当 Services section 到达屏幕中心时完成动画
      const heroBottom = heroSectionRef.current.offsetTop + heroRect.height;
      const servicesTop = servicesSectionRef.current.offsetTop;
      
      // 动画开始：用户刚开始滚动就立即开始
      const scrollStart = 0; // 从页面顶部就开始检测滚动
      // 动画结束：再延长20%距离，让动画更慢
      const scrollEnd = servicesTop; // 进一步延后结束点，动画更缓慢
      
      const currentScroll = window.scrollY;
      
      let progress = 0;
      if (currentScroll >= scrollStart && currentScroll <= scrollEnd) {
        // 将进度缩放到更小范围，让动画更慢
        progress = (currentScroll - scrollStart) / (scrollEnd - scrollStart);
        progress = Math.max(0, Math.min(1, progress)); // 限制在 0-1 之间
        
        // 使用更缓慢的缓动函数
        // 这个函数会让动画在开始和结束时都很慢，中间稍快
        progress = progress * progress * progress * (progress * (progress * 6 - 15) + 10);
      } else if (currentScroll > scrollEnd) {
        progress = 1;
      }

      setScrollProgress(progress);

      // 计算卡片位置
      // 初始位置（Hero section 中的位置 - 轻微向左偏移）
      const initialX = -10; // 轻微向左偏移
      const initialY = 0;
      
      // 目标位置（Services section 右侧 - 不要垂直移动）
      const targetX = 420; // 向右移动到 Services 右侧
      const targetY = 0; // 保持水平，不垂直移动
      
      // 根据进度计算当前位置
      const currentX = initialX + (targetX - initialX) * progress;
      const currentY = initialY; // 始终保持水平
      
      setCardPosition({ x: currentX, y: currentY });

      // Hi 按钮缩放（从 1 到 0）
      setHiButtonScale(Math.max(0, 1 - progress * 1.5)); // 更快消失
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初始调用

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 计算翻转角度 (0 到 180 度) - 与平移同步
  // 直接使用 scrollProgress，确保翻转和平移完全同步
  const rotationY = scrollProgress * 180;

  return (
    <div 
      ref={cardRef}
      className={cn(
        "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
        "z-50",
        "transition-none will-change-transform",
        className
      )}
      style={{
        transform: `
          translate(-50%, -50%)
          translate(${cardPosition.x}px, ${cardPosition.y}px)
        `,
      }}
    >
      {/* Hi 按钮 - 独立层，在卡片外面 */}
      <button 
        className={cn(
          "absolute -bottom-9 -left-9 w-24 h-24",
          "bg-dr-blue text-white rounded-full",
          "flex items-center justify-center text-[22px] font-medium",
          "shadow-[0_20px_44px_rgba(91,95,255,0.35)]",
          "hover:bg-dr-blue-hover hover:scale-105",
          "transition-transform duration-300",
          "z-10"
        )}
        style={{
          transform: `scale(${hiButtonScale})`,
          opacity: hiButtonScale,
          pointerEvents: hiButtonScale > 0.1 ? "auto" : "none"
        }}
      >
        Hi
      </button>

      {/* 名字标签 - 使用小标题样式，与 DIGITAL 对齐 */}
      <div 
        className="absolute -top-12 z-10"
        style={{
          left: "-165px", // 对齐到 DIGITAL 的左边
          opacity: Math.max(0, 1 - scrollProgress * 2),
          transform: `scale(${Math.max(0.8, 1 - scrollProgress * 0.3)})`
        }}
      >
        <span className="text-[13px] font-normal uppercase tracking-[0.35em] text-[#909090] dark:text-[#B0B0B0] whitespace-nowrap">
          DUNCAN ROBERT
        </span>
      </div>

      {/* 3D 卡片容器 */}
      <div 
        className="relative w-[330px] h-[440px]"
        style={{
          transform: `rotateY(${rotationY}deg)`,
          transformStyle: "preserve-3d",
          transition: "none",
          perspective: "1200px"
        }}
      >
        {/* 正面 - 人物图片 */}
        <div 
          className={cn(
            "absolute inset-0 w-full h-full rounded-[24px] overflow-hidden",
            "shadow-[0_34px_80px_rgba(0,0,0,0.13)]"
          )}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(0deg)"
          }}
        >
          {/* 光晕效果 */}
          <div className="absolute -inset-8 rounded-[36px] bg-white/80 blur-2xl -z-10"></div>
          
          {/* 人物图片 */}
          <img
            src={frontImage}
            alt="Portrait"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 背面 - 工作台图片 */}
        <div 
          className={cn(
            "absolute inset-0 w-full h-full rounded-[24px] overflow-hidden",
            "shadow-[0_34px_80px_rgba(0,0,0,0.13)]"
          )}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <img
            src={backImage}
            alt="Creative workspace"
            className="w-full h-full object-cover"
          />
          
          {/* 装饰性遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          
          {/* "Available for work" 标签 */}
          <div 
            className="absolute top-6 left-6 flex items-center gap-2 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full px-4 py-2"
            style={{
              opacity: Math.max(0, (scrollProgress - 0.7) * 3.33), // 70% 后开始显示
              transform: `scale(${Math.max(0.8, scrollProgress)})`
            }}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[12px] font-medium text-foreground">Available for work</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;