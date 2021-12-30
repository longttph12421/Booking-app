import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAll } from "../../redux/reducer/DoctorSlide";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import EventNoteIcon from "@material-ui/icons/EventNote";
import Button from "../../components/CustomButtons/Button";
import { CssBaseline, Box, Grid } from "@material-ui/core";

// core components
import Muted from "../../components/Typography/Muted.js";
import imagesStyles from "../../assets/jss/material-kit-react/imagesStyles.js";

const useStyles = makeStyles(imagesStyles);

export default function Doctor(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAll());
  }, []);

  const ListDoctor = useSelector((state) => state.doctor.data);
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
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
                        <a href={`/doctor/${doctor.id}`}>
                          <div className="d-flex justify-content-center mt-3">
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
                          </div>
                        </a>
                        <div className="text-center mt-3">
                          <h3>{doctor.fullName}</h3>
                        </div>
                        <div className="text-center mt-3">
                          <Muted>
                            <Button
                              href={`/doctor/${doctor.id}`}
                              size="sm"
                              color="lime"
                            >
                              ĐẶT LỊCH
                            </Button>
                          </Muted>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <div>
                        <h5 className="mt-3">
                          <EventNoteIcon />
                          KINH NGHIỆM LÀM VIỆC
                        </h5>
                      </div>
                      <Box mt={3}>
                        <Muted>
                          <ul>
                            <li>
                              <span>Giáo sư tiến sĩ {doctor.fullName}</span>
                            </li>
                            <li>
                              <span>{doctor.academicLevel}</span>
                            </li>
                            <li>
                              <span>{doctor.workExperience}</span>
                            </li>
                            <li>
                              <span>{doctor.description}</span>
                            </li>                       
                          </ul>
                        </Muted>
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
