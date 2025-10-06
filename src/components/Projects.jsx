import React from "react";
import { AiOutlineFolderOpen } from "react-icons/ai"; 
import "../styles/Projects.css";
import Transition from "./Transition";

const Projects = () => {
  const projects = {
    "STT_Deutsch": {
      desc: "Speech to Text Transcription GUI based on Vosk model.",
      techStack: "Python, PyQt5",
      link: "https://github.com/ErmannoF00/STT_Deutsch"
    },
    "MNN": {
      desc: "Simulation of an 'in-situ' training approach for memristive neural network.",
      techStack: "Python, LTSpice",
      link: "https://github.com/ErmannoF00/MNN"
    },
    "SV_MemXBar": {
      desc: "SystemVerilog implementation of memristor crossbar and AdLIF neuron for neuromorphic applications.",
      techStack: "SystemVerilog",
      link: "https://github.com/ErmannoF00/SV_MemXbar"
    },
    "i-Cube_IIT": {
      desc: "Bachelor project based on a GUI that handles data flow from two haptic devices for touch pressure perception and an eye-tracking device.",
      techStack: "Python, PyQt5",
      link: "https://github.com/ErmannoF00/i-Cube_IIT"
    },
    "Kiki_Web": {
      desc: "Multifunctional website for my girlfriend: webchat, letterbox, gameroom and still more work to do...",
      techStack: "JavaScript, CSS, HTML",
      link: "https://github.com/ErmannoF00/Kiki_Web"
    },
    "Pathologies_Classification": {
      desc: "Machine learning project based on the classification of brain pathologies from real patients dataset.",
      techStack: "MATLAB",
      link: "https://github.com/ErmannoF00/Pathologies_Classification"
    }
  };

  return (
    <section id="projects">
      <div className="section-header">
        <span className="section-title">Projects</span>
      </div>
      <div className="project-container">
        <ul className="projects-grid">
          {Object.entries(projects).map(([key, project], i) => (
            <Transition key={i} delay={`${i + 1}00ms`}>
              <li className="projects-card">
                <div className="card-header">
                  <div className="folder-icon">
                    <AiOutlineFolderOpen size={26} style={{ color: "#64d3ff" }} />
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-link"
                    title="View on GitHub"
                  >
                    🔗
                  </a>
                </div>
                <div className="card-title">{key}</div>
                <div className="card-desc">{project.desc}</div>
                <div className="card-tech">{project.techStack}</div>
              </li>
            </Transition>
          ))}
        </ul>

        {/* Add transition to GitHub link */}
        <Transition delay={`${Object.keys(projects).length + 1}00ms`}>
          <div className="more-projects">
            <p>
              Discover more on my{" "}
              <a
                href="https://github.com/ErmannoF00"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                GitHub
              </a>
              !
            </p>
          </div>
        </Transition>
      </div>
    </section>
  );
};

export default Projects;
