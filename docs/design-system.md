# Duncan Robert 作品集设计规范文档

## 项目概述
这是一个高端设计师作品集网站，展示Duncan Robert作为数字设计师和Framer开发者的作品。整体设计风格现代、专业、极简，采用大胆的排版和精致的视觉效果。

## 设计原则
1. **极简主义**: 大量留白，突出内容
2. **视觉层次**: 通过字体大小和粗细创建清晰的信息层级
3. **专业感**: 黑白灰为主，蓝色点缀
4. **流畅交互**: 平滑滚动和微妙动画增强体验
5. **响应式**: 完美适配各种设备

## 颜色系统

### 主色调
```css
--dr-bg: #F5F5F5;                 /* Duncan Robert背景色 */
--dr-black: #000000;              /* 主文字黑色 */
--dr-gray: #666666;               /* 次要文字灰色 */
--dr-blue: #5B5FFF;               /* 主题蓝色(按钮/链接) */
--dr-blue-hover: #4B4FEF;        /* 蓝色悬停态 */
```

### 暗色模式
- 支持系统偏好自动切换
- 手动切换开关（底部悬浮）
- 暗色模式颜色自动反转

### 功能色
```css
--color-white: #FFFFFF;           /* 纯白 */
--color-black: #000000;           /* 纯黑 */
--color-gray-light: #E5E5E5;      /* 浅灰边框 */
--color-gray-medium: #999999;     /* 中灰 */
--color-success: #52C41A;         /* 成功绿 */
```

### 特殊元素颜色
```css
--color-tag-bg: rgba(91, 95, 255, 0.1);  /* 标签背景 */
--color-card-shadow: rgba(0, 0, 0, 0.05); /* 卡片阴影 */
--color-overlay: rgba(0, 0, 0, 0.7);      /* 遮罩层 */
```

## 字体系统

### 字体家族
```css
--font-sans: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", system-ui, "Inter", sans-serif;
--font-display: "Bebas Neue", "Oswald", "Impact", "Anton", ui-sans-serif, system-ui, sans-serif;
--font-mono: "SF Mono", "Monaco", "Inconsolata", monospace;
```

### 字体大小
```css
--text-display-hero: clamp(104px, 6vw, 156px);  /* 响应式主标题 - DIGITAL DESIGNER */
--text-hero-name: 13px;     /* 名字标签 - 带字间距 */
--text-h1: 48px;            /* 页面大标题 */
--text-h2: 36px;            /* 区域标题 */
--text-h3: 24px;            /* 卡片标题 */
--text-h4: 20px;            /* 小标题 */
--text-body: 16px;          /* 正文 */
--text-subtitle: clamp(14px, 1.02vw, 16px);  /* 响应式副标题 */
--text-small: 14px;         /* 小字 */
--text-tiny: 12px;          /* 极小字 */
```

### 字重
```css
--weight-light: 300;
--weight-regular: 400;
--weight-medium: 500;
--weight-semibold: 600;
--weight-bold: 700;
--weight-black: 900;
```

### 行高
```css
--line-height-tight: 1.1;
--line-height-normal: 1.5;
--line-height-relaxed: 1.7;
```

## 间距系统

### 基础间距
```css
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
--spacing-2xl: 48px;
--spacing-3xl: 64px;
--spacing-4xl: 96px;
--spacing-5xl: 128px;
```

### 布局间距
```css
--container-padding: 80px;        /* 桌面端容器内边距 */
--container-padding-mobile: 24px; /* 移动端容器内边距 */
--section-gap: 120px;             /* 区块间距 */
--section-gap-mobile: 80px;       /* 移动端区块间距 */
```

## 布局系统

### 容器宽度
```css
--container-max: 1440px;    /* 最大容器宽度 */
--container-large: 1200px;  /* 大容器 */
--container-medium: 960px;  /* 中容器 */
--container-small: 720px;   /* 小容器 */
```

### 响应式断点
```css
--breakpoint-mobile: 480px;
--breakpoint-tablet: 768px;
--breakpoint-desktop: 1024px;
--breakpoint-wide: 1440px;
```

### 网格系统
- 12列网格系统
- 列间距: 24px
- 行间距: 32px

## 组件规范

### 导航栏（浮岛式设计）
- **样式**: 浮岛式，非传统固定header
- **位置**: 顶部居中悬浮 (top: 24px)
- **容器**: 圆角全包围 (border-radius: 999px)
- **背景**: 半透明白色/黑色，带模糊效果
- **滚动效果**: 背景透明度变化
- **Avatar**: 32x32px 圆形头像，带在线状态指示器
- **导航链接**: 14px, 正常字重, 32px间距
- **Contact按钮**: 黑底白字(暗色模式反转), 胶囊形状

### 按钮
```css
/* 主按钮 */
.btn-primary {
  height: 48px;
  padding: 0 32px;
  background: var(--color-accent);
  color: white;
  border-radius: 24px;
  font-size: 16px;
  font-weight: 500;
}

/* 次要按钮 */
.btn-secondary {
  height: 48px;
  padding: 0 32px;
  background: transparent;
  color: var(--color-accent);
  border: 2px solid var(--color-accent);
  border-radius: 24px;
}

/* 文字按钮 */
.btn-text {
  color: var(--color-accent);
  text-decoration: underline;
  font-weight: 500;
}
```

### 卡片
```css
.card {
  background: white;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
```

### 项目展示卡片
- **宽度**: 100%
- **高度比例**: 16:10
- **圆角**: 20px
- **内容覆盖层**: 渐变遮罩
- **标签**: 蓝色背景小圆角标签

### 客户评价卡片
- **背景**: 白色
- **圆角**: 16px
- **内边距**: 24px
- **评分**: 5星图标
- **头像**: 40x40px 圆形

### 统计数据卡片
- **大数字**: 48px, Bold
- **描述文字**: 14px, 灰色
- **特殊卡片**: 蓝色背景, 白色文字

## 动画与交互

### 过渡动画
```css
--transition-fast: 0.2s ease;
--transition-normal: 0.3s ease;
--transition-slow: 0.5s ease;
```

### 悬停效果
- 按钮: 颜色加深, 轻微上移
- 卡片: 阴影加深, 上移4px
- 链接: 下划线动画
- 图片: 轻微放大

### 滚动动画
- 淡入效果: opacity 0 → 1
- 上滑入场: translateY(20px) → translateY(0)
- 缩放入场: scale(0.95) → scale(1)

### 页面切换
- 平滑滚动
- 锚点定位动画
- 路由切换淡入淡出

## 图标系统
- 使用线性图标
- 尺寸: 16px, 20px, 24px
- 颜色: 继承父元素或主题色
- 社交媒体图标: 统一20px

## 特殊元素

### Hero区域布局
- **布局**: 三列网格 (grid-cols-[1fr_auto_1fr])
- **图片位置**: 居中在"DIGITAL"和"DESIGNER"之间
- **图片尺寸**: 330x440px
- **图片圆角**: 24px
- **图片阴影**: 深层阴影效果
- **人名标签**: 左上角外侧，12px大写，0.45em字间距
- **Hi按钮**: 96x96px蓝色圆形，左下角偏移
- **副标题**: 在"DESIGNER"下方，响应式大小

### 装饰性元素
- 主题切换开关（底部固定悬浮）
- 图片后方白色光晕效果
- 模糊背景效果
- 圆角设计语言贯穿

### 分页指示器
- 点状或线状
- 激活态蓝色
- 非激活态灰色
- 平滑过渡动画

## 响应式设计规范

### 移动端适配 (<768px)
- 导航改为汉堡菜单
- 字体大小减小20%
- 单列布局
- 触摸友好的交互区域(最小44px)
- 卡片堆叠展示

### 平板适配 (768px-1024px)
- 两列网格布局
- 适度的内边距
- 保持桌面端的视觉层次

### 桌面端 (>1024px)
- 完整的多列布局
- 最大内容宽度限制
- 丰富的悬停交互

## 无障碍设计
- 对比度符合WCAG AA标准
- 可键盘导航
- 焦点状态明显
- 适当的ARIA标签
- 图片替代文本

## 性能优化建议
- 图片懒加载
- 使用WebP格式
- CSS动画优于JS动画
- 关键CSS内联
- 字体预加载

## 开发注意事项
1. 使用CSS变量管理设计令牌
2. 组件化开发思维
3. 移动优先的响应式策略
4. 保持代码简洁和可维护性
5. 注意浏览器兼容性