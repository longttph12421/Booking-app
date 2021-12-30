import React, { useEffect } from "react";
// @material-ui/core components
import { useForm } from "react-hook-form";
// core components
import Button from "../../../components/CustomButtons/Button.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardFooter from "../../../components/Card/CardFooter.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";
import * as Service from "../../../services/ServiceCustomerService";
import * as toastHelper from "../../../common/toastHelper";
import { useDispatch, useSelector } from "react-redux";
import { getListServiceCustomer } from "../../../redux/reducer/ServiceCustomerSlide";
function ServiceCustomerForm() {


    const detai = useSelector((state) => state.service.detail);

    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: detai.name,
            price: detai.price,
            description: detai.description
        }
    });
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        Service.postServiceCustomer(data).then((repo) => {
            toastHelper.toastSuccess("Thêm mới thành công");
            dispatch(getListServiceCustomer());
        }).catch(error => {
            toastHelper.toastError("Thêm mới thất bại" + error);
        })

    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} >
                <CardBody>
                    
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
                </CardBody>
                <CardFooter>
                    <Button simple color="primary" type="submit" size="lg">
                        submit
                    </Button>
                </CardFooter>
            </form>
        </>
    )

}
export default ServiceCustomerForm;