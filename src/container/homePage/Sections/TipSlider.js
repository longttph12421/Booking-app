import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "../../../components/Card/Card";
import CardHeader from "../../../components/Card/CardHeader";
import CardBody from "../../../components/Card/CardBody";
import CardFooter from "../../../components/Card/CardFooter";
import GridItem from "../../../components/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import imagesStyles from "../../../assets/jss/material-kit-react/imagesStyles";
import React from "react";
import Button from "../../../components/CustomButtons/Button";
import Muted from "../../../components/Typography/Muted";
import styles from "../../../assets/jss/material-kit-react/views/componentsSections/typographyStyle.js"
const useStyles = makeStyles(imagesStyles);
const Styles = makeStyles(styles);
export default function TipSlider() {
  const classes = useStyles();
  const classes2 = Styles();
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <React.Fragment>
      <Slider {...settings} className="p-3">
        <GridItem spacing={1}>
          <Card>
            <CardHeader></CardHeader>
            <CardBody className="d-flex justify-content-center">
              <img
                className={classes.imgRaised + " " + classes.imgFluid}
                src="https://www.matsaigon.com/wp-content/uploads/kinh-ap-trong-1.jpg"
                alt=""
              />
            </CardBody>
            <CardFooter className="d-flex justify-content-center">
              <h4>Cẩm nang về mắt</h4>
            </CardFooter>
            <CardFooter className="d-flex justify-content-center">
              <Button size="sm" color="primary">
                xem thêm{" "}
              </Button>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem spacing={1}>
          <Card>
            <CardHeader></CardHeader>
            <CardBody className="d-flex justify-content-center">
              <img
                className={classes.imgRaised + " " + classes.imgFluid}
                src="https://www.matsaigon.com/wp-content/uploads/luu-y-khi-su-dung-kinh-ap-trong-2-768x512.jpg"
                alt="..."
              />
            </CardBody>
            <CardFooter className="d-flex justify-content-center">
              <h4>Cẩm nang về mắt</h4>
            </CardFooter>
            <CardFooter className="d-flex justify-content-center">
              <Button size="sm" color="primary">
                xem thêm{" "}
              </Button>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem spacing={1}>
          <Card>
            <CardHeader></CardHeader>
            <CardBody className="d-flex justify-content-center">
              <img
                className={classes.imgRaised + " " + classes.imgFluid}
                src="https://www.matsaigon.com/wp-content/uploads/thuc-pham-tot-cho-mat.jpg"
                alt=""
              />
            </CardBody>
            <CardFooter className="d-flex justify-content-center">
              <h4>Cẩm nang về mắt</h4>
            </CardFooter>
            <CardFooter className="d-flex justify-content-center">
              <Button size="sm" color="primary">
                xem thêm{" "}
              </Button>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem spacing={1}>
          <Card>
            <CardHeader></CardHeader>
            <CardBody className="d-flex justify-content-center">
              <img
                className={classes.imgRaised + " " + " " + classes.imgFluid}
                src="https://www.matsaigon.com/wp-content/uploads/thuc-pham-tot-cho-mat-1.jpg"
                alt=""
              />
            </CardBody>
            <CardFooter className="d-flex justify-content-center">
              <h4>Cẩm nang về mắt</h4>
            </CardFooter>
            <CardFooter className="d-flex justify-content-center">
              <Button size="sm" color="primary">
                xem thêm{" "}
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </Slider>
    </React.Fragment>
  );
}
