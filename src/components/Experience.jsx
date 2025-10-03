import React from "react";
import { Tabs, Tab, Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Transition from "./Transition";
import "../styles/Experience.css";

/* ----- A11y Tab Panel ----- */
function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`xp-tabpanel-${index}`}
      aria-labelledby={`xp-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className="xp-panel-box">
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const a11yProps = (index) => ({
  id: `xp-tab-${index}`,
  "aria-controls": `xp-tabpanel-${index}`,
});

/* Roman numerals for mobile labels */
const toRoman = (n) => {
  const map = [
    [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
    [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
    [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
  ];
  let res = "", x = n;
  for (const [v, sym] of map) {
    while (x >= v) { res += sym; x -= v; }
  }
  return res;
};

/* MUI styles just for container wiring (most styling lives in CSS) */
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
    display: "flex",
    width: "100%",
    margin: "0 auto",
  },
}));

/* ----- DATA (keep exact wording) ----- */
const EXPERIENCE = {
  "Prophesee": {
    jobTitle: "Software Engineer Intern @",
    link: "https://www.prophesee.ai/",
    duration: "September 2025 – Present",
    desc: [
      "Sensors Characterization team.",
      "Built an end-to-end ML pipeline to predict DVS outputs from bias/KPI configurations.",
      "Automated dataset curation and reporting to accelerate iteration and benchmarking."
    ],
  },
  "Forschungszentrum Jülich": {
    jobTitle: "Research Assistant @",
    link: "https://www.fz-juelich.de/en/pgi/pgi-14",
    duration: "October 2024 – July 2025",
    desc: [
      "[PGI-14] Unit - Neuromorphic Compute Nodes.",
      "Modeled memristive analog circuit to emulate the Mamba State Space Model architecture; analyzed noise, parasitics, and timing.",
      "Implemented and evaluated Mamba with bilinear (Tustin) discretization in software."
    ],
  },
  "Istituto Italiano di Tecnologia": {
    jobTitle: "Guest Student @",
    link: "https://contact.iit.it/",
    duration: "April 2023 – April 2024",
    desc: [
      "[CONTACT] Unit - Cognitive Architecture for Collaborative Technologies.",
      "Developed a real-time GUI fusing haptic-device and eye-tracking streams for seamless data collection.",
      "Analyzed gaze–touch correlation to probe visuo-tactile perception in human studies."
    ],
  },
};

export default function Experience() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [value, setValue] = React.useState(0);

  const entries = Object.entries(EXPERIENCE);

  return (
    <section id="experience" aria-labelledby="experience-heading">
      <Transition>
        <div className="section-header">
          <h2 id="experience-heading" className="section-title">Experience</h2>
        </div>

        <div className={`xp-wrap ${isMobile ? "xp-wrap--mobile" : ""}`}>
          {/* LEFT: Vertical tabs (sidebar) */}
          <Tabs
            orientation={isMobile ? "horizontal" : "vertical"}
            variant={isMobile ? "fullWidth" : "scrollable"}
            value={value}
            onChange={(_e, n) => setValue(n)}
            aria-label="Experience companies"
            className={`xp-tabs ${isMobile ? "xp-tabs--mobile" : ""}`}
            TabIndicatorProps={{ style: { display: "none" } }} 
          >
            {entries.map(([company], i) => (
              <Tab
                key={company}
                className="xp-tab"
                label={isMobile ? toRoman(i + 1) : company}
                {...a11yProps(i)}
              />
            ))}
          </Tabs>

          {/* CENTER: vertical rail (desktop) */}
          {!isMobile && <div className="xp-rail" aria-hidden="true" />}

          {/* RIGHT: content panels */}
          <div className="xp-content">
            {entries.map(([company, item], i) => (
              <TabPanel key={company} value={value} index={i}>
                <div className="xp-heading">
                  <span className="joblist-job-title">{item.jobTitle}</span>{" "}
                  <a
                    className="joblist-job-company"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {company}
                  </a>
                </div>

                <div className="joblist-duration">{item.duration}</div>

                <ul className="job-description">
                  {item.desc.map((d, j) => (
                    <Transition key={j} delay={`${j + 1}00ms`}>
                      <li>{d}</li>
                    </Transition>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </div>
        </div>
      </Transition>
    </section>
  );
}
