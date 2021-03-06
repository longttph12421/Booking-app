import React from "react";
import Button from "../../components/CustomButtons/Button";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EventNoteIcon from "@material-ui/icons/EventNote";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import imagesStyles from "../../assets/jss/material-kit-react/imagesStyles.js";
import Muted from "../../components/Typography/Muted.js";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import Link from "@material-ui/core/Link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getById } from "../../redux/reducer/DoctorSlide";

const useStyles = makeStyles(imagesStyles);

function DoctorDetail({ match }) {
  const classes = useStyles();
  const [date, setDate] = React.useState("2");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setDate(event.target.value);
  };

  useEffect(() => {
    dispatch(getById(match.params.id));
  }, [match.params.id]);

  const doctor = useSelector((state) => state.doctor.value);

  return (
    <div>
      <Box
        sx={{
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <hr className="mt-4" />
        <Grid container columnSpacing={{ xs: 1, sm: 4, md: 3 }}>
          <Grid item xs={12} md={4}>
            <div>
              <div className="d-flex justify-content-center">
                <img
                  src="https://cdn.bookingcare.vn/fr/w200/2020/03/17/114430-bshung.jpg"
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
              <div className="text-center mt-3">
                <h5>{doctor.name} </h5>
                <Muted>{doctor.detail} </Muted>
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => {
                    console.info("I'm a button.");
                  }}
                >
                  Xem th??m
                </Link>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={8}>
            <Select className="col-md-3" value={date} onChange={handleChange}>
              <MenuItem value={2}>Th??? 2 - 25/10</MenuItem>
              <MenuItem value={3}>Th??? 3 - 26/10</MenuItem>
              <MenuItem value={4}>Th??? 4 - 27/10</MenuItem>
            </Select>

            <div>
              <h5 className="mt-3">
                <EventNoteIcon />
                L???CH KH??M
              </h5>
            </div>
            <Box mt={3}>
              <Grid container spacing={1}>
                <Grid item>
                  <Button color="lime">15:00 - 15:30</Button>
                </Grid>
                <Grid item>
                  <Button color="lime">15:00 - 15:30</Button>
                </Grid>
                <Grid item>
                  <Button color="lime">15:00 - 15:30</Button>
                </Grid>
                <Grid item>
                  <Button color="lime">15:00 - 15:30</Button>
                </Grid>
                <Grid item>
                  <Button color="lime">15:00 - 15:30</Button>
                </Grid>
                <Grid item>
                  <Button color="lime">15:00 - 15:30</Button>
                </Grid>
              </Grid>
            </Box>
            <div className="mt-3">
              Ch???n <ArrowUpwardIcon size="sm" /> v?? ?????t (mi???n ph??)
            </div>
            <hr />
            <div>{doctor.title}</div>
            <div>{doctor.name}</div>
            <div>{doctor.address}</div>
            <div>
              Gi?? Kh??m: {doctor.price}.{" "}
              <Link
                component="button"
                variant="body2"
                onClick={() => {
                  console.info("I'm a button.");
                }}
              >
                Xem th??m
              </Link>
            </div>
            <div>
              Lo???i B???o Hi???m ??p d???ng.
              <Link
                component="button"
                variant="body2"
                onClick={() => {
                  console.info("I'm a button.");
                }}
              >
                Xem th??m
              </Link>
            </div>
          </Grid>
        </Grid>
      </Box>
      <hr className="mt-4" />
      <Box mt={3}>
        <ul>
          <h3>{doctor.name}</h3>
          <li>
            <span>
              Ph?? gi??o s??, Ti???n s??, B??c s?? cao c???p chuy??n khoa Da li???u
            </span>
          </li>
          <li>
            <span>T???t nghi???p ?????i h???c Y H?? N???i (1977)</span>
          </li>
          <li>
            <span>Gi???ng vi??n b??? m??n Da li???u t???i ?????i H???c Y H?? N???i</span>
          </li>
          <li>
            <span>
              Nguy??n Tr?????ng ph??ng ch??? ?????o tuy???n t???i B???nh vi???n Da li???u Trung ????ng
            </span>
          </li>
          <li>
            <span>
              ?????t ch???ng ch??? Diploma v??? Da li???u t???i Vi???n da li???u B??ng C???c - Th??i
              Lan
            </span>
          </li>
          <li>
            <span>
              B??c s?? th?????ng xuy??n tham gia c??c H???i th???o, H???i ngh??? Qu???c t??? v??? Da
              li???u
            </span>
          </li>
          <li>
            <span>T???ng th?? k?? h???i Da li???u Vi???t Nam</span>
          </li>
          <li>
            <span>H???i vi??n c???a H???i Da li???u ????ng Nam ??, Ch??u ?? v?? Th??? gi???i</span>
          </li>
        </ul>
      </Box>
    </div>
  );
}
export default DoctorDetail;
