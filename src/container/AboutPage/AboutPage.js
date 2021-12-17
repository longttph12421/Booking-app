import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/views/landingPage.js";
// Sections for this page
import About from "./Sections/About.js";
import TeamSection from "./Sections/TeamSection.js";
import Contact from "./Sections/Contact.js";

const useStyles = makeStyles(styles);

export default function AboutPage(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <About />
      <TeamSection />
      <Contact />
    </div>
  );
}
