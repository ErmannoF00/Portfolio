import React from "react";
import Transition from "./Transition";
import "../styles/Volunteering.css"; // same style used in volunteering

const About = () => (
  <section id="about">
    <Transition>
      <div className="section-header">
        <span className="section-title">Education:</span>
      </div>

      <p className="about-description">
        My academic background combines a foundation in biomedical engineering with strong focus on neurotechnologies and advanced studies in electronics engineering and computer science.
      </p>

      <ul className="volunteering-list">
        <li>
          <strong>Bachelor in Biomedical Engineering</strong> –{" "}
          <a
            href="https://unige.it"
            target="_blank"
            rel="noopener noreferrer"
          >
            University of Genoa
          </a>
        </li>
        <li>
          <strong>Master in Electrical Engineering, Information Technology and Computer Science</strong> –{" "}
          <a
            href="https://www.elektrotechnik.rwth-aachen.de/cms/
            Elektrotechnik-und-Informationstechnik/Studium/Master-Studiengaenge/Master-of-Science/ENGLISCHSPRACHIG-Studiengang-Elektrote/Vertiefungsrichtungen-im-Master-ET-IT-/~qhis/Vertiefungsrichtung-Biomedical-Systems-E/?lidx=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            RWTH Aachen University
          </a>
        </li>
      </ul>
    </Transition>
  </section>
);

export default About;
