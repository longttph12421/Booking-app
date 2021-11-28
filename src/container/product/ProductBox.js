import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getList, findById } from "../../redux/reducer/ProductSlide";
import { makeStyles } from "@material-ui/core/styles";
import ProductSlider from "../homePage/Sections/PoductSlider";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import CardFooter from "../../components/Card/CardFooter";
import GridItem from "../../components/Grid/GridItem";
import imagesStyles from "../../assets/jss/material-kit-react/imagesStyles";
import GridContainer from "../../components/Grid/GridContainer";
import Button from "../../components/CustomButtons/Button";
import { useHistory } from "react-router-dom";
import { addToCart } from "../../redux/reducer/ProductSlide";
import Muted  from "../../components/Typography/Muted";


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

  const onClickBT = (id) => {
    dispatch(findById(id));
    history.push("/ProductDetail");
  };

  return (
    <div>
      <ProductSlider />

      <GridContainer>
        {ProductList.map((product) => {
          return (
            <GridItem spacing={1} xs={3} lg={12}>
              <Card>
               
                
              
                <CardBody className="d-flex justify-content-center">
                  
                  <img
                    onClick={() =>
                    {
                      onClickBT(product.id)
                    }} 
                    className={
                      classes.imgRaised +
                      " " +
                     
                      classes.imgFluid
                    }
                    src={product.image}
                    alt=""
                  />
                </CardBody>
                <CardFooter className="d-flex justify-content-center"> <Muted> <h4>{product.name}</h4></Muted></CardFooter>
                <CardFooter>
                  <Button color="primary" size="sm"  onClick={() =>
                    {
                      onClickBT(product.id)
                    }} >
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
