import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
//import { Link } from "react-router-dom";
// @material-ui/core components
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
import Doctor from "../doctor/Doctor";
import SliderDoctor from "./Sections/SliderDoctor.js";
import ProductSlider from "./Sections/ProductSlider";
import TipSlider from "./Sections/TipSlider";
import { CssBaseline } from "@material-ui/core";
const useStyles = makeStyles(styles);

export default function HomePage(props) {
  const classes = useStyles();
  const { ...rest } = props;

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
        <GridContainer>
          <GridItem md={12} className={"mt-5 " + classes.textCenter}>
            <h2>BÁC SĨ NỔI BẬT TUẦN QUA</h2>
            <SliderDoctor />
          </GridItem>
          <CssBaseline />
          <GridItem md={12} className={"mt-5 " + classes.textCenter}>
            <h2>SẢN PHẨM BÁN CHẠY</h2>
            <ProductSlider />
          </GridItem>

          <GridItem md={12} className={"mt-5 " + classes.textCenter}>
            <h2>CẨM NANG</h2>
            <TipSlider />
          </GridItem>

          <Doctor />
          <DoctorDetail />
        </GridContainer>
      </div>
      <Footer />
    </div>
  );
}
