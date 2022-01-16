import React, { useEffect } from "react";
// @material-ui/core components
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Input } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
// core components
import Button from "../../../components/CustomButtons/Button.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardFooter from "../../../components/Card/CardFooter.js";
import * as DoctorSlide from "../../../redux/reducer/DoctorSlide";
import * as ServiceSlide from "../../../redux/reducer/ServiceCustomerSlide";
import * as timeSlice from "../../../redux/reducer/TimeSlide";
import * as toastHelper from "../../../common/toastHelper";
import * as UI from "../../../redux/reducer/UiSlider";
import * as bookingDetailService from "../../../services/BookingDetailService";
import moment from "moment";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
const useStyles = makeStyles((theme) => ({
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
    margin: theme.spacing(1),
    minWidth: 220,
    position: "relative",
    "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
      color: "#495057",
    },
  },
  formInput: {
    margin: "0 0 17px 0",
    paddingTop: "11px",
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
function EditForm(props) {
  const detail = useSelector((state) => state.booking.dataMapping);
  const { list, setList } = props;
  const dispatch = useDispatch();
  const classes = useStyles();
  const toDate = (dateStr) => {
    const [day, month, year] = dateStr.split("-");
    return new Date(year, month - 1, day);
  };
  const role = {
    ROLE: "DOCTOR",
  };
  const data = {
    STAFF_ID: detail.staff.id,
    STATUS: 1,
    DAY: moment(toDate(detail.dateBooking)).format("dddd"),
  };
  useEffect(() => {
    dispatch(DoctorSlide.findByRole(role));
    dispatch(ServiceSlide.getListServiceCustomer());
    dispatch(timeSlice.getDayByDoctor(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const doctors = useSelector((state) => state.doctor.data);
  const services = useSelector((state) => state.service.value);
  const Times = useSelector((state) => state.time.days);
  const [selectDoctor, setSelectDoctor] = React.useState(detail.staff.id);
  const [serviceCustomer, setServiceCustomer] = React.useState(
    detail.serviceCustomer.id
  );

  const [date, setDate] = React.useState(toDate(detail.dateBooking));
  const [time, setTime] = React.useState(detail.dayScheduleId);
  const defaultValues = {
    id: detail.id,
    fullName: detail.fullName,
    email: detail.email,
    phone: detail.phone,
    timeStart: detail.timeStart,
    timeEnd: detail.timeEnd,
    dateBooking: detail.dateBooking,
    note: detail.note,
    status: detail.status,
    serviceCustomer: { id: detail.serviceCustomer.id },
    staff: { id: detail.staff.id },
    booking: detail.booking,
    dayScheduleId: detail.dayScheduleId,
  };
  const { register, handleSubmit, setValue } = useForm({ defaultValues });

  const onSubmit = (data) => {
    const value = {
      id: detail.id,
      fullName: detail.fullName,
      email: detail.email,
      phone: detail.phone,
      timeStart: data.timeStart,
      timeEnd: data.timeEnd,
      dateBooking: moment(date).format("DD-MM-YYYY"),
      note: detail.note,
      status: detail.status,
      serviceCustomer: { id: serviceCustomer },
      staff: { id: selectDoctor },
      booking: detail.booking,
      dayScheduleId: data.dayScheduleId,
    };
    console.log(`${moment(date).format("DD-MM-YYYY")}`);
    bookingDetailService
      .updateBookingDetail(value)
      .then((response) => {
        console.log(response);
        const newList = list.map((value, index) => {
          if (value.id === data.id) {
            return response.data;
          } else {
            return value;
          }
        });
        setList(newList);
        dispatch(UI.closeModal());
        toastHelper.toastSuccess("Chỉnh sửa thành công...");
      })
      .catch((err) => {
        toastHelper.toastError("Đã có lỗi sảy ra..." + err.message);
        console.log(err.message);
      });
  };
  const onCancel = () => {
    dispatch(UI.closeModal());
  };
  function handleSelect(event) {
    setSelectDoctor(event.target.value);
    setValue(
      "staff",
      { id: event.target.value },
      {
        shouldValidate: true,
        shouldDirty: true,
      }
    );
    setTime("");
    setDate(null);
  }
  function handleSelectService(event) {
    setServiceCustomer(event.target.value);
    setValue("serviceCustomer", event.target.value, {
      shouldValidate: true,
      shouldDirty: true,
    });
  }
  const changeDate = (date) => {
    const body = {
      STAFF_ID: selectDoctor,
      STATUS: 1,
      DAY: moment(date).format("dddd"),
    };
    setValue("dateBooking", moment(date).format("DD/MM/YYYY"));
    setDate(date);
    dispatch(timeSlice.getDayByDoctor(body));
  };
  const handleSelectTime = (time) => {
    setTime(time.id);
    setValue("timeStart", time.startTime, {
      shouldValidate: true,
      shouldDirty: true,
    });
    setValue("timeEnd", time.endTime, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("id")} type="hidden" />
        <CardBody>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormControl className={`col-12 ` + classes.formControl}>
                <InputLabel id="select-label" className={classes.labelRoot}>
                  Bác sĩ
                </InputLabel>
                <Select
                  labelId="select-label"
                  id="simple-select"
                  className={classes.select}
                  {...register("staff")}
                  value={selectDoctor}
                  onChange={handleSelect}
                >
                  {doctors != null
                    ? doctors.map((doctor) => {
                        return (
                          <MenuItem value={doctor.id}>
                            {doctor.fullName}
                          </MenuItem>
                        );
                      })
                    : null}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl className={`col-12`}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    className={classes.select}
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Ngày khám"
                    value={date}
                    onChange={changeDate}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl className={`col-12 ` + classes.formControl}>
                <InputLabel id="select-label-2" className={classes.labelRoot}>
                  Giờ còn trống
                </InputLabel>
                <Select
                  labelId="select-label-2"
                  id="simple-select-2"
                  className={classes.select}
                  {...register("dayScheduleId")}
                  value={time}
                  //onChange={handleSelectTime}
                >
                  {Times != null
                    ? Times.map((time) => {
                        return (
                          <MenuItem
                            value={time.id}
                            onClick={() => {
                              handleSelectTime(time);
                            }}
                          >
                            {`${time.startTime} - ${time.endTime}`}
                          </MenuItem>
                        );
                      })
                    : null}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl className={`col-12 ` + classes.formControl}>
                <InputLabel id="select-label-2" className={classes.labelRoot}>
                  Dịch vụ
                </InputLabel>
                <Select
                  labelId="select-label-2"
                  id="simple-select-2"
                  className={classes.select}
                  {...register("serviceCustomer")}
                  value={serviceCustomer}
                  onChange={handleSelectService}
                >
                  {services != null
                    ? services.map((s) => {
                        return <MenuItem value={s.id}>{s.name}</MenuItem>;
                      })
                    : null}
                </Select>
              </FormControl>
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
export default EditForm;
