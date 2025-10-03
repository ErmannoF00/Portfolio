import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/* Global (single source) */
import "./styles/Global.css";

/* Component styles */
import "./styles/Transition.css";
import "./styles/NavBar.css";
import "./styles/Intro.css";
import "./styles/About.css";
import "./styles/Education.css";
import "./styles/Experience.css";
import "./styles/Projects.css";
import "./styles/BrainSketch.css";
import "./styles/Volunteering.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* GitHub Pages base path */}
    <BrowserRouter basename="/Portfolio">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
