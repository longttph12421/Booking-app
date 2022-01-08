import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Box, Select, MenuItem } from "@material-ui/core";
import Button from "../../components/CustomButtons/Button";
import { makeStyles } from "@material-ui/core/styles";
import imagesStyles from "../../assets/jss/material-kit-react/imagesStyles.js";
import CustomModal from "../../components/Modal/Modal.js";
import BookingForm from "./BookingForm";
import moment from "moment";
import EventNoteIcon from "@material-ui/icons/EventNote";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { CssBaseline } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";

//=============================================================
//     API and React redux
//=============================================================
import * as serviceSlide from "../../redux/reducer/ServiceCustomerSlide";
import * as doctorSlice from "../../redux/reducer/DoctorSlide";
import * as timeSlice from "../../redux/reducer/TimeSlide";
import * as UI from "../../redux/reducer/UiSlider.js";
import { addDays } from "date-fns";
//===================================================
const useStyles = makeStyles(imagesStyles);

function DoctorDetail({ match }) {
  var now = new Date(); // Hàm lấy thời gian hôm nay
  var day2 = addDays(now, 1);
  var day3 = addDays(now, 2);
  const classes = useStyles();
  const dispatch = useDispatch();
  const body = {
    STAFF_ID: Number(match.params.id),
    STATUS: 0,
  };
  const modal = useSelector((state) => state.UI.modal);
  const [dayOfWeek, setDayOfWeek] = React.useState();
  const data = {
    STAFF_ID: Number(match.params.id),
    STATUS: 0,
    DAY: moment(now).format("dddd"),
  };
  useEffect(() => {
    dispatch(doctorSlice.findById(match.params.id));
    dispatch(timeSlice.getWeekByDoctor(body));
    dispatch(timeSlice.getDayByDoctor(data));
    dispatch(serviceSlide.getListServiceCustomer());
  },[]);

  function onChangeDay(event) {
    const e = {
      STAFF_ID: Number(match.params.id),
      STATUS: 0,
      DAY: moment(event.target.value).format("dddd"),
    };
    console.log(event.target.value);
    setDayOfWeek(event.target.value);
    dispatch(timeSlice.getDayByDoctor(e));
  }
  function onBook(data) {
    const value = {
      date: dayOfWeek,
      time: data,
      staff: Number(match.params.id),
    };
    console.log(value);
    dispatch(timeSlice.mapDataBooking(value));
    dispatch(UI.openModal());
  }
  const doctor = useSelector((state) => state.doctor.value);
  const Times = useSelector((state) => state.time.days);
  return (
    <React.Fragment>
      <CssBaseline />
      {modal != null ? (
        <CustomModal title="Đặt lịch khám" modalBody={<BookingForm />} />
      ) : null}

      <Box
        sx={{
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Box mt={3} className="d-flex justify-content-center">
          <h3>CHỌN GIỜ KHÁM</h3>
        </Box>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <hr className="mt-4" />
            <Grid container columnSpacing={{ xs: 1, sm: 4, md: 3 }}>
              <Grid item xs={12} md={4}>
                <div>
                  <a href={`/doctor/${doctor.id}`}>
                    <div className="d-flex justify-content-center">
                      <img
                        src={doctor.photo}
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
                  </a>
                  <div className="text-center mt-3">
                    <h5>{doctor.fullName}</h5>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={8}>
                <Grid item xs={12} md={4}>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="select">Chọn ngày khám</InputLabel>
                    <Select
                      fullWidth={true}
                      value={dayOfWeek}
                      onChange={onChangeDay}
                    >
                      <MenuItem value={now}>
                        {moment(now).format("dddd - DD/MM/YYYY")}
                      </MenuItem>
                      <MenuItem value={day2}>
                        {moment(day2).format("dddd - DD/MM/YYYY")}
                      </MenuItem>
                      <MenuItem value={day3}>
                        {moment(day3).format("dddd - DD/MM/YYYY")}
                      </MenuItem>
                    </Select>
                    <FormHelperText>Vui lòng chọn ngày khám</FormHelperText>
                  </FormControl>
                </Grid>
                <div>
                  <h5 className="mt-3">
                    <EventNoteIcon />
                    LỊCH KHÁM
                  </h5>
                </div>
                <Box mt={3}>
                  <Grid container spacing={1}>
                    <Grid item>
                      {Times.map((time) => {
                        return (
                          <Button
                            color="lime"
                            onClick={() => {
                              onBook(time);
                            }}
                          >
                            {`${time.startTime} - ${time.endTime}`}
                          </Button>
                        );
                      })}
                    </Grid>
                  </Grid>
                </Box>
                <div className="mt-3">
                  Chọn <ArrowUpwardIcon size="sm" /> và đặt (miễn phí)
                </div>
              </Grid>
              <hr />
              <Grid item xs={12}>
                <Box mt={3}>
                  <ul>
                    <li>
                      <span>{doctor.description}</span>
                    </li>
                    <li>
                      <span>{doctor.academicLevel}</span>
                    </li>
                    <li>
                      <span>{doctor.workExperience}</span>
                    </li>
                  </ul>
                </Box>
              </Grid>
            </Grid>
            <hr />
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
export default DoctorDetail;
