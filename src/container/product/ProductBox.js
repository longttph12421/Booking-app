import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getList } from "../../redux/reducer/ProductSlide";
import * as toast from "../../common/toastHelper"
function ProductBox() {
  const ProductList = useSelector((state) => state.product.value);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getList());
  });
  const onClickBT = async () => {
    //toast.toastSuccess("abc");
    toast.toastError("abc");
    console.log(ProductList);
  };
  return (
    <div>
      <button onClick={onClickBT}>click</button>
    </div>
  );
}

export default ProductBox;
