import React from "react";
import FadeInSection from "./FadeInSection";
import "../styles/Projects.css";

const Projects = () => (
  <section id="projects">
    <FadeInSection>
      <h2>Projects</h2>
      <ul>
        <li>Memristor modeling and crossbar simulations</li>
        <li>Neuromorphic web UI with Three.js</li>
      </ul>
    </FadeInSection>
  </section>
);

export default Projects;
