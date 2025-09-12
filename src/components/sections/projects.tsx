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
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop",
    bgColor: "bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900"
  },
  {
    id: 2,
    title: "CORAL SPIRAL ABSTRACT",
    category: "Branding",
    description: "Description is visually dominant element of card. Featured Coral Colored spiral form with modern flowing texture and soft pink gradient background emphasizing modern digital design.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000&auto=format&fit=crop",
    bgColor: "bg-gradient-to-br from-pink-400 via-red-400 to-orange-400"
  },
  {
    id: 3,
    title: "SHOPEASE REDESIGN SPRINT",
    category: "UI / UX Design",
    description: "Redesigned the unified 24/7 e-commerce app to enhance user experience shopping.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000&auto=format&fit=crop",
    bgColor: "bg-gradient-to-br from-purple-400 via-pink-300 to-blue-300"
  },
  {
    id: 4,
    title: "BLACK GEOMETRIC PRISMS",
    category: "Branding",
    description: "A collection of sharp, angular black prisms floating against a gradient dark background, showcasing a modern and sophisticated approach to digital 3D geometric composition.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2000&auto=format&fit=crop",
    bgColor: "bg-gradient-to-br from-gray-900 via-gray-800 to-black"
  }
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // 计算section内的滚动进度
      const sectionScrollStart = sectionTop - windowHeight * 0.5;
      const sectionScrollEnd = sectionTop + sectionHeight - windowHeight;
      
      if (scrollY >= sectionScrollStart && scrollY <= sectionScrollEnd) {
        const progress = (scrollY - sectionScrollStart) / (sectionScrollEnd - sectionScrollStart);
        setScrollProgress(Math.max(0, Math.min(1, progress)));
        
        // 计算当前活跃的卡片索引
        const cardIndex = Math.floor(progress * (projects.length - 0.5));
        setActiveCard(Math.max(0, Math.min(projects.length - 1, cardIndex)));
      } else if (scrollY < sectionScrollStart) {
        setScrollProgress(0);
        setActiveCard(0);
      } else {
        setScrollProgress(1);
        setActiveCard(projects.length - 1);
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
      style={{ height: `${100 + projects.length * 100}vh` }} // 动态高度以容纳滚动
    >
      {/* 标题部分 - 固定在顶部 */}
      <div className="sticky top-0 pt-[200px] pb-8 bg-background z-10">
        <div className="max-w-[1440px] mx-auto px-20">
          <h2 className="text-[48px] font-bold text-foreground mb-4">
            FEATURED PROJECTS
          </h2>
          <p className="text-[16px] text-foreground/60 max-w-[500px]">
            These selected projects reflect my passion for blending
            strategy with creativity — solving real problems through
            thoughtful design and impactful storytelling.
          </p>
        </div>
      </div>

      {/* 卡片容器 - 固定定位 */}
      <div className="sticky top-[40vh] h-[60vh] flex items-center justify-center mt-20">
        <div className="relative w-full max-w-[1000px] h-[500px] mx-auto px-20">
          {projects.map((project, index) => {
            // 计算每个卡片的进度
            const cardProgress = Math.max(0, Math.min(1, 
              (scrollProgress - (index * 0.25)) * 4
            ));
            
            // 计算卡片的变换
            const isActive = index === activeCard;
            const isPassed = index < activeCard;
            
            let scale = 1;
            let translateY = 0;
            let opacity = 1;
            let zIndex = projects.length - index;
            
            if (isPassed) {
              // 已经滑过的卡片：缩小并上移
              scale = 0.85;
              translateY = -50;
              opacity = 0.3;
            } else if (isActive) {
              // 当前活跃的卡片：正在缩小
              scale = 1 - cardProgress * 0.15;
              translateY = -cardProgress * 30;
              opacity = 1;
              zIndex = projects.length;
            } else {
              // 还未到达的卡片：在下方等待
              scale = 0.95;
              translateY = (index - activeCard) * 60;
              opacity = Math.max(0, 1 - (index - activeCard) * 0.3);
            }

            return (
              <div
                key={project.id}
                className={cn(
                  "absolute inset-0 rounded-[24px] overflow-hidden",
                  "shadow-[0_34px_80px_rgba(0,0,0,0.15)]",
                  "transition-all duration-700 ease-out"
                )}
                style={{
                  transform: `scale(${scale}) translateY(${translateY}px)`,
                  opacity,
                  zIndex,
                }}
              >
                {/* 背景图片 */}
                <div className={cn("absolute inset-0", project.bgColor)}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover mix-blend-overlay opacity-50"
                  />
                </div>

                {/* 内容覆盖层 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* 卡片内容 */}
                <div className="absolute bottom-0 left-0 right-0 p-12">
                  {/* 类别标签 */}
                  <div className="inline-block mb-4">
                    <span className="px-4 py-2 bg-dr-blue text-white text-[12px] font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* 标题 */}
                  <h3 className="text-[36px] font-bold text-white mb-4 leading-tight">
                    {project.title}
                  </h3>

                  {/* 描述 */}
                  <p className="text-[14px] text-white/80 max-w-[600px] leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 底部浏览按钮 */}
      <div className="sticky bottom-20 flex justify-center">
        <button className="px-8 py-3 border-2 border-dr-blue text-dr-blue bg-white/90 backdrop-blur-sm rounded-full font-medium text-[14px] hover:bg-dr-blue hover:text-white transition-all duration-300">
          BROWSE ALL PROJECTS
        </button>
      </div>

      {/* 进度指示器 */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        {projects.map((_, index) => (
          <div
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === activeCard 
                ? "w-8 bg-dr-blue" 
                : "bg-foreground/20"
            )}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;