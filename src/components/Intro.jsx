import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import OrganicBrainSketch from "./OrganicBrainSketch";
import "../styles/Intro.css";

export default function Intro() {
  const navigate = useNavigate();

  // 1) quick zoom on the brain frame
  const [zooming, setZooming] = useState(false);
  // 2) radial/iris cover after the zoom
  const [coverOn, setCoverOn] = useState(false);

  const handleEnter = () => {
    if (zooming || coverOn) return;
    setZooming(true);
    // let the zoom breathe, then trigger the iris cover
    setTimeout(() => setCoverOn(true), 450);
  };

  return (
    <section id="intro" className="splash">
      <div className="splash-inner">
        <h1 className="splash-title">Hi, Ermanno here!</h1>

        {/* Quote in your old style: blue + italic */}
        <p className="intro-quote">— The best ideas start with “what if?” —</p>

        {/* Hero (same component), only changed the click animation */}
        <motion.button
          type="button"
          className="hero-portal"
          onClick={handleEnter}
          aria-label="Enter site"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.985 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <motion.div
            className="hero-frame"
            animate={zooming ? { scale: 1.08 } : { scale: 1 }}
            transition={{ duration: 0.42, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <OrganicBrainSketch />
          </motion.div>
        </motion.button>

        <p className="hint">Tap the core to enter</p>
      </div>

      {/* Ambient but subtle */}
      <div className="ambient-glow" aria-hidden="true" />

      {/* Smooth iris cover → navigate */}
      <AnimatePresence>
        {coverOn && (
          <motion.div
            className="cover-iris"
            initial={{ opacity: 0, scale: 0.98, filter: "blur(0px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(1px)" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
            onAnimationComplete={() => navigate("/main")}
          >
            <motion.div
              className="cover-hole"
              initial={{ scale: 0 }}
              animate={{ scale: 18 }}
              transition={{ duration: 0.65, ease: [0.22, 0.61, 0.36, 1] }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
