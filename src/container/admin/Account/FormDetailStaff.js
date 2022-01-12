import React from "react";
// @material-ui/core components
import { useForm } from "react-hook-form";
// core components
import Button from "../../../components/CustomButtons/Button.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardFooter from "../../../components/Card/CardFooter.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";
import * as AccountService from "../../../services/AccountService";
import * as toastHelper from "../../../common/toastHelper";
import * as UI from "../../../redux/reducer/UiSlider";
import { useDispatch, useSelector } from "react-redux";

function FormDetailStaff(props) {
    const {listStaff, setListStaff} = props;
    const dispatch = useDispatch();
    // const detail = useSelector((state) => state.service.detail);

    const defaultValues = {
        // id: detail.id,
        // name: detail.name,
        // price: detail.price,
        // description: detail.description,
        // timeExamination: detail.timeExamination,
    };
    const { register, handleSubmit } = useForm({ defaultValues });

    const onSubmit = (data) => {
        console.log(data);
        // if (data.id != "") {
        AccountService.insertStaff(data)
            .then((response) => {
                const newList = [];
                // eslint-disable-next-line array-callback-return
                listStaff.map((t) => {
                    newList.push(t);
                });
                newList.push(response.data);
                setListStaff(newList);
                toastHelper.toastSuccess("Thêm mới thành công");
                dispatch(UI.closeModal());
            })
            .catch((error) => {
                toastHelper.toastError("Đã sảy ra lỗi" + error);
            });
        // } else {
        //     Service.postServiceCustomer(data)
        //         .then((response) => {
        //             toastHelper.toastSuccess("Thêm mới thành công");
        //             dispatch(getListServiceCustomer());
        //             dispatch(UI.closeModal());
        //         })
        //         .catch((error) => {
        //             toastHelper.toastError("Thêm mới thất bại" + error);
        //         });
        // }
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
                        labelText="Tên tài khoản"
                        id="first"
                        formControlProps={{
                            fullWidth: true,
                        }}
                        inputProps={{
                            ...register("username"),
                            type: "text",
                        }}
                    />
                    <CustomInput
                        labelText="Mật khẩu"
                        id="pass"
                        formControlProps={{
                            fullWidth: true,
                        }}
                        inputProps={{
                            ...register("password"),
                            type: "password",
                            autoComplete: "off",
                        }}
                    />

                    <CustomInput
                        labelText="Tên bác sĩ"
                        id="first"
                        formControlProps={{
                            fullWidth: true,
                        }}
                        inputProps={{
                            ...register("fullName"),
                            type: "text",
                        }}
                    />
                    <CustomInput
                        labelText="Email"
                        id="first"
                        formControlProps={{
                            fullWidth: true,
                        }}
                        inputProps={{
                            ...register("email"),
                            type: "email",
                        }}
                    />
                    <CustomInput
                        labelText="Số điện thoại"
                        id="first"
                        formControlProps={{
                            fullWidth: true,
                        }}
                        inputProps={{
                            ...register("phone"),
                            type: "number",
                        }}
                    />
                    <CustomInput
                        labelText="Giới tính"
                        id="first"
                        formControlProps={{
                            fullWidth: true,
                        }}
                        inputProps={{
                            ...register("gender"),
                            type: "number",
                        }}
                    />
                    <CustomInput
                        labelText="Trình độ học vấn"
                        id="first"
                        formControlProps={{
                            fullWidth: true,
                        }}
                        inputProps={{
                            ...register("workExperience"),
                            type: "text",
                        }}
                    />
                    <CustomInput
                        labelText="Hình ảnh"
                        id="first"
                        formControlProps={{
                            fullWidth: true,
                        }}
                        inputProps={{
                            ...register("photo"),
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
export default FormDetailStaff;
