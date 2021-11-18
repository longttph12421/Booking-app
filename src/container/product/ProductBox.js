import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getList } from "../../redux/reducer/ProductSlide";
import { makeStyles } from "@material-ui/core/styles";
import ProductSlider from "../homePage/Sections/PoductSlider";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import CardFooter from "../../components/Card/CardFooter";
import CardHeader from "../../components/Card/CardHeader";
import GridItem from "../../components/Grid/GridItem";
import imagesStyles from "../../assets/jss/material-kit-react/imagesStyles";
import GridContainer from "../../components/Grid/GridContainer";
import Button from "../../components/CustomButtons/Button";
import { useHistory } from "react-router-dom";
import { addToCart } from "../../redux/reducer/ProductSlide";
const useStyles = makeStyles(imagesStyles);
function ProductBox() {
  let history = useHistory();
  const classes = useStyles();
  const ProductList = useSelector((state) => state.product.data);
  const dispatch = useDispatch();
  const data = {
    name: "abc",
  };

  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  const abc = () => {
    dispatch(addToCart(data));
  };

  const onClickBT = () => {
    history.push("/ProductDetail");
  };

  return (
    <div>
      <ProductSlider />

      <GridContainer>
        {ProductList.map((product) => {
          return (
            <GridItem spacing={1} xs={12} lg={3}>
              <Card>
                <CardHeader>{product.name}</CardHeader>
                <CardBody className="d-flex justify-content-center">
                  <img
                    onClick={onClickBT}
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
                  <Button color="primary" size="sm" onClick={onClickBT}>
                    detail
                  </Button>
                  <Button color="primary" size="sm" className="">
                    add to cart
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          );
        })}
      </GridContainer>
    </div>
  );
}

export default ProductBox;
