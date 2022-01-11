/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import GridItem from "../../components/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import { findById } from "../../redux/reducer/ProductSlide";
import imagesStyles from "../../assets/jss/material-kit-react/imagesStyles";
import GridContainer from "../../components/Grid/GridContainer";
import Button from "../../components/CustomButtons/Button";
import Muted from "../../components/Typography/Muted";
import Danger from "../../components/Typography/Danger";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles(imagesStyles);
function ProductDetail({ match }) {
  
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findById(match.params.id));
  }, [match.params.id]);
  
  const product = useSelector((state) => state.product.value);

  return (
    <Box mt={5}>
      <GridContainer>
        <GridItem item xs={6} className="d-flex justify-content-center">
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
        <GridItem item xs={6}>
          <Muted>
            <h3>{product.name}</h3>
          </Muted>

          <Muted>
            {" "}
            <h6>abc</h6>
          </Muted>

          <Muted>
            {" "}
            <h6>Stock Available</h6>
          </Muted>
          <Button color="primary" size="sm" className="">
            add to cart
          </Button>
          <Muted>
            {" "}
            <h6>Sold By: Mobile Store</h6>
          </Muted>
        </GridItem>
      </GridContainer>
      <hr />
      <Box ml={5}>
        <Muted>
          {" "}
          <Danger>
            <h3>Chi tiết sản phẩm</h3>{" "}
          </Danger>{" "}
        </Muted>
        <Muted>
          {" "}
          <h5>Brand: Beats</h5>
        </Muted>
        <Muted>
          {" "}
          <h5>Model: S450</h5>
        </Muted>
        <Muted>
          {" "}
          <h5>Wireless Bluetooth Headset</h5>
        </Muted>
        <Muted>
          {" "}
          <h5>Feature: FM Radio, Card Supported (Micro SD / TF)</h5>
        </Muted>
      </Box>
    </Box>
  );
}
export default ProductDetail;
