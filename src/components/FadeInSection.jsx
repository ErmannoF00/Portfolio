// src/components/FadeInSection.jsx
import React, { useRef, useState, useEffect } from "react";
import "../styles/FadeInSection.css";

const FadeInSection = ({ children, delay = "0ms" }) => {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    const { current } = domRef;
    if (current) observer.observe(current);
    return () => observer.unobserve(current);
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
