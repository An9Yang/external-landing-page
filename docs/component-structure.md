# 组件结构文档

## 页面结构

### 1. 首页 (Home)
```
HomePage
├── Navigation (固定导航栏)
│   ├── Logo (头像+Available状态)
│   ├── NavMenu (Home/About/Projects/Blogs)
│   └── ContactButton
├── HeroSection
│   ├── NameTitle (DUNCAN ROBERT)
│   ├── RoleTitle (DIGITAL DESIGNER)
│   ├── Subtitle (US-based designer)
│   ├── HeroImage (人物照片)
│   └── FloatingHiButton (蓝色Hi按钮)
├── ScrollIndicator (底部滚动指示)
└── FloatingElements
    ├── StatusIndicator (右侧蓝点)
    └── TemplatePreview (右下角预览窗口)
```

### 2. 服务介绍页 (Services)
```
ServicesSection
├── SectionHeader
│   ├── Title (WHAT I CAN DO FOR YOU)
│   └── Description
├── ServicesList (手风琴组件)
│   ├── ServiceItem (UI/UX DESIGN)
│   ├── ServiceItem (GRAPHIC DESIGN)
│   ├── ServiceItem (WEB DESIGN)
│   └── ServiceItem (BRANDING)
└── ServiceImage (右侧配图)
```

### 3. 关于页 (About)
```
AboutSection
├── SectionHeader (ABOUT ME)
├── ContentGrid
│   ├── LeftContent
│   │   ├── Bio (个人介绍)
│   │   ├── StatsGrid
│   │   │   ├── StatCard (12 Years)
│   │   │   ├── StatCard (270 Projects)
│   │   │   └── StatCard (50+ Clients)
│   │   ├── ContactInfo
│   │   ├── SocialLinks
│   │   └── MyStoryButton
│   └── RightContent
│       └── ProfileImage
```

### 4. 项目展示页 (Projects)
```
ProjectsSection
├── SectionHeader
│   ├── Title (FEATURED PROJECTS)
│   └── Description
├── ProjectCarousel
│   ├── ProjectCard
│   │   ├── ProjectImage
│   │   ├── ProjectTag (Graphic Design)
│   │   ├── ProjectTitle
│   │   └── ProjectDescription
│   └── CarouselControls
│       ├── ProgressBar
│       └── NavigationDots
```

### 5. 客户评价页 (Testimonials)
```
TestimonialsSection
├── SectionHeader (WHAT MY CLIENTS SAY)
├── TestimonialsGrid
│   ├── TestimonialCard
│   │   ├── Rating (5星)
│   │   ├── Review
│   │   └── ClientInfo (头像+姓名+职位)
│   ├── StatCard (200% Growth)
│   └── StatCard (98% Satisfaction)
```

### 6. FAQ页面
```
FAQSection
├── SectionHeader
│   ├── Title (FREQUENTLY ASKED QUESTIONS)
│   └── Description
└── FAQAccordion
    ├── FAQItem (可展开/收起)
    │   ├── Question
    │   └── Answer
    └── [更多FAQ项...]
```

### 7. 博客页面 (Blog/Insights)
```
BlogSection
├── SectionHeader
│   ├── Title (DESIGN INSIGHTS & IDEAS)
│   └── Description
├── BlogGrid
│   ├── BlogCard
│   │   ├── BlogImage
│   │   ├── BlogMeta (分类+日期)
│   │   ├── BlogTitle
│   │   └── BlogExcerpt
│   └── [更多博客卡片...]
└── BrowseAllButton
```

### 8. 联系页面 (Contact)
```
ContactSection
├── SectionHeader (LET'S WORK TOGETHER)
├── ContactForm
│   ├── FormFields
│   │   ├── NameInput
│   │   ├── EmailInput
│   │   ├── ServiceSelect
│   │   └── MessageTextarea
│   └── SubmitButton
├── ContactImage (左侧人物图)
└── FloatingHandWave (蓝色手势按钮)
```

### 9. 页脚 (Footer)
```
Footer
├── ContactInfo
│   ├── Email
│   └── Phone
├── SocialLinks
│   ├── Twitter/X
│   ├── Instagram
│   ├── LinkedIn
│   └── Dribbble
├── Copyright
└── CreatorCredit (Created by Duncan Shan)
```

## 通用组件

### Navigation 导航组件
```typescript
interface NavigationProps {
  isFixed: boolean;
  currentPage: string;
  onContactClick: () => void;
}
```

### Button 按钮组件
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'text' | 'icon';
  size: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
}
```

### Card 卡片组件
```typescript
interface CardProps {
  variant: 'default' | 'hover' | 'stat' | 'testimonial';
  padding?: string;
  shadow?: boolean;
  children: React.ReactNode;
}
```

### Accordion 手风琴组件
```typescript
interface AccordionProps {
  items: Array<{
    id: string;
    title: string;
    content: React.ReactNode;
  }>;
  defaultOpen?: string;
}
```

### Carousel 轮播组件
```typescript
interface CarouselProps {
  items: React.ReactNode[];
  autoPlay?: boolean;
  indicators?: boolean;
  controls?: boolean;
}
```

### Form 表单组件
```typescript
interface FormFieldProps {
  type: 'text' | 'email' | 'select' | 'textarea';
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: Array<{value: string; label: string}>;
}
```

### Modal/Dialog 弹窗组件
```typescript
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}
```

### ScrollIndicator 滚动指示器
```typescript
interface ScrollIndicatorProps {
  type: 'dot' | 'line' | 'arrow';
  onClick?: () => void;
}
```

### SocialLinks 社交链接组件
```typescript
interface SocialLinksProps {
  platforms: Array<{
    name: string;
    url: string;
    icon: React.ReactNode;
  }>;
}
```

### StatCard 统计卡片组件
```typescript
interface StatCardProps {
  value: string | number;
  label: string;
  highlight?: boolean;
  icon?: React.ReactNode;
}
```

## 布局组件

### Container 容器组件
```typescript
interface ContainerProps {
  maxWidth?: 'small' | 'medium' | 'large' | 'full';
  padding?: boolean;
  children: React.ReactNode;
}
```

### Grid 网格组件
```typescript
interface GridProps {
  columns?: number;
  gap?: string;
  responsive?: boolean;
  children: React.ReactNode;
}
```

### Section 区块组件
```typescript
interface SectionProps {
  id?: string;
  className?: string;
  fullHeight?: boolean;
  children: React.ReactNode;
}
```

## 交互模式

### 滚动触发动画
- 使用 Intersection Observer API
- 元素进入视口时触发动画
- 支持多种动画效果

### 悬停效果
- 卡片悬停: 阴影和位移
- 按钮悬停: 颜色变化
- 图片悬停: 缩放效果

### 点击反馈
- 按钮点击: 缩放动画
- 链接点击: 颜色变化
- 表单提交: 加载状态

### 页面过渡
- 路由切换: 淡入淡出
- 区块切换: 滑动效果
- 模态弹窗: 缩放+淡入

## 状态管理

### 全局状态
- 当前主题(浅色/深色)
- 用户偏好设置
- 导航状态

### 组件状态
- 表单数据
- 加载状态
- 错误状态
- 展开/收起状态

### 数据流
```
App
├── Context Providers
│   ├── ThemeContext
│   └── NavigationContext
├── Pages
│   └── Components
│       └── SubComponents
```

## 响应式策略

### 移动端优先
1. 基础样式针对移动端
2. 使用媒体查询扩展到大屏
3. 触摸友好的交互设计

### 断点处理
```css
/* 移动端 */
@media (max-width: 767px) {}

/* 平板 */
@media (min-width: 768px) and (max-width: 1023px) {}

/* 桌面 */
@media (min-width: 1024px) {}
```

### 自适应组件
- 导航栏: 桌面端横向, 移动端汉堡菜单
- 网格: 响应式列数
- 字体: 响应式大小
- 间距: 响应式边距