import React from "react";
import FadeInSection from "./FadeInSection";
import "../styles/Volunteering.css";

const Volunteering = () => (
  <section id="volunteering">
    <FadeInSection>
      <div className="section-header">
        <span className="section-title">/ volunteering</span>
      </div>
      <ul className="volunteering-list">
        <li>
          <strong>Co-founder</strong> at{" "}
          <a href="https://www.linkedin.com/company/young-neuromorphs/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
            Young Neuromorphs
          </a>
        </li>
        <li>
          <strong>IT Team – Website Maintenance</strong> at{" "}
          <a href="https://eestec.rwth-aachen.de/" target="_blank" rel="noopener noreferrer">
            EESTech LC Aachen
          </a>
        </li>
      </ul>
    </FadeInSection>
  </section>
);

export default Volunteering;
