import React from "react";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Transition from "./Transition";
import "../styles/Experience.css";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`experience-tabpanel-${index}`}
      aria-labelledby={`experience-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `experience-tab-${index}`,
    "aria-controls": `experience-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: isHorizontal ? "column" : "row",
    width: "100%",
    margin: "auto",
  },
  tabs: {
    borderRight: isHorizontal ? "none" : `1px solid #233554`,
    marginBottom: isHorizontal ? "1rem" : "0",
    minWidth: isHorizontal ? "unset" : "200px",
  },
}));

const Experience = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    "Forschungszentrum Jülich": {
      jobTitle: "Research Assistant @",
      link: "https://www.fz-juelich.de/en/pgi/pgi-14",
      duration: "2024 - Present",
      desc: [
        "[PGI-14] Neuromorphic Compute Nodes.",
        "Memristive hardware realization of State Space Models and Mamba."
      ],
    },
    "Istituto Italiano di Tecnologia": {
      jobTitle: "Guest Student @",
      link: "https://contact.iit.it/",
      duration: "April 2023 - April 2024",
      desc: [
        "CONTACT Unit.",
        "Implemented a GUI enabling smooth data integration from haptic devices and eye-tracking system."
      ],
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section id="experience">
      <Transition>
        <div className="section-header">
          <span className="section-title">Experience:</span>
        </div>
        <div className={classes.root}>
          <Tabs
            orientation={isHorizontal ? "horizontal" : "vertical"}
            variant={isHorizontal ? "fullWidth" : "scrollable"}
            value={value}
            onChange={handleChange}
            className={classes.tabs}
          >
            {Object.keys(experienceItems).map((key, i) => (
              <Tab key={i} label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
            ))}
          </Tabs>
          {Object.keys(experienceItems).map((key, i) => (
            <TabPanel key={i} value={value} index={i}>
              <span className="joblist-job-title">
                {experienceItems[key].jobTitle}
              </span>{" "}
              <a
                className="joblist-job-company"
                href={experienceItems[key].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {key}
              </a>
              <div className="joblist-duration">{experienceItems[key].duration}</div>
              <ul className="job-description">
                {experienceItems[key].desc.map((descItem, j) => (
                  <Transition key={j} delay={`${j + 1}00ms`}>
                    <li>{descItem}</li>
                  </Transition>
                ))}
              </ul>
            </TabPanel>
          ))}
        </div>
      </Transition>
    </section>
  );
};

export default Experience;
