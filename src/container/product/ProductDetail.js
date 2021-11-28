import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import CardFooter from "../../components/Card/CardFooter";
import CardHeader from "../../components/Card/CardHeader";
import GridItem from "../../components/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { getList } from "../../redux/reducer/ProductSlide";
import imagesStyles from "../../assets/jss/material-kit-react/imagesStyles";
import GridContainer from "../../components/Grid/GridContainer";
import Button from "../../components/CustomButtons/Button";
import Muted from "../../components/Typography/Muted";
import Danger from "../../components/Typography/Danger";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles(imagesStyles);
function ProductDetail() {

  let history = useHistory();
  const classes = useStyles();
  const onClickBT = () => {
    history.push("/ProductCart");
  };

  const product = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);
  const onClickBT1 = () => {
    history.push("/ProductDetail");
  };
  return (
    <Box mt={5}>
      <GridContainer  >
        <GridItem item xs={6} className="d-flex justify-content-center" >
          <img
            className={
              classes.imgRaised +
              " " +

              classes.caimgCardTop +
              " " +
              classes.imgproduct
            }
            src={product.image}
            alt=""
          />
        </GridItem>
        <GridItem item xs={6} >
          <Muted><h3>{product.name}</h3></Muted>

          <Muted> <h6>abc</h6></Muted>
          
          <Muted> <h6>Stock Available</h6></Muted>
          <Button color="primary" size="sm" className="" onClick={onClickBT}>add to cart</Button>
          <Muted>  <h6>Sold By:    Mobile Store</h6></Muted>
        </GridItem>
      </GridContainer>
      <hr />
      <Box ml={5}>
        <Muted> <Danger><h3>Chi tiết sản phẩm</h3> </Danger> </Muted>
        <Muted>  <h5>Brand: Beats</h5></Muted>
        <Muted>  <h5>Model: S450</h5></Muted>
        <Muted>  <h5>Wireless Bluetooth Headset</h5></Muted>
        <Muted>  <h5>Feature: FM Radio, Card Supported (Micro SD / TF)</h5></Muted>

      </Box>

      <div>
        <hr />
        {/* <Muted> <h3>Sản phẩm tương tự</h3></Muted>
      <GridContainer>
      
        {
        ProductList.map((product) => {
          return (
            <GridItem spacing={1} xs={3} >
              <Card>
                <CardHeader>{product.name}</CardHeader>
                <CardBody className="d-flex justify-content-center">
                  <img onClick={onClickBT1}
                    className={
                      classes.imgRaised +
                      " " +
                    classes.imgFluid
                    }
                    src="https://cdn.bookingcare.vn/fr/w200/2021/01/14/160049-bs-hoai-huong.jpg"
                    alt=""
                  />
                </CardBody>
                <CardFooter>
                  <Button color="primary" size="sm" onClick={onClickBT1}>detail</Button>
                  <Button color="primary" size="sm" className="">add to cart</Button>
                </CardFooter>
              </Card>
            </GridItem>
          );
        })
        }
      </GridContainer> */}
      </div>


    </Box>

  );
}
export default ProductDetail;