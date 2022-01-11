import React from "react";
// @material-ui/core components
import { useForm } from "react-hook-form";
// core components
import Button from "../../../components/CustomButtons/Button.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardFooter from "../../../components/Card/CardFooter.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";
import * as Service from "../../../services/ServiceCustomerService";
import * as toastHelper from "../../../common/toastHelper";
import * as UI from "../../../redux/reducer/UiSlider";
import { useDispatch, useSelector } from "react-redux";
import { getListServiceCustomer } from "../../../redux/reducer/ServiceCustomerSlide";
function ServiceForm() {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.service.detail);

  const defaultValues = {
    id: detail.id,
    name: detail.name,
    price: detail.price,
    description: detail.description,
    timeExamination: detail.timeExamination,
  };
  const { register, handleSubmit } = useForm({ defaultValues });

  const onSubmit = (data) => {
    console.log(data);
    if (data.id != "") {
      Service.postServiceCustomer(data)
        .then((response) => {
          toastHelper.toastSuccess("Cập nhật thành công");
          dispatch(getListServiceCustomer());
          dispatch(UI.closeModal());
        })
        .catch((error) => {
          toastHelper.toastError("Đã sảy ra lỗi" + error);
        });
    } else {
      Service.postServiceCustomer(data)
        .then((response) => {
          toastHelper.toastSuccess("Thêm mới thành công");
          dispatch(getListServiceCustomer());
          dispatch(UI.closeModal());
        })
        .catch((error) => {
          toastHelper.toastError("Thêm mới thất bại" + error);
        });
    }
  };
  const onCancel = () => {
    dispatch(UI.closeModal());
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardBody>
          <input {...register("id")} type="hidden" />
          <CustomInput
            labelText="Tên dịch vụ..."
            id="first"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              ...register("name"),
              type: "text",
            }}
          />
          <CustomInput
            labelText="Price"
            id="pass"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              ...register("price"),
              type: "number",
              autoComplete: "off",
            }}
          />

          <CustomInput
            labelText="Mô tả..."
            id="first"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              ...register("description"),
              type: "text",
            }}
          />
          <CustomInput
            labelText="Thời gian khám..."
            id="first"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              ...register("timeExamination"),
              type: "text",
            }}
          />
        </CardBody>
        <CardFooter>
          <Button simple color="primary" type="submit" size="lg">
            LƯU
          </Button>
          <Button simple color="danger" size="lg" onClick={onCancel}>
            TRỞ VỀ
          </Button>
        </CardFooter>
      </form>
    </>
  );
}
export default ServiceForm;
