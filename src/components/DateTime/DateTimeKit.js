import Datetime from "react-datetime";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import javascriptStyles from "../../assets/jss/material-kit-react/views/componentsSections/javascriptStyles";
const useStyles = makeStyles(javascriptStyles);
export  const DateTimeKit = () => {
  const classes = useStyles();
  return (
    <div>
      <InputLabel className={classes.label}>Datetime Picker</InputLabel>
      <br />
      <FormControl fullWidth>
        <Datetime inputProps={{ placeholder: "Datetime Picker Here" }} />
      </FormControl>
    </div>
  );
};
