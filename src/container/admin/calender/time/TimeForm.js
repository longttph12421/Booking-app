import React from "react";
import { useForm } from "react-hook-form";
import { Grid } from "@material-ui/core";
import CardBody from "../../../../components/Card/CardBody.js";
import CardFooter from "../../../../components/Card/CardFooter.js";
import CustomInput from "../../../../components/CustomInput/CustomInput";
import CustomSelect from "../../../../components/CustomInput/CustomSelect";
import Button from "../../../../components/CustomButtons/Button";
import Danger from "../../../../components/Typography/Danger";
import * as UI from "../../../../redux/reducer/UiSlider";
import * as service from "../../../../services/TimeService";
import * as toastHelper from "../../../../common/toastHelper";
import { useDispatch } from "react-redux";

function TimeForm({ setTime, match, time }) {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onCancel = () => {
    dispatch(UI.closeModal());
  };

  const onSubmit = (value) => {
   
    const data = {
      id: value.id,
      startTime: value.startTime,
      endTime: value.endTime,
      status: value.status,
      weekSchedule: { id: Number(match.params.id) },
    };
    service
      .savaTime(data)
      .then((response) => {
        const newList = [];
        time.map((t) => {
          newList.push(t);
        });
        newList.push(response.data);
        setTime(newList);
        toastHelper.toastSuccess("Thêm mới thành công...");
        dispatch(UI.closeModal());
      })
      .catch((error) => {
        toastHelper.toastError("Đã có lỗi sảy ra...");
      });
  };
  const status = [
    { id: 0, name: "Vô hiệu hóa" },
    { id: 1, name: "Hoạt động" },
  ];
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardBody>
          <input type="hidden" {...register("id")} />
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CustomInput
                labelText="Giờ bắt đầu..."
                id="3"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  ...register("startTime"),
                  type: "text",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput
                labelText="Giờ kết thúc..."
                id="3"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  ...register("endTime"),
                  type: "text",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomSelect
                labelText="Trạng thái..."
                id="3"
                formControlProps={{
                  fullWidth: true,
                }}
                listItem={status}
                inputProps={{
                  ...register("status"),
                  type: "number",
                }}
              />
            </Grid>
          </Grid>
        </CardBody>
        <CardFooter>
          <Button type="submit" color="transparent">
            LƯU
          </Button>
          <Button onClick={onCancel} color="transparent">
            <Danger>TRỞ VỀ</Danger>
          </Button>
        </CardFooter>
      </form>
    </div>
  );
}

export default TimeForm;
