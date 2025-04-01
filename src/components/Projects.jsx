import React from "react";
import "../styles/Projects.css";
import FadeInSection from "./FadeInSection";
import ExternalLinks from "./ExternalLinks";

const Projects = () => {
  const projects = {
    "STT_Deutsch": {
      desc: "Speech to Text Transcription GUI based on Vosk.",
      techStack: "Python, PyQt5",
      link: "https://github.com/ErmannoF00/STT_Deutsch"
    },
    "MemCrossbar": {
      desc: "Simulation of an 'in-situ' training approach for memristor crossbar neural network.",
      techStack: "Python, LTSpice",
      link: "https://github.com/ErmannoF00/MemCrossbar"
    },
    "SV_MemXBar": {
      desc: "SystemVerilog implementation of memristor crossbar and AdLIF neuron for neuromorphic applications.",
      techStack: "SystemVerilog",
      link: "https://github.com/ErmannoF00/SV_MemXbar"
    },
    "i-Cube_IIT": {
      desc: "Bachelor project based on a GUI that handles data flow from two cubic devices for haptic perception and an eye-tracking device.",
      techStack: "Python, PyQt5",
      link: "https://github.com/ErmannoF00/i-Cube_IIT"
    },
    "Kiki_Web": {
      desc: "Multifunctional website for my girlfriend, still much work to do for that Christmas gift...",
      techStack: "JavaScript, C#, HTML",
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
        <span className="section-title">/ projects</span>
      </div>
      <div className="project-container">
        <ul className="projects-grid">
          {Object.entries(projects).map(([key, project], i) => (
            <FadeInSection key={i} delay={`${i + 1}00ms`}>
              <li className="projects-card">
                <div className="card-header">
                  <div className="folder-icon">📁</div>
                  <ExternalLinks githubLink={project.link} />
                </div>
                <div className="card-title">{key}</div>
                <div className="card-desc">{project.desc}</div>
                <div className="card-tech">{project.techStack}</div>
              </li>
            </FadeInSection>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
