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
import FormControl from "@material-ui/core/FormControl";
import { format } from "date-fns";

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
const styleSelect = makeStyles((theme) => ({
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    color: "#495057",
    height: "unset",
    "&,&::placeholder": {
      fontSize: "14px",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "400",
      lineHeight: "1.42857",
      opacity: "1",
    },
    "&::placeholder": {
      color: "#AAAAAA",
    },
  },
  formControl: {
    //margin: theme.spacing(1),
    minWidth: 200,
    position: "relative",
    "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
      color: "#495057",
    },
  },
  labelRoot: {
    color: "#AAAAAA !important",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "1.42857",
    letterSpacing: "unset",
    "& + $underline": {
      marginTop: "0px",
    },
  },
}));

function DoctorDetail({ match }) {
  var now = new Date(); // Hàm lấy thời gian hôm nay
  var day2 = addDays(now, 1);
  var day3 = addDays(now, 2);
  const classes = useStyles();
  const classSelect = styleSelect();
  const dispatch = useDispatch();
  const body = {
    STAFF_ID: Number(match.params.id),
    STATUS: 1,
  };
  const modal = useSelector((state) => state.UI.modal);
  const [dayOfWeek, setDayOfWeek] = React.useState(
    moment(now).format("DD/MM/YYYY")
  );
  const data = {
    STAFF_ID: Number(match.params.id),
    STATUS: 1,
    DAY: moment(now).format("dddd"),
  };
  useEffect(() => {
    dispatch(doctorSlice.findById(match.params.id));
    dispatch(timeSlice.getWeekByDoctor(body));
    dispatch(timeSlice.getDayByDoctor(data));
    dispatch(serviceSlide.getListServiceCustomer());
  }, []);

  const toDate = (dateStr) => {
    const [day, month, year] = dateStr.split("-");
    return new Date(year, month - 1, day);
  };
  function onChangeDay(event) {
    let day = toDate(event.target.value);
    let e = {
      STAFF_ID: Number(match.params.id),
      STATUS: 1,
      DAY: moment(day).format("dddd"),
    };
    setDayOfWeek(event.target.value);
    dispatch(timeSlice.getDayByDoctor(e));
  }
  function onBook(data) {
    const value = {
      date: dayOfWeek,
      time: data,
      staff: Number(match.params.id),
    };
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
                  <FormControl className={classSelect.formControl}>
                    <InputLabel className={classSelect.labelRoot} id="select">
                      Chọn ngày khám
                    </InputLabel>
                    <Select
                      className={classSelect.select}
                      value={dayOfWeek}
                      onChange={onChangeDay}
                    >
                      <MenuItem value={moment(now).format("DD-MM-YYYY")}>
                        {moment(now).format("dddd - DD/MM/YYYY")}
                      </MenuItem>
                      <MenuItem value={moment(day2).format("DD-MM-YYYY")}>
                        {moment(day2).format("dddd - DD/MM/YYYY")}
                      </MenuItem>
                      <MenuItem value={moment(day3).format("DD-MM-YYYY")}>
                        {moment(day3).format("dddd - DD/MM/YYYY")}
                      </MenuItem>
                    </Select>
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
