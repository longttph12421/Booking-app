import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Parallax from "../../components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";
import SectionBasics from "./Sections/SectionBasics";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript";
import styles from "../../assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  // image={require("../../assets/img/logo.png").default}
  return (
    <div>
      <Header
        brand={"ABC"}
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={require("../../assets/img/bg4.jpg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>My Dinh eye clinic</h1>
                <h3 className={classes.subtitle}>
                  Better vision for a great life
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <GridItem md={12} className={classes.textCenter}>
          <Link to={"/login-page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
          </Link>
          <SectionJavascript />
          <SectionTypography />
          <SectionBasics />
          <SectionPills />
          <SectionExamples />
          <SectionDownload />
          <SectionCompletedExamples />
        </GridItem>
      </div>
      <Footer />
    </div>
  );
}
