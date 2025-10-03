import React from "react";
import Transition from "./Transition";
import "../styles/Education.css";

const Education = () => (
  <section id="education" aria-labelledby="education-heading">
    <Transition>
      <div className="section-header">
        <span id="education-heading" className="section-title title-smooth">Education</span>
      </div>

      <div className="pcb-rail">
        <ul className="electric-list edu-list">
          <li>
            <strong>Bachelor in Biomedical Engineering</strong> —{" "}
            <a className="inline-link" href="https://unige.it" target="_blank" rel="noreferrer">
              University of Genoa
            </a>
          </li>
          <li>
            <strong>Master in Electrical Engineering, Information Technology and Computer Science</strong> —{" "}
            <a
              className="inline-link"
              href="https://www.elektrotechnik.rwth-aachen.de/cms/Elektrotechnik-und-Informationstechnik/Studium/Master-Studiengaenge/Master-of-Science/ENGLISCHSPRACHIG-Studiengang-Elektrote/Vertiefungsrichtungen-im-Master-ET-IT-/~qhis/Vertiefungsrichtung-Biomedical-Systems-E/?lidx=1"
              target="_blank"
              rel="noreferrer"
            >
              RWTH Aachen University
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </section>
);

export default Education;
