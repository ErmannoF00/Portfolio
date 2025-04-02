import React, { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return isVisible ? (
    <button onClick={scrollToTop} style={btnStyle} aria-label="Scroll to Top">
      ↑
    </button>
  ) : null;
};

const btnStyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  padding: "10px 14px",
  fontSize: "20px",
  backgroundColor: "#64d3ff",  
  color: "#000",               
  border: "none",
  borderRadius: "50%",
  cursor: "pointer",
  zIndex: 1000,
  transition: "opacity 0.3s ease-in-out",
};


export default ScrollToTopButton;
