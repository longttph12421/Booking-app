import React from "react";
import {
  Grid,
  Box,
  Select,
  MenuItem,
  Button,
  InputLabel,
  Input,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import CustomInput from "../../components/CustomInput/CustomInput";
import imagesStyles from "../../assets/jss/material-kit-react/imagesStyles.js";
import CustomModal from "../../components/Modal/Modal.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as doctorSlice from "../../redux/reducer/DoctorSlide";
import * as timeSlice from "../../redux/reducer/TimeSlide";
import BookingForm from "../bookingForm/BookingForm";
import * as BookingService from "../../services/BookingService";
import * as serviceSlide from "../../redux/reducer/ServiceCustomerSlide";
import { DateTimeKit } from "../../components/DateTime/DateTimeKit";
import CustomSelect from "../../components/CustomInput/CustomSelect";
import moment from "moment";

const useStyles = makeStyles(imagesStyles);

function DoctorDetail({ match }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  let sevenDaySchedule = [];
  for (let i = 0; i < 7; i++) {
    let date = moment(new Date())
      .add(i, "days")
      .format("dddd - DD/MM/YYYY");

      sevenDaySchedule.push(date);
  }
  console.log(sevenDaySchedule);
  const { register, handleSubmit } = useForm();
  const body = {
    STAFF_ID: Number(match.params.id),
    STATUS: 0,
  };
  useEffect(() => {
    dispatch(doctorSlice.findById(match.params.id));
    dispatch(timeSlice.getWeekByDoctor(body));
    dispatch(serviceSlide.getListServiceCustomer());
  }, []);
  const doctor = useSelector((state) => state.doctor.value);
  const service = useSelector((state) => state.service.value);
  const onSubmit = (value) => {
    const data = {
      customer: {
        id: match.params.id,
      },
      staff: {
        id: match.params.id,
      },
      serviceCustomer: {
        id: 1,
      },
      timeStart: value.timeStart,
      timeEnd: value.timeEnd,
      dateBooking: value.dateBooking,
      note: value.note,
    };
    console.log(data);
    BookingService.booking(data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Box
        sx={{
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <CustomModal title="Đặt lịch khám" modalBody={<BookingForm />} />
        <hr className="mt-4" />
        <Grid container columnSpacing={{ xs: 1, sm: 4, md: 3 }}>
          <Grid item xs={12} md={3}>
            <div>
              <div className="d-flex justify-content-center">
                <img
                  src="https://cdn.bookingcare.vn/fr/w200/2020/03/17/114430-bshung.jpg"
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRoundedCircle +
                    " " +
                    classes.imgFluid
                  }
                />
              </div>
              <div className="text-center mt-3">
                <h5>{doctor.fullName} </h5>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={9}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                  <CustomInput
                    labelText="Ngày khám..."
                    id="1"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      ...register("bookingDate"),
                      type: "date",
                      format: "yyyy-MM-dd",
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <CustomInput
                    labelText="Giờ bắt đầu..."
                    id="2"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      ...register("timeStart"),
                      type: "time",
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <CustomInput
                    labelText="Giờ kết thúc..."
                    id="3"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      ...register("timeEnd"),
                      type: "time",
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <CustomSelect
                    labelText="Dịch vụ..."
                    id="3"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    listItem={sevenDaySchedule}
                    inputProps={{
                      ...register("serviceId"),
                      type: "time",
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={12}>
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
              </Grid>

              <div>
                <Button type="submit"> submit</Button>
              </div>
            </form>
          </Grid>
        </Grid>
      </Box>
      <hr className="mt-4" />
      <Box mt={3}></Box>
    </div>
  );
}
export default DoctorDetail;