import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Box } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  box: {
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 99,
    background: "rgba(0, 0, 0, 0.4)",
  },
  loading: {
    position: "fixed",
    left: 0,
    right: 0,
    marginLeft: "auto",
    marginRight: "auto",
    top: "40%",
    width: 400,
  },
}));

export default function Loading() {
  const classes = useStyles();
  const classicLoading = useSelector((state) => state.UI.loading);
  let loading = null;
  if (classicLoading) {
    loading = (
      <Box sx={{ display: "flex" }} className={classes.box}>
        <CircularProgress className={classes.loading} />
      </Box>
    );
  }
  return loading;
}
