import React, { useEffect } from "react";
// @material-ui/core components
import { useForm } from "react-hook-form";
import { Grid } from "@material-ui/core";
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
import * as Service from "../../../services/ServiceCustomerService";
import * as toastHelper from "../../../common/toastHelper";
import * as UI from "../../../redux/reducer/UiSlider";
import { useDispatch, useSelector } from "react-redux";

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
function EditForm(props, state) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const detail = useSelector((state) => state.booking.dataMapping);
  const doctors = useSelector((state) => state.doctor.data);
  const [selectDoctor, setSelectDoctor] = React.useState(detail.staff.id);
  const role = {
    ROLE: "DOCTOR",
  };
  useEffect(() => {
    dispatch(DoctorSlide.findByRole(role));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
    serviceCustomer: detail.serviceCustomer,
    staff: detail.staff,
    booking: detail.booking,
  };
  const { register, handleSubmit } = useForm({ defaultValues });
  const onSubmit = (data) => {
    console.log(defaultValues);
    toastHelper.toastError("Thêm mới thất bại");
  };
  const onCancel = () => {
    dispatch(UI.closeModal());
  };
  function handleSelect(event) {
    setSelectDoctor(event.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("id")} type="hidden" />
        <CardBody>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
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

            <Grid item xs={12} md={4}>
              <FormControl className={`col-12 ` + classes.formControl}>
                <InputLabel id="select-label-2" className={classes.labelRoot}>
                  Giờ còn trống
                </InputLabel>
                <Select
                  labelId="select-label-2"
                  id="simple-select-2"
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
