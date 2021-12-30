import "date-fns";
import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const DateTime = ({
  label,
  input,
  fullWidth,
  inputProps,
}) => {
  return (
<MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label={label}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          {...inputProps}
        />
        </Grid>
    </MuiPickersUtilsProvider>
  );
};
export default DateTime;
