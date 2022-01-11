import React from "react";
import { Grid, Button } from "@material-ui/core";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import { useForm } from "react-hook-form";
import CustomInput from "../../components/CustomInput/CustomInput";
import * as UI from "../../redux/reducer/UiSlider";
import { useDispatch, useSelector } from "react-redux";
import * as BookingService from "../../services/BookingService";
import * as TimeService from "../../services/TimeService";
import * as toastHelper from "../../common/toastHelper";
import * as timeSlice from "../../redux/reducer/TimeSlide";
import Danger from "../../components/Typography/Danger";
import CustomSelect from "../../components/CustomInput/CustomSelect";
import moment from "moment";
//------------------------------------------------------

function BookingForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("userLogin"));
  const bookingData = useSelector((state) => state.time.dataBooking);
  const service = useSelector((state) => state.service.value);
  const onCancel = () => {
    dispatch(UI.closeModal());
  };
  const onSubmit = (value) => {
    const data = {
      customer: {
        id: user.id,
        fullName: value.fullName,
        email: value.email,
        phone: value.phone,
      },
      staff: {
        id: bookingData.staff,
      },
      serviceCustomer: {
        id: value.service,
      },

      timeEnd: bookingData.time.endTime,
      timeStart: bookingData.time.startTime,
      dateBooking: moment(bookingData.date).format("DD/MM/YYYY"),
      note: value.note,
    };
    console.log(bookingData.time);
    BookingService.booking(data)
      .then((response) => {
        console.log(response.data);
        toastHelper.toastSuccess("Đặt lịch thành công");
      })
      .catch((err) => {
        console.log(err);
        toastHelper.toastError("Đã có lỗi sảy ra...");
      });
    const timedData = {
      id: bookingData.time.id,
      endTime: bookingData.time.endTime,
      startTime: bookingData.time.startTime,
      status: 0,
      weekSchedule: bookingData.time.weekSchedule,
    };
    const e = {
      STAFF_ID: bookingData.staff,
      STATUS: 1,
      DAY: moment(bookingData.date).format("dddd"),
    };
    console.log(timedData);
    TimeService.updateTime(timedData).then((response) => {
      dispatch(UI.closeModal());
      dispatch(timeSlice.getDayByDoctor(e));
    });
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardBody>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CustomInput
                labelText="Họ và tên"
                id="1"
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
                id="2"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  ...register("email"),
                  type: "text",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput
                labelText="Số điện thoại"
                id="3"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  ...register("phone"),
                  type: "number",
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <CustomInput
                labelText="Lí do đến khám"
                id="4"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  ...register("note"),
                  type: "text",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomSelect
                labelText="Dịch vụ..."
                id="3"
                formControlProps={{
                  fullWidth: true,
                }}
                listItem={service}
                inputProps={{
                  ...register("service"),
                  type: "time",
                }}
              />
            </Grid>
          </Grid>
        </CardBody>
        <CardFooter>
          <Button type="submit"> ĐẶT LỊCH</Button>
          <Button onClick={onCancel}>
            <Danger>TRỞ VỀ</Danger>
          </Button>
        </CardFooter>
      </form>
    </React.Fragment>
  );
}

export default BookingForm;
