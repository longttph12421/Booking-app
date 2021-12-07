import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "../../../components/Card/Card";
import CardHeader from "../../../components/Card/CardHeader";
import CardBody from "../../../components/Card/CardBody";
import CardFooter from "../../../components/Card/CardFooter";
import GridItem from "../../../components/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../../../components/CustomButtons/Button";
import imagesStyles from "../../../assets/jss/material-kit-react/imagesStyles";
import Muted from "../../../components/Typography/Muted";
const useStyles = makeStyles(imagesStyles);
function ProductSlider() {
  const classes = useStyles();
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
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
                src="https://nhathuoclongchau.com/upload/post/48048/images/kinh-can.jpg"
                alt=""
              />
            </CardBody>
            <CardFooter className="d-flex justify-content-center">
              <Muted>
                <h4>Kính cận</h4>
              </Muted>
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
                src="https://matkinhminhnhat.vn/upload/images/xu-huong-thoi-trang-moi-kinh-lao-cho-nguoi-gia.jpg"
                alt="..."
              />
            </CardBody>
            <CardFooter className="d-flex justify-content-center">
              {" "}
              <Muted>
                {" "}
                <h4>Kính áp tròng</h4>
              </Muted>
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
                src="https://nhathuoclongchau.com/upload/post/48048/images/kinh-can.jpg"
                alt=""
              />
            </CardBody>
            <CardFooter className="d-flex justify-content-center">
              {" "}
              <Muted>
                {" "}
                <h4>Kính cận</h4>
              </Muted>
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
                src="https://matkinhminhnhat.vn/upload/images/xu-huong-thoi-trang-moi-kinh-lao-cho-nguoi-gia.jpg"
                alt="..."
              />
            </CardBody>
            <CardFooter className="d-flex justify-content-center">
              {" "}
              <Muted>
                {" "}
                <h4>Kính lão</h4>
              </Muted>
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
export default ProductSlider;
