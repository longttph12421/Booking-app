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
import GridContainer from "../../../components/Grid/GridContainer";
const useStyles = makeStyles(imagesStyles);
export default function ProductSlider() {
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
    <div>
      <h2> SẢN PHẨM BÁN CHẠY</h2>
      <Slider {...settings} className="p-3">
        <GridItem spacing={1}>
          <Card>
            <CardHeader>viêm kết mạc</CardHeader>
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
            <CardFooter>
              <button>abc</button>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem spacing={1}>
          <Card>
            <CardHeader>header</CardHeader>
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
                alt="..."
              />
            </CardBody>
            <CardFooter>
              <button>abc</button>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem spacing={1}>
          <Card>
            <CardHeader>header</CardHeader>
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
                alt="..."
              />
            </CardBody>
            <CardFooter>
              <button>abc</button>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem spacing={1}>
          <Card>
            <CardHeader>header</CardHeader>
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
            <CardFooter>
              <button>abc</button>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem spacing={1}>
          <Card>
            <CardHeader>header</CardHeader>
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
            <CardFooter>
              <button>abc</button>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem spacing={1}>
          <Card>
            <CardHeader>header</CardHeader>
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
            <CardFooter>
              <button>abc</button>
            </CardFooter>
          </Card>
        </GridItem>
      </Slider>
    </div>
  );
}
