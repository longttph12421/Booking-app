import React from "react";

// material-ui components
import { makeStyles } from "@material-ui/core/styles";

const styles = {
  clearFix: {
    "&:after,&:before": {
      display: "table",
      content: '" "',
    },
    "&:after": {
      clear: "both",
    },
  },
};

const useStyles = makeStyles(styles);

export default function ClearFix() {
  const classes = useStyles();
  return <div className={classes.clearFix} />;
}

ClearFix.propTypes = {};
