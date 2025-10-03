import React, { useEffect, useState, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/NavBar.css";

const NavBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const onSplash = pathname === "/";

  // Track top-of-page for styling
  const [atTop, setAtTop] = useState(true);
  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Brand → back to splash, keep it smooth
  const backToSplash = useCallback(
    (e) => {
      e.preventDefault();
      if (onSplash) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/", { state: { wipe: "back" } });
        // make sure we land at top after route change
        requestAnimationFrame(() =>
          window.scrollTo({ top: 0, behavior: "instant" })
        );
      }
    },
    [navigate, onSplash]
  );

  // Click on a section link
  const handleSectionClick = useCallback(
    (e, href) => {
      e.preventDefault();
      if (onSplash) {
        // Let the browser jump to the anchor after route change
        navigate(`/main${href}`);
      } else {
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          // We already use scroll-margin-top in CSS, so this is enough
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          // update hash without reloading
          window.history.replaceState(null, "", href);
        }
      }
    },
    [navigate, onSplash]
  );

  // Bar size/padding (compact on splash, larger on main)
  const barVariants = {
    splash: { height: 64, paddingLeft: 16, paddingRight: 16 },
    main:   { height: 84, paddingLeft: 24, paddingRight: 24 },
  };

  // Center links reveal
  const listVariants = {
    hidden: { opacity: 0, y: -6, pointerEvents: "none" },
    show: {
      opacity: 1, y: 0, pointerEvents: "auto",
      transition: { staggerChildren: 0.06, delayChildren: 0.08 }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: -8, filter: "blur(4px)" },
    show:   { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.35, ease: "easeOut" } }
  };

  return (
    <header
      className={[
        "nav",
        atTop ? "nav--top" : "nav--solid",
        onSplash ? "nav--splash" : "nav--main",
      ].join(" ")}
      role="banner"
    >
      <motion.div
        className="nav-inner"
        variants={barVariants}
        initial={onSplash ? "splash" : "main"}
        animate={onSplash ? "splash" : "main"}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* LEFT: brand */}
        <motion.div
          className="nav-left"
          initial={{ x: -10, opacity: 0.9 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <Link to="/" onClick={backToSplash} className="brand" aria-label="Go to splash">
            Ermanno
          </Link>
        </motion.div>

        {/* CENTER: section links (only on /main) */}
        <div className="nav-center">
          <AnimatePresence initial={false} mode="popLayout">
            {!onSplash && (
              <motion.nav
                key="center-links"
                className="center-links"
                aria-label="Primary"
                variants={listVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                {[
                  ["About", "#about"],
                  ["Education", "#education"],
                  ["Experience", "#experience"],
                  ["Projects", "#projects"],
                  ["Volunteering", "#volunteering"],
                  ["Contacts", "#contact"],
                ].map(([label, href]) => (
                  <motion.a
                    key={href}
                    href={href}
                    variants={itemVariants}
                    onClick={(e) => handleSectionClick(e, href)}
                  >
                    {label}
                  </motion.a>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>
        </div>

        {/* RIGHT: icons */}
        <motion.div
          className="nav-right"
          initial={{ x: 10, opacity: 0.9 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <a href="https://github.com/ErmannoF00" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/ermanno-fiorillo-799296171" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="mailto:ermix.fiorillo@gmail.com" aria-label="Email"><FaEnvelope /></a>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default NavBar;
