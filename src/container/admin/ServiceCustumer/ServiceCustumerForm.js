import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import People from "@material-ui/icons/People";
// core components
import Button from "../../../components/CustomButtons/Button.js";
import Card from "../../../components/Card/Card";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader.js";
import CardFooter from "../../../components/Card/CardFooter.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";
import * as Service from "../../../services/ServiceCustumerService";
import * as toastHelper from "../../../common/toastHelper";
import { useDispatch, useSelector } from "react-redux";
import { getListServiceCustumer } from "../../../redux/reducer/ServiceCustumerSlide";
function ServiceCustumerForm() {


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
        Service.postServiceCustumer(data).then((repo) => {
            toastHelper.toastSuccess("Thêm mới thành công");
            dispatch(getListServiceCustumer());
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
export default ServiceCustumerForm;