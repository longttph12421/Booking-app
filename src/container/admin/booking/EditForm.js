import React from "react";
// @material-ui/core components
import { useForm } from "react-hook-form";
import { Grid } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
// core components
import Button from "../../../components/CustomButtons/Button.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardFooter from "../../../components/Card/CardFooter.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";
import * as Service from "../../../services/ServiceCustomerService";
import * as toastHelper from "../../../common/toastHelper";
import * as UI from "../../../redux/reducer/UiSlider";

import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
function EditForm() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const detail = useSelector((state) => state.service.detail);

  const defaultValues = {
    id: detail.id,
    name: detail.name,
    price: detail.price,
    description: detail.description,
    timeExamination: detail.timeExamination,
  };
  const { register, handleSubmit } = useForm({ defaultValues });

  const onSubmit = (data) => {
    console.log(data);
    toastHelper.toastError("Thêm mới thất bại");
  };
  const onCancel = () => {
    dispatch(UI.closeModal());
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("id")} type="hidden" />
        <CardBody>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormControl className={classes.formControl}>
                <InputLabel id="select-label">Bác sĩ</InputLabel>
                <Select
                  labelId="select-label"
                  id="simple-select"
                  className=""
                  value={defaultValues.name}
                  //onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
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
