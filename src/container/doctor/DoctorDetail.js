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
                  Xem thêm
                </Link>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={8}>
            <Select className="col-md-3" value={date} onChange={handleChange}>
              <MenuItem value={2}>Thứ 2 - 25/10</MenuItem>
              <MenuItem value={3}>Thứ 3 - 26/10</MenuItem>
              <MenuItem value={4}>Thứ 4 - 27/10</MenuItem>
            </Select>

            <div>
              <h5 className="mt-3">
                <EventNoteIcon />
                LỊCH KHÁM
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
              Chọn <ArrowUpwardIcon size="sm" /> và đặt (miễn phí)
            </div>
            <hr />
            <div>{doctor.title}</div>
            <div>{doctor.name}</div>
            <div>{doctor.address}</div>
            <div>
              Giá Khám: {doctor.price}.{" "}
              <Link
                component="button"
                variant="body2"
                onClick={() => {
                  console.info("I'm a button.");
                }}
              >
                Xem thêm
              </Link>
            </div>
            <div>
              Loại Bảo Hiểm áp dụng.
              <Link
                component="button"
                variant="body2"
                onClick={() => {
                  console.info("I'm a button.");
                }}
              >
                Xem thêm
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
              Phó giáo sư, Tiến sĩ, Bác sĩ cao cấp chuyên khoa Da liễu
            </span>
          </li>
          <li>
            <span>Tốt nghiệp Đại học Y Hà Nội (1977)</span>
          </li>
          <li>
            <span>Giảng viên bộ môn Da liễu tại Đại Học Y Hà Nội</span>
          </li>
          <li>
            <span>
              Nguyên Trưởng phòng chỉ đạo tuyến tại Bệnh viện Da liễu Trung ương
            </span>
          </li>
          <li>
            <span>
              Đạt chứng chỉ Diploma về Da liễu tại Viện da liễu Băng Cốc - Thái
              Lan
            </span>
          </li>
          <li>
            <span>
              Bác sĩ thường xuyên tham gia các Hội thảo, Hội nghị Quốc tế về Da
              liễu
            </span>
          </li>
          <li>
            <span>Tổng thư ký hội Da liễu Việt Nam</span>
          </li>
          <li>
            <span>Hội viên của Hội Da liễu Đông Nam Á, Châu Á và Thế giới</span>
          </li>
        </ul>
      </Box>
    </div>
  );
}
export default DoctorDetail;
