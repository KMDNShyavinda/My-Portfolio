# Dinuka Niroshan — Portfolio

A personal portfolio site built with React 19, Vite, and Tailwind CSS v4.

## Tech Stack

- **Framework:** React 19 + Vite 6
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Icons:** react-icons
- **Contact form:** EmailJS
- **SEO:** react-helmet-async

## Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint       # run ESLint
```

## Project Structure

```
src/
  App.jsx              # assembles all sections in order
  constants/index.js    # personalInfo — single source of truth for name,
                         # bio, and placeholder contact/social links
  context/ThemeContext.jsx  # light/dark/system theme
  components/           # Navbar, About, Skills, Certificates, Footer,
                         # AnimatedBackground
  sections/              # Hero, Experience, ShowcaseSection (Projects),
                         # Services, Achievements, Contact
public/
  images/my.png          # profile photo
  files/                 # downloadable CV
```

## Before You Deploy — Personalization Checklist

A few things still need your real details (each is marked with a `TODO`
comment or a "Sample" badge in the UI where relevant):

- [x] **Profile photo** — replace `public/images/my.png`
- [ ] **CV/résumé** — replace `public/files/Dinuka_Niroshan_CV.pdf` with
      your own PDF (the current file is only renamed, not regenerated)
- [ ] **Contact & social links** — update `email`, `phone`, `github`,
      `linkedin`, `facebook`, and `location` in `src/constants/index.js`
      (`personalInfo` object)
- [ ] **Contact form** — set up [EmailJS](https://www.emailjs.com/) and
      fill in `SERVICE_ID`, `TEMPLATE_ID`, `PUBLIC_KEY` in
      `src/sections/Contact.jsx` (the form shows a friendly notice to
      visitors until this is configured)
- [ ] **Projects** — swap the two "Sample Project" cards in
      `src/sections/ShowcaseSection.jsx` for your own work, and add real
      GitHub/live links to all four projects as they become available
- [ ] **Certificates** — replace the sample certificates in
      `src/components/Certificates.jsx` with your real ones
- [ ] **Education** — fill in your real dates/results in
      `src/components/About.jsx`
- [ ] **Experience & Achievements** — replace the "Sample" entries in
      `src/sections/Experience.jsx` and `src/sections/Achievements.jsx`
- [ ] **Deployed domain** — once live, update `SITE_URL` in `src/App.jsx`
      (used for canonical URL and Open Graph tags)
- [ ] **OG preview image** *(optional)* — for a nicer social-media link
      preview, add a 1200×630 banner at `public/og-image.jpg` and point
      `og:image` in `src/App.jsx` at it (currently falls back to your
      profile photo)
"# My-Portfolio" 
