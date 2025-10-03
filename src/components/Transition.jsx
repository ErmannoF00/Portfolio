// src/components/Transition.jsx
import React, { useRef, useState, useEffect } from "react";
import "../styles/Transition.css";

const Transition = ({ children, delay = "0ms" }) => {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setVisible(true);
      });
    });

    const { current } = domRef;
    if (current) observer.observe(current);
    return () => current && observer.unobserve(current);
  }, []);

  return (
    <div
      className={`transition-wrapper ${isVisible ? "show" : ""}`}
      ref={domRef}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
};

export default Transition;
