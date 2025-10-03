import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/PageWipe.css";

const PageWipe = ({ routeKey }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={routeKey}
      className="page-wipe"
      initial={{ clipPath: "circle(0% at 50% 50%)", opacity: 1 }}
      animate={{ clipPath: "circle(140% at 50% 50%)", opacity: 0 }}
      exit={{ clipPath: "circle(0% at 50% 50%)", opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    />
  </AnimatePresence>
);

export default PageWipe;
