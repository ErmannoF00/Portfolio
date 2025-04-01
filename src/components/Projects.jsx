import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import ExternalLinks from "./ExternalLinks";

const Projects = () => {
  const projects = {
    "STT_Deutsch": {
      desc: "Speech to Text Transcription GUI based on Vosk.",
      techStack: "Python, PyQt5",
      link: "https://github.com/ErmannoF00/STT_Deutsch",
      open: ""
    },
    "MemCrossbar": {
      desc: "Simulation of an 'in-situ' training approach for memristor crossbar neural network.",
      techStack: "Python, LTSpice",
      link: "https://github.com/ErmannoF00/MemCrossbar",
      open: ""
    },
    "SV_MemXBar": {
      desc: "SystemVerilog implementation of memristor crossbar and AdLIF neuron for neuromorphic applications.",
      techStack: "SystemVerilog",
      link: "https://github.com/ErmannoF00/SV_MemXbar",
      open: ""
    },
    "i-Cube_IIT": {
      desc: "Bachelor project based on a GUI that handles data flow from two cubic devices for haptic perception and an eye-tracking device.",
      techStack: "Python, PyQt5",
      link: "https://github.com/ErmannoF00/i-Cube_IIT",
      open: ""
    },
    "Kiki_Web": {
      desc: "Multifunctional website for my girlfriend, still much work to do for that Christmas gift...",
      techStack: "JavaScript, C#, HTML",
      link: "https://github.com/ErmannoF00/Kiki_Web",
      open: ""
    },
    "Pathologies_Classification": {
      desc: "Machine learning project based on the classification of brain pathologies from real patients dataset.",
      techStack: "MATLAB",
      link: "https://github.com/ErmannoF00/Pathologies_Classification",
      open: ""
    }
  };

  return (
    <section id="projects">
      <div className="section-header">
        <span className="section-title">/ projects</span>
      </div>
      <div className="project-container">
        <ul className="projects-grid">
          {Object.keys(projects).map((key, i) => (
            <FadeInSection key={i} delay={`${i + 1}00ms`}>
              <li className="projects-card">
                <div className="card-header">
                  <div className="folder-icon">
                    <FolderOpenRoundedIcon style={{ fontSize: 35 }} />
                  </div>
                  <ExternalLinks
                    githubLink={projects[key]["link"]}
                    openLink={projects[key]["open"]}
                  />
                </div>

                <div className="card-title">{key}</div>
                <div className="card-desc">{projects[key]["desc"]}</div>
                <div className="card-tech">{projects[key]["techStack"]}</div>
              </li>
            </FadeInSection>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
