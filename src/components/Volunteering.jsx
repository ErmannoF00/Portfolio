import React from "react";
import Transition from "./Transition";
import "../styles/Volunteering.css";

const Volunteering = () => (
  <section id="volunteering">
    <Transition>
      <div className="section-header">
        <span className="section-title">Volunteering:</span>
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
        <li>
          <strong>Scout Associate</strong> at{" "}
          <a href="https://www.scoutovada1.org/" target="_blank" rel="noopener noreferrer">
            Former Scout Agesci Ovada 1
          </a>
        </li>
      </ul>
    </Transition>
  </section>
);

export default Volunteering;
