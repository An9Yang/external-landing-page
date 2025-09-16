import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface FlipCardProps {
  frontImage: string;
  backImage: string;
  className?: string;
}

const FlipCard = ({ frontImage, backImage, className }: FlipCardProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollProgress2, setScrollProgress2] = useState(0); // 第二段动画进度
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });
  const [hiButtonScale, setHiButtonScale] = useState(1);
  const cardRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLElement | null>(null);
  const servicesSectionRef = useRef<HTMLElement | null>(null);
  const aboutSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // 获取 section 引用
    heroSectionRef.current = document.getElementById("hero");
    servicesSectionRef.current = document.getElementById("services");
    aboutSectionRef.current = document.getElementById("about");

    const handleScroll = () => {
      if (!heroSectionRef.current || !servicesSectionRef.current || !cardRef.current) return;

      const windowHeight = window.innerHeight;
      const currentScroll = window.scrollY;
      const servicesTop = servicesSectionRef.current.offsetTop;
      
      // 第一段动画：Hero -> Services
      const scrollStart1 = 0;
      const scrollEnd1 = servicesTop + windowHeight * 0.5;
      
      let progress1 = 0;
      if (currentScroll >= scrollStart1 && currentScroll <= scrollEnd1) {
        progress1 = (currentScroll - scrollStart1) / (scrollEnd1 - scrollStart1);
        progress1 = Math.max(0, Math.min(1, progress1));
        // 使用相同的缓动函数
        progress1 = progress1 * progress1 * progress1 * (progress1 * (progress1 * 6 - 15) + 10);
      } else if (currentScroll > scrollEnd1) {
        progress1 = 1;
      }
      
      // 第二段动画：Services -> About
      let progress2 = 0;
      let cardY = 0;
      
      if (aboutSectionRef.current) {
        const aboutTop = aboutSectionRef.current.offsetTop;
        
        // 延长动画距离，确保在About内容到达屏幕中心时完成
        const scrollStart2 = servicesTop;
        const scrollEnd2 = aboutTop + windowHeight * 0.3;
        
        if (currentScroll >= scrollStart2 && currentScroll <= scrollEnd2) {
          progress2 = (currentScroll - scrollStart2) / (scrollEnd2 - scrollStart2);
          progress2 = Math.max(0, Math.min(1, progress2));
          // 使用相同的缓动函数
          progress2 = progress2 * progress2 * progress2 * (progress2 * (progress2 * 6 - 15) + 10);
        } else if (currentScroll > scrollEnd2) {
          progress2 = 1;
        }
        
        // 第三阶段：About section之后，卡片跟随页面向上移动
        // 使用fixed定位，但通过Y偏移模拟跟随效果
        // 更早开始跟随，当About内容接近屏幕中心时
        const aboutLockPoint = aboutTop + windowHeight * 0.1;
        
        if (currentScroll > aboutLockPoint) {
          // 计算超出锁定点的滚动距离
          const overScroll = currentScroll - aboutLockPoint;
          // 应用负向Y偏移，让卡片看起来跟随页面向上移动
          cardY = -overScroll;
        } else {
          cardY = 0;
        }
      }

      setScrollProgress(progress1);
      setScrollProgress2(progress2);

      // 计算卡片水平位置
      const initialX = -10; // 轻微向左偏移
      const targetX = 420; // 向右移动到 Services 右侧
      
      // 根据第一段动画进度计算位置
      const currentX = initialX + (targetX - initialX) * progress1;
      
      setCardPosition({ x: currentX, y: cardY });

      // Hi 按钮缩放（从 1 到 0）
      setHiButtonScale(Math.max(0, 1 - progress1 * 1.5)); // 更快消失
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初始调用

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 计算翻转角度
  // 第一段：0 到 180 度（显示背面）
  // 第二段：180 到 360 度（回到正面）
  const rotationY = scrollProgress * 180 + scrollProgress2 * 180;

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
          "bg-[var(--color-accent-orange)] text-white rounded-full",
          "flex items-center justify-center text-[22px] font-medium",
          "shadow-[0_20px_44px_rgba(254,91,0,0.32)]",
          "hover:bg-[var(--color-accent-orange-hover)] hover:scale-105",
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
              // 在第一段动画70%后显示，保持显示
              opacity: Math.max(0, (scrollProgress - 0.7) * 3.33),
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
