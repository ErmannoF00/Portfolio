import React from "react";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import FadeInSection from "./FadeInSection";
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
      duration: "2024 - Present",
      desc: [
        "Working in PGI-14 on computational neuroscience simulations.",
        "Assisting in the development of brain-inspired models for neuromorphic hardware."
      ],
    },
    "Istituto Italiano di Tecnologia": {
      jobTitle: "Intern @",
      duration: "Summer 2023",
      desc: [
        "Contributed to projects in the field of bio-inspired AI and robotics.",
        "Worked with memristive systems and learned tools for analog computing simulation."
      ],
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section id="experience">
      <FadeInSection>
        <div className="section-header">
          <span className="section-title">/ experience</span>
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
              <span className="joblist-job-company">{key}</span>
              <div className="joblist-duration">{experienceItems[key].duration}</div>
              <ul className="job-description">
                {experienceItems[key].desc.map((descItem, j) => (
                  <FadeInSection key={j} delay={`${j + 1}00ms`}>
                    <li>{descItem}</li>
                  </FadeInSection>
                ))}
              </ul>
            </TabPanel>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};

export default Experience;
