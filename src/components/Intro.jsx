import React from "react";
import Transition from "./Transition";
import OrganicBrainSketch from "./OrganicBrainSketch";
import "../styles/Intro.css";

const Intro = () => (
  <section id="intro">
    <div className="intro-content">
      <h1>Hi, Ermanno here!</h1>
      <blockquote className="intro-quote">
        <em>-The best ideas start with "what if?"-</em>
      </blockquote>
      <OrganicBrainSketch />
    </div>
  </section>
);

export default Intro;
