import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
function Index() {
  const classes = useStyles();
  return (
    <div className={classes}>
      <Navbar />
    </div>
  );
}

export default Index;
