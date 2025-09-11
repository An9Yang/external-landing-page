# 实施指南

## 项目设置

### 技术栈确认
- React 19.0.0
- TypeScript 5.8.2
- TailwindCSS 3.4.14
- React Router DOM 7.6.2
- shadcn/ui 组件库
- RSBuild 构建工具

### 开发顺序
1. 设计系统配置
2. 布局组件开发
3. 通用组件开发
4. 页面组件开发
5. 交互和动画
6. 响应式适配
7. 性能优化

## 设计系统配置

### 1. 更新 Tailwind 配置
```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        background: '#F5F5F5',
        foreground: '#000000',
        primary: {
          DEFAULT: '#5B5FFF',
          hover: '#4B4FEF',
        },
        secondary: '#666666',
        gray: {
          light: '#E5E5E5',
          medium: '#999999',
        }
      },
      fontSize: {
        'hero': '72px',
        'h1': '48px',
        'h2': '36px',
        'h3': '24px',
        'h4': '20px',
      },
      spacing: {
        'container': '80px',
        'section': '120px',
      },
      borderRadius: {
        'card': '20px',
        'button': '24px',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      }
    }
  }
}
```

### 2. 全局样式设置
```css
/* src/styles/globals.css */
:root {
  --nav-height: 80px;
  --transition-normal: 0.3s ease;
  --max-width: 1440px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-sans);
  background: var(--color-background);
  color: var(--color-text-primary);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 平滑滚动 */
html {
  scroll-behavior: smooth;
}

/* 容器样式 */
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

@media (max-width: 768px) {
  .container {
    padding: 0 24px;
  }
}
```

## 核心组件实现

### 导航栏组件
```typescript
// src/components/layout/navigation.tsx
interface NavigationProps {
  isFixed?: boolean;
  transparent?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ isFixed = true, transparent = false }) => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "w-full h-20 transition-all duration-300 z-50",
      isFixed && "fixed top-0",
      scrolled ? "bg-white/95 backdrop-blur shadow-sm" : "bg-transparent"
    )}>
      {/* Navigation content */}
    </nav>
  );
};
```

### Hero Section
```typescript
// src/components/sections/hero.tsx
const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl mb-4">DUNCAN ROBERT</h2>
          <h1 className="text-7xl font-black mb-6">
            DIGITAL<br />DESIGNER
          </h1>
          <p className="text-gray-600">
            I'm a US-based digital designer and Framer developer
          </p>
        </div>
        <div className="relative">
          <div className="rounded-3xl overflow-hidden">
            <img src="/hero-image.jpg" alt="Duncan Robert" />
          </div>
          <button className="absolute bottom-8 left-8 w-16 h-16 bg-primary text-white rounded-full">
            Hi
          </button>
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
};
```

### 服务手风琴组件
```typescript
// src/components/ui/service-accordion.tsx
interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

const ServiceAccordion: React.FC<{ items: ServiceItem[] }> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={item.id} className="border-b border-gray-200">
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className="w-full py-6 flex items-center justify-between text-left"
          >
            <span className="flex items-center gap-4">
              <span className="text-2xl font-light">{index + 1}.</span>
              <span className="text-2xl font-semibold">{item.title}</span>
            </span>
            <ChevronDown className={cn(
              "transition-transform",
              openId === item.id && "rotate-180"
            )} />
          </button>
          {openId === item.id && (
            <div className="pb-6 pl-12">
              <p className="text-gray-600">{item.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
```

### 项目卡片组件
```typescript
// src/components/ui/project-card.tsx
interface ProjectCardProps {
  image: string;
  tag: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, tag, title, description }) => {
  return (
    <div className="group relative rounded-3xl overflow-hidden cursor-pointer">
      <div className="aspect-[16/10] relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-8 left-8 text-white">
          <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur rounded-full text-sm mb-4">
            {tag}
          </span>
          <h3 className="text-3xl font-bold mb-2">{title}</h3>
          <p className="text-white/80">{description}</p>
        </div>
      </div>
    </div>
  );
};
```

### 评价卡片组件
```typescript
// src/components/ui/testimonial-card.tsx
interface TestimonialProps {
  rating: number;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

const TestimonialCard: React.FC<TestimonialProps> = ({ rating, content, author }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-5 h-5",
              i < rating ? "fill-primary text-primary" : "text-gray-300"
            )}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-6">{content}</p>
      <div className="flex items-center gap-3">
        <img
          src={author.avatar}
          alt={author.name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-semibold">{author.name}</p>
          <p className="text-sm text-gray-500">{author.role}</p>
        </div>
      </div>
    </div>
  );
};
```

## 页面路由配置

```typescript
// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## 动画实现

### 滚动触发动画
```typescript
// src/hooks/use-scroll-animation.ts
export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
};
```

### 页面过渡动画
```typescript
// src/components/layout/page-transition.tsx
const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};
```

## 响应式实现策略

### 移动端导航
```typescript
// src/components/layout/mobile-nav.tsx
const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden"
      >
        <Menu />
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50">
          {/* Mobile navigation content */}
        </div>
      )}
    </>
  );
};
```

### 响应式网格
```typescript
// src/components/ui/responsive-grid.tsx
const ResponsiveGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </div>
  );
};
```

## 性能优化

### 图片懒加载
```typescript
// src/components/ui/lazy-image.tsx
const LazyImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={loaded ? src : undefined}
      alt={alt}
      className={cn(
        "transition-opacity duration-300",
        loaded ? "opacity-100" : "opacity-0"
      )}
    />
  );
};
```

## 数据管理

### 项目数据
```typescript
// src/data/projects.ts
export const projects = [
  {
    id: '1',
    title: 'Summer Vibes Festival Campaign',
    category: 'Graphic Design',
    description: 'Created promotional materials for music festival',
    image: '/projects/summer-vibes.jpg',
    tags: ['Branding', 'Print', 'Digital'],
  },
  // 更多项目...
];
```

### 服务数据
```typescript
// src/data/services.ts
export const services = [
  {
    id: 'ui-ux',
    title: 'UI/UX DESIGN',
    description: 'Creating intuitive and beautiful user interfaces',
    details: '...',
  },
  // 更多服务...
];
```

## 测试要点

1. **响应式测试**: 所有断点下的布局
2. **交互测试**: 悬停、点击、滚动效果
3. **性能测试**: 加载速度、动画流畅度
4. **兼容性测试**: 主流浏览器支持
5. **无障碍测试**: 键盘导航、屏幕阅读器

## 部署准备

1. 运行构建命令: `npm run build`
2. 检查 `dist/web` 输出
3. 删除 `node_modules` 和 `dist`
4. 打包上传到 Step1 平台