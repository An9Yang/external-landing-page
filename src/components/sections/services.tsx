import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  details: string[];
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "UI/UX DESIGN",
    description: "Creating intuitive and beautiful user experiences",
    details: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design",
      "Usability Testing",
      "Design Systems"
    ]
  },
  {
    id: 2,
    title: "GRAPHIC DESIGN",
    description: "Crafting compelling visual narratives",
    details: [
      "Brand Identity Design",
      "Marketing Materials",
      "Social Media Graphics",
      "Print Design",
      "Illustration"
    ]
  },
  {
    id: 3,
    title: "WEB DESIGN",
    description: "Building responsive and modern websites",
    details: [
      "Responsive Web Design",
      "Landing Pages",
      "E-commerce Design",
      "Web Applications",
      "SEO Optimization"
    ]
  },
  {
    id: 4,
    title: "BRANDING",
    description: "Developing unique brand identities",
    details: [
      "Logo Design",
      "Brand Strategy",
      "Brand Guidelines",
      "Visual Identity",
      "Brand Messaging"
    ]
  }
];

const ServicesSection = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const toggleItem = (id: number) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-background relative"
      id="services"
    >
      <div className="max-w-[1440px] mx-auto px-20 pt-[216px]">
        <div className="grid grid-cols-[1fr_auto] gap-20 items-start">
          
          {/* 左侧 - 服务列表 */}
          <div className="space-y-8">
            {/* 标题 */}
            <div className="mb-16">
              <h2 className="text-[48px] font-bold text-foreground mb-6">
                WHAT I CAN DO FOR YOU
              </h2>
              <p className="text-[16px] text-foreground/60 max-w-[500px]">
                As a digital designer, I am a visual storyteller, crafting
                experiences that connect deeply and spark creativity.
              </p>
            </div>

            {/* 手风琴列表 */}
            <div className="space-y-0">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={cn(
                    "border-t border-foreground/10 transition-all duration-300",
                    index === services.length - 1 && "border-b"
                  )}
                >
                  <button
                    onClick={() => toggleItem(service.id)}
                    className="w-full py-6 flex items-center justify-between group hover:px-4 transition-all duration-300"
                  >
                    <div className="flex items-baseline gap-6">
                      <span className="text-[16px] text-foreground/40">
                        {String(service.id).padStart(1, '0')}.
                      </span>
                      <h3 className="text-[24px] font-medium text-foreground group-hover:text-dr-blue transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <ChevronDown 
                      className={cn(
                        "w-5 h-5 text-foreground/40 transition-transform duration-300",
                        expandedItem === service.id && "rotate-180"
                      )}
                    />
                  </button>
                  
                  {/* 展开内容 */}
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-500",
                      expandedItem === service.id ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <div className="px-4 pb-6 pl-14">
                      <p className="text-[14px] text-foreground/60 mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="text-[14px] text-foreground/50 flex items-center gap-2">
                            <span className="w-1 h-1 bg-dr-blue rounded-full"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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

export default ServicesSection;