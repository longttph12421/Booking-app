import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
//import { Link } from "react-router-dom";
// @material-ui/core components
import { Route, Switch } from "react-router-dom";
import routes from "../../configures/routes";
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Parallax from "../../components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import styles from "../../assets/jss/material-kit-react/views/components.js";
import DoctorDetail from "../doctor/DoctorDetail.js";
import Doctor from "../doctor/Doctor.js";
import Index from "./Sections/Index";
const useStyles = makeStyles(styles);

export default function HomePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const showContent = (routes) => {
    var content = null;
    if (routes.length > 0) {
      content = routes.map((route, index) => {
        return <Switch key={index}>{route}</Switch>;
      });
    }
    return content;
  };
  return (
    <div>
      <Header
        brand={""}
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={require("../../assets/img/backgrou.jpg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>NỀN TẢNG Y TẾ</h1>
                <h3 className={classes.subtitle}>CHĂM SÓC MẮT TOÀN DIỆN</h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        {showContent(routes)}
      </div>
      <Footer />
    </div>
  );
}
