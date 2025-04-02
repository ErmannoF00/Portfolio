import React from "react";
import Transition from "./Transition";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => (
  <section id="Contact">
    <Transition>
      <h2>Contacts:</h2>
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
    </Transition>
  </section>
);

export default Contact;
