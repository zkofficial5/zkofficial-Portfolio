<div align="center">

# ✦ Zoya Khan — Portfolio

**Full Stack Developer & Creative Writer**

*between syntax and storytelling*

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)

</div>

---

## ✦ Overview

Personal portfolio built with React, TypeScript, and Vite. Features a 3D interactive keyboard powered by Spline, smooth scroll-driven animations with GSAP, and a custom GooeyNav navigation component.

## ✦ Stack

| Layer | Tech |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS + shadcn/ui |
| Animation | Framer Motion + GSAP |
| 3D | Spline (`@splinetool/react-spline`) |
| UI Components | Radix UI |
| Forms | React Hook Form + Zod |
| Notifications | Sonner |

## ✦ Features

- **3D Spline keyboard** — interactive background that scroll-transitions from the hero into the about section
- **Custom GooeyNav** — animated pill navigation with particle effects
- **Preloader** — typewriter reveal animation on first load
- **Scroll progress bar** — rose-gradient indicator
- **Custom cursor** — spring-animated cursor with hover states
- **Framer Motion** — blur-in hero, staggered section entrances
- **Contact form** — validated, with toast feedback

## ✦ Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

Dev server runs at `http://localhost:8080`

## ✦ Project Structure

```
src/
├── components/
│   ├── SplineBackground.tsx   # 3D keyboard + GSAP scroll logic
│   ├── GooeyNav.tsx           # Custom animated nav
│   ├── Navbar.tsx
│   ├── Preloader.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── CustomCursor.tsx
│   ├── ScrollProgress.tsx
│   └── SectionDivider.tsx
├── hooks/
│   ├── use-media-query.ts
│   └── use-sounds.ts
└── pages/
    └── Index.tsx

public/
└── assets/
    ├── skills-keyboard.spline  # 3D scene
    └── keycap-sounds/
        ├── press.mp3
        └── release.mp3
```

## ✦ Customization

**Colors** — edit CSS variables in `src/index.css`:
```css
--primary: 338 54% 55%;   /* rose #C9517A */
--secondary: 263 70% 58%; /* purple */
```

**Spline scene** — replace `public/assets/skills-keyboard.spline` with your own exported scene from [spline.design](https://spline.design).

**Nav items** — update the `navItems` array in `src/components/Navbar.tsx`.

---

<div align="center">

*© 2025 Zoya Khan*

</div>
