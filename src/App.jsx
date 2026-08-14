import React, { useState, useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { Helmet } from "react-helmet-async";

// Modular Component & Section Imports
import {
  Navbar,
  Footer,
  TawkTo,
  ResumeModal,
  CommandPalette,
  TerminalModal,
} from "@/components";
import {
  Hero,
  About,
  Skills,
  Experience,
  Showcase,
  GithubStats,
  Services,
  Certificates,
  Achievements,
  Contact,
} from "@/sections";
import { personalInfo } from "@/constants";

// TODO: replace with your real deployed domain once you have one.
const SITE_URL = "https://your-portfolio-domain.example.com";

const App = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsPaletteOpen((prev) => !prev);
      }
      if (
        (e.key === "`" || e.key === "~") &&
        !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)
      ) {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: "Full Stack Developer",
    description: personalInfo.bio,
    url: SITE_URL,
    email: personalInfo.email,
    sameAs: [personalInfo.github, personalInfo.linkedin, personalInfo.facebook],
    alumniOf: personalInfo.university,
  };

  return (
    <MotionConfig reducedMotion="user">
      {/* ✅ SEO Helmet */}
      <Helmet>
        <title>{personalInfo.name} | Full Stack Developer</title>
        <meta
          name="description"
          content={`${personalInfo.name} is a Computer Science undergraduate and Full Stack Developer skilled in the MERN stack, React, Node.js, and modern web technologies.`}
        />
        <meta
          name="keywords"
          content={`${personalInfo.name}, Full Stack Developer, Software Engineer, MERN Developer, React Developer, Sri Lanka`}
        />
        <meta name="author" content={personalInfo.name} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={SITE_URL} />

        <meta
          property="og:title"
          content={`${personalInfo.name} | Full Stack Developer`}
        />
        <meta
          property="og:description"
          content={`Portfolio of ${personalInfo.name}, showcasing full-stack projects and skills.`}
        />
        {/* TODO: for best social-preview results, create a dedicated
            1200x630 banner image and place it at public/og-image.jpg —
            using your profile photo as a fallback for now. */}
        <meta
          property="og:image"
          content={`${SITE_URL}/images/my.png`}
        />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Skip link for keyboard/screen-reader users to bypass the nav */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-gray-900 focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenPalette={() => setIsPaletteOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />
      <main id="main-content">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Experience />
        <Showcase />
        <GithubStats />
        <Services />
        <Certificates />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <TawkTo />

      {/* Interactive In-App Resume Previewer Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Developer Spotlight Command Palette (Ctrl + K) */}
      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Interactive Developer Terminal CLI Modal (Easter Egg) */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
      />
    </MotionConfig>
  );
};

export default App;
