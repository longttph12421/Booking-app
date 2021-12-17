import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getList } from "../../redux/reducer/ProductSlide";
import { makeStyles } from "@material-ui/core/styles";
import ProductSlider from "../homePage/Sections/ProductSlider";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import CardFooter from "../../components/Card/CardFooter";
import CardHeader from "../../components/Card/CardHeader";
import GridItem from "../../components/Grid/GridItem";
import imagesStyles from "../../assets/jss/material-kit-react/imagesStyles";
import GridContainer from "../../components/Grid/GridContainer";
import Button from "../../components/CustomButtons/Button";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles(imagesStyles);

function Product() {
  let history = useHistory();
  const classes = useStyles();
  const ProductList = useSelector((state) => state.product.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  const onClickBT = () => {
    history.push("/ProductDetail");
  };

  return (
    <div>
      <ProductSlider />
      <GridContainer>
        {ProductList.map((product) => {
          return (
            <GridItem spacing={1} xs={12} lg={3} key={product.id}>
              <Card>
                <CardHeader>{product.name}</CardHeader>
                <CardBody className="d-flex justify-content-center">
                  <Link to={`/product/${product.id}`}>
                    <img
                      onClick={onClickBT}
                      className={
                        classes.imgRaised +
                        " " +
                        classes.imgRoundedCircle +
                        " " +
                        classes.imgFluid
                      }
                      src={product.image}
                      alt="..."
                    />
                  </Link>
                </CardBody>
                <CardFooter>
                  <Link to={`/product/${product.id}`}>
                    <Button color="primary" size="sm">
                      {" "}
                      Detail
                    </Button>
                  </Link>
                  <Button color="primary" size="sm">
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

export default Product;
