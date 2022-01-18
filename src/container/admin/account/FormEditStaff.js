import React from "react";
// @material-ui/core components
import { useForm } from "react-hook-form";
// core components
import Button from "../../../components/CustomButtons/Button.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardFooter from "../../../components/Card/CardFooter.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";
import CustomSelect from "../../../components/CustomInput/CustomSelect";
import * as AccountService from "../../../services/AccountService";
import * as toastHelper from "../../../common/toastHelper";
import * as UI from "../../../redux/reducer/UiSlider";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

export default function FormEditStaff(props) {
  const { listStaff, setListStaff, status } = props;
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.doctor.dataMapping);

  const defaultValues = {
    id: detail.id,
    workExperience: detail.workExperience,
    description: detail.description,
    academicLevel: detail.academicLevel,
    dateStartWork: detail.dateStartWork,
    gender: detail.gender,
    fullName: detail.fullName,
    email: detail.email,
    phone: detail.phoneNumber,
    photo: detail.photo,
  };
  const { register, handleSubmit } = useForm({ defaultValues });

  const onSubmit = (data) => {
    if (status == 3) {
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
    } else {
      AccountService.insertDoctor(data)
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
    }
  };
  const onCancel = () => {
    dispatch(UI.closeModal());
  };
  const gender = [
    { id: 1, name: "Nam" },
    { id: 0, name: "Nữ" },
  ];
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardBody>
          <input {...register("id")} type="hidden" />
          <Grid container spacing={2}>
            {detail.id == "" || detail.id == null ? (
              <Grid item xs={12} md={6}>
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
              </Grid>
            ) : null}
            {detail.id == "" || detail.id == null ? (
              <Grid item xs={12} md={6}>
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
              </Grid>
            ) : null}
            <Grid item xs={12} md={6}>
              <CustomInput
                labelText="Họ và tên "
                id="first"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  ...register("fullName"),
                  type: "text",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
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
            </Grid>
            <Grid item xs={12} md={6}>
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
            </Grid>
            {status == 3 ? null : (
              <Grid item xs={12} md={6}>
                <CustomInput
                  labelText="Khinh nghiệm"
                  id="first"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    ...register("workExperience"),
                    type: "text",
                  }}
                />
              </Grid>
            )}
            {status == 3 ? null : (
              <Grid item xs={12} md={6}>
                <CustomInput
                  labelText="Trình độ học vấn"
                  id="first"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    ...register("academicLevel"),
                    type: "text",
                  }}
                />
              </Grid>
            )}
            <Grid item xs={12} md={6}>
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
            </Grid>
            {status == 3 ? null : (
              <Grid item xs={12}>
                <CustomInput
                  labelText="Mô tả"
                  id="first"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  listItem={gender}
                  inputProps={{
                    ...register("description"),
                    type: "tex",
                  }}
                />
              </Grid>
            )}
            <Grid item xs={12} md={6}>
              <CustomSelect
                labelText="Giới tính"
                id="first"
                formControlProps={{
                  fullWidth: true,
                }}
                listItem={gender}
                inputProps={{
                  ...register("gender"),               
                  type: "number",
                }}
              />
            </Grid>
          </Grid>
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
