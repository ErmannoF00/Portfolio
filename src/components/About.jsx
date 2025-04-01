import React from "react";
import FadeInSection from "./FadeInSection";
import "../styles/About.css";

const About = () => (
  <section id="about">
    <FadeInSection>
      <h2>Education</h2>
      <ul>
        <li>
          Bachelor in Biomedical Engineering –{" "}
          <a
            href="https://unige.it"
            target="_blank"
            rel="noopener noreferrer"
          >
            University of Genoa
          </a>
        </li>
        <li>
          Master in Electrical Engineering, Information Technology and Computer Science –{" "}
          <a
            href="https://www.rwth-aachen.de"
            target="_blank"
            rel="noopener noreferrer"
          >
            RWTH Aachen University
          </a>
        </li>
      </ul>
    </FadeInSection>
  </section>
);

export default About;
