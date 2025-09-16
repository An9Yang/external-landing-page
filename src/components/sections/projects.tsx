import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  bgColor: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "SUMMER VIBES FESTIVAL CAMPAIGN",
    category: "Graphic Design",
    description: "Created promotional materials for the 'Summer Vibes Festival' including posters, flyers, and social media graphics.",
    image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=2000&auto=format&fit=crop",
    bgColor: "bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900"
  },
  {
    id: 2,
    title: "CORAL SPIRAL ABSTRACT",
    category: "Branding",
    description: "Description is visually dominant element of card. Featured Coral Colored spiral form with modern flowing texture and soft pink gradient background emphasizing modern digital design.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop",
    bgColor: "bg-gradient-to-br from-pink-400 via-red-400 to-orange-400"
  },
  {
    id: 3,
    title: "SHOPEASE REDESIGN SPRINT",
    category: "UI / UX Design",
    description: "Redesigned the unified 24/7 e-commerce app to enhance user experience shopping.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2000&auto=format&fit=crop",
    bgColor: "bg-gradient-to-br from-purple-400 via-pink-300 to-blue-300"
  },
  {
    id: 4,
    title: "BLACK GEOMETRIC PRISMS",
    category: "Branding",
    description: "A collection of sharp, angular black prisms floating against a gradient dark background, showcasing a modern and sophisticated approach to digital 3D geometric composition.",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=2000&auto=format&fit=crop",
    bgColor: "bg-gradient-to-br from-gray-900 via-gray-800 to-black"
  }
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // 计算section内的滚动进度
      // 根据屏幕大小调整动画开始时机
      // 大屏幕可以更早开始，小屏幕延后一些以保持间距
      const scrollStartOffset = windowHeight > 900 ? 0.8 : 0.6;
      const sectionScrollStart = sectionTop - windowHeight * scrollStartOffset;
      const sectionScrollEnd = sectionTop + sectionHeight - windowHeight;
      
      if (scrollY >= sectionScrollStart && scrollY <= sectionScrollEnd) {
        const progress = (scrollY - sectionScrollStart) / (sectionScrollEnd - sectionScrollStart);
        setScrollProgress(Math.max(0, Math.min(1, progress)));
      } else if (scrollY < sectionScrollStart) {
        setScrollProgress(0);
      } else {
        setScrollProgress(1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-background"
      id="projects"
      style={{ height: `${250 + projects.length * 100}vh` }} // 减少总高度，让动画更紧凑
    >
      {/* 标题部分 - 不再固定，可以被滚动推出 */}
      <div className="bg-background" style={{ paddingTop: '15vh', paddingBottom: '8vh' }}>
        <div className="max-w-[1440px] mx-auto px-[5vw]">
          <h2 className="ds-title text-foreground mb-4">
            FEATURED PROJECTS
          </h2>
          <p className="text-[16px] text-foreground/60 max-w-[500px]">
            These selected projects reflect my passion for blending
            strategy with creativity — solving real problems through
            thoughtful design and impactful storytelling.
          </p>
        </div>
      </div>

      {/* 卡片容器 - 固定定位，占据整个视口 */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

        <div className="relative w-full mx-auto px-[5vw]" style={{ maxWidth: 'min(1100px, 85vw)', height: 'min(75vh, 750px)' }}>
          {projects.map((project, index) => {
            const windowHeight = window.innerHeight;

            // 每张卡片占总进度的一部分（有重叠）
            const cardDuration = 0.35; // 动画持续时间
            const totalCards = projects.length;
            const spacing = 0.28; // 适当增加卡片间隙

            // 计算需要的总进度范围
            const lastCardStart = (totalCards - 1) * spacing;
            const totalProgressNeeded = lastCardStart + cardDuration;

            // 将scrollProgress从[0,1]映射到[0,totalProgressNeeded]
            const mappedProgress = scrollProgress * totalProgressNeeded;

            // 第一张卡片提前开始，其他卡片正常间隔
            const cardProgressStart = index === 0 ? 0 : index * spacing;
            const cardProgressEnd = cardProgressStart + cardDuration;

            // 计算当前卡片的个体进度 (0 到 1)
            let cardProgress = 0;
            // 第一张卡片给初始进度，根据屏幕大小调整
            // 小屏幕上减少初始进度，让卡片和文字有更多间距
            const screenRatio = windowHeight / 1080; // 以1080p为基准
            const initialProgress = Math.max(0.1, Math.min(0.25, screenRatio * 0.25));
            if (index === 0 && mappedProgress >= 0) {
              cardProgress = Math.min(1, (mappedProgress + initialProgress) / cardDuration);
            } else if (mappedProgress >= cardProgressStart && mappedProgress <= cardProgressEnd) {
              cardProgress = (mappedProgress - cardProgressStart) / (cardProgressEnd - cardProgressStart);
            } else if (mappedProgress > cardProgressEnd) {
              cardProgress = 1;
            }

            // 卡片Y位置：从屏幕底部滑到中心偏上位置
            // 使用视口高度的百分比而不是固定像素，确保在不同屏幕上表现一致
            const cardHeight = windowHeight * 0.75; // 卡片高度为视口的75%
            const cardFinalOffset = windowHeight * 0.05; // 减少向上偏移，让卡片位置更低，远离header
            let translateY = (windowHeight / 2 + cardHeight / 2) * (1 - cardProgress) - (cardProgress === 1 ? cardFinalOffset : cardProgress * cardFinalOffset);

            // 缩放逻辑：当下一张卡片开始进入时就开始缩小
            let scale = 1;
            const nextCardStart = (index + 1) * spacing;
            if (mappedProgress > nextCardStart && index < totalCards - 1) {
              // 计算下一张卡片的进度
              const nextCardProgress = Math.min(1, (mappedProgress - nextCardStart) / cardDuration);
              // 从下一张卡片一开始进入就开始缩小，缩小幅度更大
              scale = 1 - nextCardProgress * 0.25; // 线性缩小到0.75，进一步增大缩小幅度
            }

            // Z-index：后面的卡片在上面
            const zIndex = (index + 1) * 10;

            // 如果卡片还没开始进入，隐藏它
            const opacity = mappedProgress >= cardProgressStart ? 1 : 0;

            return (
              <div
                key={project.id}
                className={cn(
                  "absolute inset-0 rounded-[20px] overflow-hidden",
                  "shadow-[0_50px_100px_rgba(0,0,0,0.2)]"
                )}
                style={{
                  transform: `translateY(${translateY}px) scale(${scale})`,
                  opacity,
                  zIndex,
                  transition: 'none',
                }}
              >
                {/* 背景图片 */}
                <div className={cn("absolute inset-0", project.bgColor)}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* 内容覆盖层：减弱遮罩强度，避免压灰/偏色 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* 卡片内容 */}
                <div className="absolute bottom-0 left-0 right-0 p-16">
                  {/* 类别标签 */}
                  <div className="inline-block mb-6">
                    <span className="px-5 py-2.5 bg-fs-blue text-white text-[13px] font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* 标题 */}
                  <h3 className="text-[42px] font-bold text-white mb-6 leading-tight">
                    {project.title}
                  </h3>

                  {/* 描述 */}
                  <p className="text-[16px] text-white/80 max-w-[700px] leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Browse All Projects Button - 使用与最后一张卡片完全相同的动画 */}
        {(() => {
          const windowHeight = window.innerHeight;
          const cardDuration = 0.35;
          const totalCards = projects.length;
          const spacing = 0.28;
          const lastCardIndex = totalCards - 1;

          // 使用与最后一张卡片完全相同的计算逻辑
          const lastCardStart = lastCardIndex * spacing;
          const lastCardEnd = lastCardStart + cardDuration;
          const totalProgressNeeded = lastCardStart + cardDuration;
          const mappedProgress = scrollProgress * totalProgressNeeded;

          // 计算最后一张卡片的进度（与卡片代码完全一致）
          let cardProgress = 0;
          if (mappedProgress >= lastCardStart && mappedProgress <= lastCardEnd) {
            cardProgress = (mappedProgress - lastCardStart) / (lastCardEnd - lastCardStart);
          } else if (mappedProgress > lastCardEnd) {
            cardProgress = 1;
          }

          // 使用与最后一张卡片完全相同的Y位置计算
          const cardHeight = windowHeight * 0.75;
          const cardFinalOffset = windowHeight * 0.05;
          let cardTranslateY = (windowHeight / 2 + cardHeight / 2) * (1 - cardProgress) - (cardProgress === 1 ? cardFinalOffset : cardProgress * cardFinalOffset);

          // 按钮的可见性（当最后一张卡片开始进入时显示）
          const buttonVisible = mappedProgress >= lastCardStart;
          const buttonOpacity = cardProgress;

          return (
            <div
              className="absolute left-1/2 -translate-x-1/2"
              style={{
                // 按钮位置：卡片容器底部 + 间距
                bottom: `calc(50% - ${cardHeight / 2}px - 50px)`,
                transform: `translateX(-50%) translateY(${cardTranslateY}px)`,
                opacity: buttonOpacity,
                visibility: buttonVisible ? 'visible' : 'hidden',
                transition: 'none',
                zIndex: 1, // 低于卡片
              }}
            >
              <button className="px-10 py-4 bg-transparent border-2 border-dr-blue text-dr-blue font-medium text-[15px] uppercase tracking-wider rounded-full hover:bg-dr-blue hover:text-white transition-all duration-300 whitespace-nowrap">
                Browse All Projects
              </button>
            </div>
          );
        })()}
      </div>

    </section>
  );
};

export default ProjectsSection;
