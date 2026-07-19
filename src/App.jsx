import React from "react";
import { MotionConfig } from "framer-motion";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import Navbar from "./components/Navbar";
import Experience from "./sections/Experience";
import Services from "./sections/Services";
import Achievements from "./sections/Achievements";
import { Helmet } from "react-helmet-async";
import Certificates from "./components/Certificates";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import ChatBox from "./components/ChatBox";
import { personalInfo } from "./constants";

// TODO: replace with your real deployed domain once you have one.
const SITE_URL = "https://your-portfolio-domain.example.com";

const App = () => {
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

      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <ShowcaseSection />
        <Services />
        <Certificates />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <ChatBox />
    </MotionConfig>
  );
};

export default App;
