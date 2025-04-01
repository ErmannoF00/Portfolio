import React from "react";
import FadeInSection from "./FadeInSection";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => (
  <section id="contact">
    <FadeInSection>
      <h2>Contact</h2>
      <p>
        <FaEnvelope /> Email: {" "}
        <a href="mailto:ermix.fiorillo@gmail.com">ermix.fiorillo@gmail.com</a>
      </p>
      <p>
        <FaLinkedin /> LinkedIn: {" "}
        <a
          href="https://www.linkedin.com/in/ermanno-fiorillo-799296171"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ermanno Fiorillo
        </a>
      </p>
    </FadeInSection>
  </section>
);

export default Contact;
