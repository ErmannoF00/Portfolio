import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import Intro from "./components/Intro";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Volunteering from "./components/Volunteering";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

const Page = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -24 }}
    transition={{ duration: 0.35, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const location = useLocation();

  return (
    <div className="App">
      <ScrollToTop />
      <NavBar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Splash */}
          <Route path="/" element={<Page><Intro /></Page>} />

          {/* Main */}
          <Route
            path="/main"
            element={
              <Page>
                {/* Shared-layout target for the zoom morph (keeps open/close smooth) */}
                <motion.div
                  layoutId="hero-portal"
                  className="hero-ghost"
                  transition={{ duration: 0.65, ease: [0.22, 0.61, 0.36, 1] }}
                />
                <main id="content">
                  <About />
                  <Education />
                  {/* Experience spacing is uniform thanks to Global.css section rules */}
                  <Experience />
                  <Projects />
                  <Volunteering />
                  <Contact />
                </main>
                <Footer />
                <ScrollToTopButton />
              </Page>
            }
          />

          {/* Fallback → splash */}
          <Route path="*" element={<Page><Intro /></Page>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
