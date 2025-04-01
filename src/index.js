import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Global Styles
import "./styles/Global.css";
import "./styles/FadeInSection.css";
import "./styles/NavBar.css";
import "./styles/Intro.css";
import "./styles/About.css";
import "./styles/Experience.css";
import "./styles/Projects.css";
import "./styles/BrainSketch.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
