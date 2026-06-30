# Portfolio — Alex Kim

Premium CS undergraduate portfolio built with Next.js 14, TypeScript, and Tailwind CSS.
Inspired by Apple, Vercel, Stripe, and Linear.

---

## Quick start

```bash
# 1. Clone / copy this folder
cd portfolio

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
# → http://localhost:3000
```

---

## Personalise — the only files you need to touch

### Your information

| File | What to change |
|------|----------------|
| `data/projects.ts` | Add/edit your real projects |
| `data/skills.ts` | Update your tech stack |
| `data/timeline.ts` | Your work, education, achievements |
| `app/layout.tsx` | `metadata` — title, description, URL |
| `components/sections/Hero.tsx` | Name, tagline, bio, links |
| `components/sections/About.tsx` | Avatar initials, narrative paragraphs |
| `components/layout/Footer.tsx` | Social links, GitHub, LinkedIn URLs |
| `components/layout/Navbar.tsx` | Social link `href` values |

### Resume PDF
Drop your resume as `public/resume.pdf`.
The download button and link will work automatically.

### Profile photo (optional)
Replace the initials avatar in `About.tsx` with:
```tsx
import Image from "next/image";
// Replace the <div> avatar with:
<Image
  src="/images/profile.jpg"
  alt="Alex Kim"
  width={96}
  height={96}
  className="rounded-full border border-[var(--border-default)]"
  priority
/>
```
Then add your photo at `public/images/profile.jpg`.

### Contact form
1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form — copy the form ID (e.g. `xpznkqvw`)
3. In `components/sections/Contact.tsx`, replace `YOUR_FORM_ID`:
```tsx
const res = await fetch("https://formspree.io/f/xpznkqvw", {
```

---

## Colour and theme

All design tokens live in `app/globals.css` under `:root` and `[data-theme="dark"]`.
Change `--color-slate` to swap the accent colour across the whole site.

Dark mode is automatic (respects OS preference) and user-toggleable via the moon icon.

---

## Deploy to Vercel (recommended — free)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# → Follow prompts, connect your GitHub repo for auto-deploys on push
```

Custom domain: add `yourname.dev` in the Vercel dashboard under Project → Settings → Domains.

---

## Project structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Home page — composes all sections
│   └── globals.css         # Design tokens, Tailwind base
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky nav, dark mode toggle, mobile menu
│   │   └── Footer.tsx      # Social links, back-to-top
│   ├── sections/
│   │   ├── Hero.tsx        # Full-viewport intro
│   │   ├── About.tsx       # Bio + avatar
│   │   ├── Skills.tsx      # Grouped skill cards
│   │   ├── Projects.tsx    # Filterable project grid
│   │   ├── Timeline.tsx    # Experience + education + awards
│   │   └── Contact.tsx     # Form + direct links
│   └── ui/
│       └── ProjectCard.tsx # Single project card
│
├── data/
│   ├── projects.ts         # ← Edit your projects here
│   ├── skills.ts           # ← Edit your skills here
│   └── timeline.ts         # ← Edit your experience here
│
├── lib/
│   ├── utils.ts            # cn() helper
│   ├── useReveal.ts        # Scroll-reveal hook
│   └── useTheme.ts         # Dark/light mode hook
│
└── public/
    └── resume.pdf          # ← Drop your PDF here
```

---

## Performance targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 95+ |
| Lighthouse Accessibility | 100 |
| LCP (4G mobile) | < 1.5s |
| Total JS (gzipped) | < 80KB |

The site is statically exported (`output: "export"`) so every page is pure HTML/CSS — no server needed.

---

## Accessibility

- WCAG 2.1 AA compliant
- Skip-to-content link as first DOM element
- All interactive elements keyboard-accessible
- Focus ring: 2px solid `#185FA5`, offset 2px, `:focus-visible` only
- `prefers-reduced-motion` respected — all animations disabled instantly
- Semantic HTML5 landmarks throughout
- ARIA labels on all icon-only buttons and external links
"# My-Portfolio" 
