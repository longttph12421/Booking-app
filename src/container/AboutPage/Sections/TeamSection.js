import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardFooter from "../../../components/Card/CardFooter.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Đội ngũ y bác sĩ danh tiếng</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src="https://cdn.bookingcare.vn/fr/w200/2021/01/14/160049-bs-hoai-huong.jpg" alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Nguyễn Thị Mai
                <br />
                <small className={classes.smallTitle}>Giáo sư tiến sĩ</small>
              </h4>
              <CardBody>
              <p className={classes.description}>
                 Giáo sư tiến sĩ Nguyễn Thị Mai đã có 10 năm kinh nghiệm trong lính vực Mắt. Làm việc tại nhật kí yêu thương<a href="/doctor/1">Xem thêm</a>
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src="https://cdn.bookingcare.vn/fr/w200/2020/03/17/114430-bshung.jpg" alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Dào Văn Dưỡng
                <br />
                <small className={classes.smallTitle}>Giáo sư tiến sĩ</small>
              </h4>
              <CardBody>
              <p className={classes.description}>
                 Giáo sư tiến sĩ Dào Văn Dưỡngc đã có 10 năm kinh nghiệm trong lính vực tán gái. Làm việc tại nhật kí yêu thương<a href="/doctor/1">Xem thêm</a>
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src="https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/259127553_3074790722796669_5860938531612923022_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=DZREndS01rMAX_-HrGc&_nc_ht=scontent.fhan3-4.fna&oh=00_AT-B84IpB2feBd64pr-JRGOvvABmJq23nb8SD24DDmDPxg&oe=61C0577E" alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
               Dương Văn Đức
                <br />
                <small className={classes.smallTitle}>Giáo sư tiến sĩ</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                 Giáo sư tiến sĩ Dương Văn Đức đã có 10 năm kinh nghiệm trong lính vực tán gái. Làm việc tại nhật kí yêu thương<a href="/doctor/1">Xem thêm</a>
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
