import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import brainImg from "../assets/images/brain.jpg"; // keep your image here
import "../styles/Contact.css";

// Serve CV from /public/cv/CV.pdf
const cvPdf = process.env.PUBLIC_URL + "/cv/CV.pdf";

export default function Contact() {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => setOpen(v => !v), []);
  const close = useCallback(() => setOpen(false), []);

  return (
    <section id="contact">
      <div className="section-header">
        <h2 className="section-title">Contacts</h2>
      </div>

      <div className="contact-center">
        {/* Brain button — click to open/close */}
        <motion.button
          type="button"
          className="brain-portal"
          aria-label={open ? "Close CV" : "Open CV"}
          aria-expanded={open}
          onClick={toggle}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.985 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <div className="brain-frame">
            <img className="brain-img" src={brainImg} alt="Neural brain" />
            <span className={`brain-hint ${open ? "is-open" : ""}`}>
              {open ? "Tap image to close CV" : "Tap image to open CV"}
            </span>
          </div>
        </motion.button>

        {/* INLINE CV PANEL (appears directly under the image) */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              className="cv-inline"
              initial={{ opacity: 0, y: -8, scale: 0.98, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -8, scale: 0.98, filter: "blur(6px)" }}
              transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
            >
              {/* Stem that visually connects the panel to the image */}
              <div className="cv-stem" aria-hidden="true" />

              <div className="cv-minimal-card">
                <div className="cv-header">
                  <div className="cv-title">
                    <span className="chip">CV</span> Ermanno Fiorillo
                  </div>
                  <button className="icon-btn" onClick={close} aria-label="Close CV">✕</button>
                </div>

                <div className="cv-minimal">
                  <div className="cv-file">
                    <span className="file-icon" aria-hidden>📄</span>
                    <span className="file-name">CV.pdf</span>
                    <span className="file-size">PDF</span>
                  </div>

                  {/* Two matching ghost buttons */}
                  <div className="cv-actions">
                    <a className="btn ghost" href={cvPdf} target="_blank" rel="noopener noreferrer">
                      View
                    </a>
                    <a className="btn ghost" href={cvPdf} download>
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact info (centered) */}
        <ul className="contact-list">
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="#64d3ff"
                d="M20 4H4a2 2 0 0 0-2 2v.4l10 6 10-6V6a2 2 0 0 0-2-2Zm0 4.7-8.6 5.2a1 1 0 0 1-1 0L4 8.7V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.7Z"
              />
            </svg>
            <a href="mailto:ermix.fiorillo@gmail.com">ermix.fiorillo@gmail.com</a>
          </li>
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="#64d3ff"
                d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-9 14H7V10h3v7Zm-1.5-8.2a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM18 17h-3v-3.7c0-1-.4-1.7-1.3-1.7s-1.2.6-1.2 1.7V17h-3v-7h3v1a3 3 0 0 1 2.6-1.2c1.9 0 3 1.2 3 3.4V17Z"
              />
            </svg>
            <a
              href="https://www.linkedin.com/in/ermanno-fiorillo"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn: Ermanno Fiorillo
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
