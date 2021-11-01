import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "../../../components/Card/Card";
import CardHeader from "../../../components/Card/CardHeader";
import CardBody from "../../../components/Card/CardBody";
import CardFooter from "../../../components/Card/CardFooter";
import GridItem from "../../../components/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  image: {
    margin: "0px",
    padding: "15px",
    paddingRight: "15px",
    borderRadius: "50%",
    height: "150px",
    width: "150px",
  },
});
export default function SimpleSlider() {
  const classes = useStyles();
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <h2> BÁC SĨ NỔI BẬT</h2>
      <Slider {...settings} className="p-3">
        <GridItem spacing={1}>
          <Card>
            <CardHeader>viêm kết mạc</CardHeader>
            <CardBody>
              <img
                className={classes.image}
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
            <CardBody>
              <img
                className={classes.image}
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
            <CardBody>
              <img
                className={classes.image}
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
            <CardBody>
              <img
                className={classes.image}
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
            <CardBody>
              <img
                className={classes.image}
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
            <CardBody>
              <img
                className={classes.image}
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
