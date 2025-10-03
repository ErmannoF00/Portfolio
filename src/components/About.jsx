import React from "react";
import Transition from "./Transition";
import "../styles/About.css";

const About = () => (
  <section id="about" aria-labelledby="about-heading">
    <Transition>
      <div className="section-header">
        <span id="about-heading" className="section-title">
          About
        </span>
      </div>

      <p className="about-lead">
        My interest in the brain started back in high school, when I became curious 
        about how biological processes and chemical reactions can create such complex mechanisms.<br />
        During my studies in <strong>Biomedical Engineering</strong>, I realized that what fascinated me most
        was the possibility of <span className="role-emph">reproducing these processes outside the human body</span>, 
        designing circuits and algorithms that turn biology into technology.
        This curiosity naturally led me toward the <span className="role-emph">neuromorphic paradigm</span>, 
        where neural activity inspires hardware and software co-design. I am interested in how concepts like 
        spiking computation and mixed-signal architectures can be exploited 
        to create <strong>energy-efficient systems</strong>.<br />
        I particularly enjoy tackling problems at the intersection of <em>machine learning</em> and 
        <em>analog and digital electronics</em>, with the goal of making computing 
        architectures closer to how the brain actually works.

        <br /><br />

        Today, I am a <span className="role-emph">Software Engineer Intern at{" "}
        <a
          className="inline-link"
          href="https://www.prophesee.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prophesee
        </a></span>, where I work on <strong>event-based vision sensors</strong>.  
        My focus is on building <strong>end-to-end ML pipelines</strong> for sensor characterization, 
        developing <strong>automated bias tuning and KPI prediction tools</strong>, and creating 
        <strong>software frameworks</strong> that allow faster benchmarking and iteration.  
        This role allows me to apply neuromorphic principles in practice — combining sensor physics, 
        embedded electronics, and data-driven modeling to push forward the next generation of vision systems.
      </p>
    </Transition>
  </section>
);

export default About;
