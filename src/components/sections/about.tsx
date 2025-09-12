import { useRef } from "react";
import { cn } from "@/lib/utils";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-background relative"
      id="about"
    >
      <div className="max-w-[1440px] mx-auto px-20 pt-[380px] pb-[200px]">
        <div className="grid grid-cols-[1fr_auto] gap-20 items-start">
          
          {/* 左侧 - 内容区域 */}
          <div className="space-y-8">
            {/* 标题和描述 */}
            <div className="mb-12">
              <h2 className="text-[48px] font-bold text-foreground mb-6">
                ABOUT ME
              </h2>
              <p className="text-[16px] text-foreground/60 max-w-[500px] leading-relaxed">
                Hi, I'm Duncan — a digital designer and Framer developer
                passionate about crafting meaningful and impactful digital
                experiences.
              </p>
            </div>

            {/* 统计数据 */}
            <div className="flex gap-20 mb-12">
              <div className="space-y-1">
                <div className="text-[48px] font-bold text-dr-blue">12</div>
                <div className="text-[14px] text-foreground/60">Years of Experience</div>
              </div>
              <div className="space-y-1">
                <div className="text-[48px] font-bold text-dr-blue">270</div>
                <div className="text-[14px] text-foreground/60">Completed Projects</div>
              </div>
              <div className="space-y-1">
                <div className="text-[48px] font-bold text-dr-blue">50+</div>
                <div className="text-[14px] text-foreground/60">Clients on Worldwide</div>
              </div>
            </div>

            {/* 联系信息 */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-[14px] text-foreground/60">Call Today :</span>
                <span className="text-[14px] text-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[14px] text-foreground/60">Email :</span>
                <span className="text-[14px] text-foreground">designer@example.com</span>
              </div>
            </div>

            {/* 社交媒体图标 */}
            <div className="flex gap-4 mb-12">
              {/* X (Twitter) */}
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-foreground/20 hover:border-dr-blue transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-foreground/20 hover:border-dr-blue transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-foreground/20 hover:border-dr-blue transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* Dribbble */}
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-foreground/20 hover:border-dr-blue transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
                </svg>
              </a>
            </div>

            {/* MY STORY 按钮 */}
            <button className="px-8 py-3 border-2 border-dr-blue text-dr-blue rounded-full font-medium text-[14px] hover:bg-dr-blue hover:text-white transition-all duration-300">
              MY STORY
            </button>
          </div>

          {/* 右侧 - 占位区域 */}
          <div className="w-[420px]">
            {/* 占位空间 - FlipCard 会定位到这里 */}
            <div className="w-[330px] h-[440px]">
              {/* 空占位，保持布局 */}
            </div>
          </div>
        </div>
      </div>

      {/* 底部装饰线 */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent"></div>
    </section>
  );
};

export default AboutSection;