import React from "react";
//------------------------------------------------------
//  MATERIAL - UI
//------------------------------------------------------
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { reduxForm, Field } from "redux-form";
//------------------------------------------------------
//  COMPONENT
//------------------------------------------------------

import CustomInput from "../../components/CustomInput/CustomInput";
import DateTime from "../../components/DateTime/DateTime";
import constants from "../../configures/constants";
import Container from "@material-ui/core/Container";
import InfoArea from "../../components/InfoArea/InfoArea"

//------------------------------------------------------

function BookingForm() {
  return (
    <React.Fragment>
      <form>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Field
                inputProps={{
                  placeholder: "Họ và tên",
                }}
                formControlProps={{
                  fullWidth: true,
                }}
                name="name"
                component={CustomInput}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Field
                type="number"
                name="price"
                inputProps={{
                  placeholder: "Số điện thoại",
                }}
                formControlProps={{
                  fullWidth: true,
                }}
                component={CustomInput}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Field
                 type="number"
                 name="price"
                 inputProps={{
                   placeholder: "Năm sinh",
                 }}
                 formControlProps={{
                   fullWidth: true,
                 }}
                 component={CustomInput}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Field
                type="number"
                inputProps={{
                  placeholder: "giới tính",
                }}
                formControlProps={{
                  fullWidth: true,
                }}
                name="quantity"
                component={CustomInput}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Field
                name="date"
                inputProps={{
                  placeholder: "Năm sinh",
                }}
                fullWidth={{
                  fullWidth: true,
                }}
                component={DateTime}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Field
                name="ap"
                inputProps={{
                  placeholder: "Lí do đến khám",
                }}
                formControlProps={{
                  fullWidth: true,
                }}
                component={CustomInput}
              />
            </Grid>
          </Grid>
        </Container>
      </form>
    </React.Fragment>
  );
}

BookingForm.propTypes = {
  classes: PropTypes.object,
  initialValues: PropTypes.object,
  submitForm: PropTypes.func,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
};
const withReduxForm = reduxForm({
  form: constants.REDUX_FORM,
});
export default withReduxForm(BookingForm);
