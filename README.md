# GeekPorridge — 个人作品集

这是一个基于 **Next.js 16 (App Router)**、**Tailwind CSS v4** 和 **next-intl** 构建的个人作品集网站，支持完整的国际化（英语/中文）。该网站展示了精选作品、工程理念以及包含服务端验证功能的联系表单。

<p align="center">
  <a href="README_EN.md">🇺🇸 English</a>
</p>

## 技术栈

| 层级 | 技术 |
|-------|-----------|
| 框架 | Next.js 16 (React 19, App Router) |
| 样式 | Tailwind CSS v4 |
| 动画 | Motion (Framer Motion) |
| 国际化 (i18n) | next-intl (en / zh) |
| 验证 | Joi (联系表单服务端验证) |
| HTTP | SWR (客户端数据获取) |
| 图标 | Lucide React |
| 代码检查 | Biome (格式化 + Lint) |
| 测试 | Vitest |

## 快速开始

```bash
pnpm install
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

## 脚本命令

| 命令 | 描述 |
|---------|------------|
| `pnpm dev` | 启动开发服务器 |
| `pnpm build` | 生产环境构建 |
| `pnpm start` | 启动生产服务器 |
| `pnpm lint` | 运行 Biome 检查 |
| `pnpm format` | 运行 Biome 格式化 |
| `pnpm lint:fix` | 运行 Biome 检查并自动修复 |
| `pnpm test` | 运行 Vitest 测试 |
| `pnpm test:watch` | 以 watch 模式运行 Vitest |
| `pnpm test:ui` | 以 UI 模式运行 Vitest |

## 项目结构

```
porridge-website/
├── app/
│   ├── [locale]/               # 路由组 (en, zh)
│   │   ├── contact/            # 联系页面
│   │   ├── portfolio/          # 作品集页面
│   │   ├── error.tsx           # 错误边界 (Error Boundary)
│   │   ├── layout.tsx          # 语言区域布局 (页眉 + 页脚)
│   │   ├── loading.tsx         # 加载骨架屏
│   │   └── page.tsx            # 首页
│   ├── api/contact/route.ts    # 联系表单 API
│   ├── components/             # 共享 UI 组件
│   ├── motions/               # 动画相关组件
│   ├── fonts.ts               # Google Fonts 配置
│   ├── globals.css            # Tailwind CSS + 主题变量
│   ├── layout.tsx             # 根布局
│   ├── not-found.tsx          # 404 页面
│   └── types/                 # 共享 TypeScript 类型
├── i18n/                      # 国际化配置
├── lib/                       # 工具函数与测试
├── messages/                  # 翻译 JSON 文件
└── public/                    # 静态资源
```

## 功能特性

- **双语支持** — 基于 next-intl 实现完整的英/中国际化
- **高性能** — 使用 Turbopack 开发、流式渲染 (Streaming) 及图像优化
- **响应式设计** — 移动端优先布局，作品集采用 Bento 网格风格
- **深色模式** — CSS 主题切换，支持 localStorage 持久化存储
- **联系表单** — 包含 Joi 验证的 API 路由及兴趣标签选择
- **SEO 优化** — 针对不同语言区域的动态 Open Graph / Twitter 元数据
- **动画效果** — 基于 Motion 实现滚动触发的入场动画

## 部署

```bash
pnpm build
```

静态构建产物位于 `.next/` 目录中。可部署至任意 Node.js 托管平台（如 Vercel、Railway 等）。

## 许可证

MIT — 欢迎将其用作您个人作品集网站的模板。
