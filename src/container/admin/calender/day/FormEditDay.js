import React from "react";
import { useForm } from "react-hook-form";
import { Grid } from "@material-ui/core";
import CardBody from "../../../../components/Card/CardBody.js";
import CardFooter from "../../../../components/Card/CardFooter.js";
import CustomSelect from "../../../../components/CustomInput/CustomSelect";
import Button from "../../../../components/CustomButtons/Button";
import Danger from "../../../../components/Typography/Danger";
import * as UI from "../../../../redux/reducer/UiSlider";
import * as service from "../../../../services/TimeService";
import * as toastHelper from "../../../../common/toastHelper";
import { useDispatch, useSelector } from "react-redux";

function FormEditDay({ setDays, match, days }) {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onCancel = () => {
    dispatch(UI.closeModal());
  };

  const onSubmit = (value) => {
    const data = {
      id: value.id,
      dayOfWeek: value.dayOfWeek,
      status: value.status,
      staff: { id: Number(match.params.id) },
    };
    service
      .saveDayByDoctor(data)
      .then((response) => {
        const newList = [];
        days.map((day) => {
          newList.push(day);
        });
        newList.push(response.data);
        setDays(newList);
        toastHelper.toastSuccess("Thêm mới thành công...");
        dispatch(UI.closeModal());
      })
      .catch((error) => {
        toastHelper.toastError("Đã có lỗi sảy ra...");
      });
  };
  const DayOfWeek = [
    { id: "Monday", name: "Monday" },
    { id: "Tuesday", name: "Tuesday" },
    { id: "Wednesday", name: "Wednesday" },
    { id: "Thursday", name: "Thursday" },
    { id: "Friday", name: "Friday" },
    { id: "Saturday", name: "Saturday" },
    { id: "Sunday", name: "Sunday" },
  ];
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
              <CustomSelect
                labelText="Ngày trong tuần..."
                id="3"
                formControlProps={{
                  fullWidth: true,
                }}
                listItem={DayOfWeek}
                inputProps={{
                  ...register("dayOfWeek"),
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

export default FormEditDay;
