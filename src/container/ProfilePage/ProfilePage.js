import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Button from "../../components/CustomButtons/Button.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import profile from "../../assets/img/faces/christian.jpg";
import styles from "../../assets/jss/material-kit-react/views/profilePage.js";
import user from "../../assets/img/user.png";
const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const auth = JSON.parse(localStorage.getItem("userLogin"));
  console.log(auth);
  return (
    <div>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <div className={classes.profile}>
              <div>
                <img
                  src={auth.photo != null ? auth.photo : user}
                  alt="..."
                  className={imageClasses}
                />
              </div>
              <div className={classes.name}>
                <h3 className={classes.title}>{auth.fullName}</h3>
                <h6>{auth.role}</h6>
                <Button justIcon link className={classes.margin5}>
                  <i className={"fab fa-twitter"} />
                </Button>
                <Button justIcon link className={classes.margin5}>
                  <i className={"fab fa-instagram"} />
                </Button>
                <Button justIcon link className={classes.margin5}>
                  <i className={"fab fa-facebook"} />
                </Button>
              </div>
            </div>
          </GridItem>
        </GridContainer>
        <div className={classes.description}>
          <p>
            An artist of considerable range, Chet Faker — the name taken by
            Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
            records all of his own music, giving it a warm, intimate feel with a
            solid groove structure.{" "}
          </p>
        </div>
        <GridContainer justify="center">
          <GridItem
            xs={12}
            sm={12}
            md={8}
            className={classes.navWrapper}
          ></GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
