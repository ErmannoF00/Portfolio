import React from "react";
import FadeInSection from "./FadeInSection";
import OrganicBrainSketch from "./OrganicBrainSketch";
import "../styles/Intro.css";

const Intro = () => (
  <section id="intro">
    <div className="intro-content">
      <h1>Hi, Ermanno here!</h1>
      <p>Welcome to my Portfolio</p>
      <OrganicBrainSketch />
    </div>
  </section>
);

export default Intro;
