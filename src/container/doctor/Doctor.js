import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAll } from "../../redux/reducer/DoctorSlide";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { CssBaseline, Box, Grid } from "@material-ui/core";

// core components
import CustomModal from "../../components/Modal/Modal.js";
import imagesStyles from "../../assets/jss/material-kit-react/imagesStyles.js";
import BookingForm from "./BookingForm";
// sections for this page
const useStyles = makeStyles(imagesStyles);

export default function Doctor(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAll());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const ListDoctor = useSelector((state) => state.doctor.data);
  return (
    <React.Fragment>
      <CssBaseline />
      <CustomModal title="Đặt lịch khám" modalBody={<BookingForm />} />

      <Box
        sx={{
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <Box mt={3} className="d-flex justify-content-center">
              <h3>CHỌN BÁC SĨ</h3>
            </Box>
            {ListDoctor.map((doctor, index) => {
              return (
                <>
                  <hr className="mt-4" />
                  <Grid
                    container
                    columnSpacing={{ xs: 1, sm: 4, md: 3 }}
                    key={index}
                  >
                    <Grid item xs={12} md={4}>
                      <div>
                        <div className="d-flex justify-content-center">
                          <Tooltip title="Đặt lịch hẹn">
                            <IconButton aria-label="Đặt lịch hẹn">
                              <a href={`/doctor/${doctor.id}`}>
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
                              </a>
                            </IconButton>
                          </Tooltip>
                        </div>
                      </div>
                    </Grid>

                    <Grid item xs={12} md={8}>
                      <Box mt={3}>
                        <a
                          href={`/doctor/${doctor.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <h4 className="mt-3">{doctor.fullName}</h4>
                        </a>
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
                  <hr className="mt-4" />
                </>
              );
            })}
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
