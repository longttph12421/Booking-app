import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getListD } from "../../redux/reducer/DoctorSlide";
import * as toast from "../../common/toastHelper";
function ProductBox() {
  const ProductList = useSelector((state) => state.product.value);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListD());
  }, [dispatch]);
  const onClickBT = () => {
    console.log(ProductList);
    toast.toastSuccess("abc");
    alert(
      "product: " +
        ProductList.map((pr) => {
          return pr.title;
        })
    );
  };
  return (
    <div>
      <h1>kết nối Product với store</h1>
      <button onClick={onClickBT}>click</button>
    </div>
  );
}

export default ProductBox;
