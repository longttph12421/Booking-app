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
import Button  from  "../../../components/CustomButtons/Button";
import React from "react";
const useStyles = makeStyles(imagesStyles);
export default function SliderDoctor() {
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
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRoundedCircle +
                  " " +
                  classes.imgFluid
                }
                src="https://cdn.bookingcare.vn/fr/w200/2021/01/14/160049-bs-hoai-huong.jpg"
                alt=""
              />
            </CardBody>
            <CardFooter className="d-flex justify-content-center">
            <Button size="sm" color="primary">xem thêm </Button>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem spacing={1}>
          <Card>
            <CardHeader></CardHeader>
            <CardBody className="d-flex justify-content-center">
              <img
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRoundedCircle +
                  " " +
                  classes.imgFluid
                }
                src="https://cdn.bookingcare.vn/fr/w200/2020/03/17/114430-bshung.jpg"
                alt="..."
              />
            </CardBody>
            <CardFooter className="d-flex justify-content-center">
              <Button size="sm" color="primary">xem thêm </Button>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem spacing={1}>
          <Card>
            <CardHeader></CardHeader>
            <CardBody className="d-flex justify-content-center">
              <img
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRoundedCircle +
                  " " +
                  classes.imgFluid
                }
                src="https://cdn.bookingcare.vn/fr/w200/2021/01/18/105401-bsckii-tran-minh-khuyen.jpg"
                alt="..."
              />
            </CardBody>
            <CardFooter className="d-flex justify-content-center">
              <Button size="sm" color="primary">xem thêm </Button>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem spacing={1}>
          <Card>
            <CardHeader></CardHeader>
            <CardBody className="d-flex justify-content-center">
              <img
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRoundedCircle +
                  " " +
                  classes.imgFluid
                }
                src="https://cdn.bookingcare.vn/fr/w200/2021/06/01/143859-bs-van.jpg"
                alt=""
              />
            </CardBody>
            <CardFooter className="d-flex justify-content-center">
              <Button size="sm" color="primary">xem thêm </Button>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem spacing={1}>
          <Card>
            <CardHeader></CardHeader>
            <CardBody className="d-flex justify-content-center">
              <img
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRoundedCircle +
                  " " +
                  classes.imgFluid
                }
                src="https://cdn.bookingcare.vn/fr/w200/2021/01/21/142313-bs-tran-huu-binh.jpg"
                alt=""
              />
            </CardBody>
            <CardFooter className="d-flex justify-content-center">
              <Button size="sm" color="primary">xem thêm </Button>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem spacing={1}>
          <Card>
            <CardHeader></CardHeader>
            <CardBody className="d-flex justify-content-center">
              <img
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRoundedCircle +
                  " " +
                  classes.imgFluid
                }
                src="https://cdn.bookingcare.vn/fr/w200/2021/01/14/160049-bs-hoai-huong.jpg"
                alt=""
              />
            </CardBody>
            <CardFooter className="d-flex justify-content-center">
              <Button size="sm" color="primary">xem thêm </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </Slider>
    </React.Fragment>
  );
}
