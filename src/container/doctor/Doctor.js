import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAll } from "../../redux/reducer/DoctorSlide";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import EventNoteIcon from "@material-ui/icons/EventNote";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { MenuItem, Select, CssBaseline, Box, Grid } from "@material-ui/core";

// core components
import CustomModal from "../../components/Modal/Modal.js";
import Button from "../../components/CustomButtons/Button.js";
import Muted from "../../components/Typography/Muted.js";
import imagesStyles from "../../assets/jss/material-kit-react/imagesStyles.js";
import { openModal } from "../../redux/reducer/UiSlider.js";
import BookingForm from "../bookingForm/BookingForm";
import { Link } from "react-router-dom";
// sections for this page
const useStyles = makeStyles(imagesStyles);

export default function Doctor(props) {
  const classes = useStyles();
  const [calendar, setCalendar] = React.useState("2");
  const handleChange = (event) => {
    setCalendar(event.target.value);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAll());
  }, []);

  
  const onOpenModal = () => {
    dispatch(openModal());
  };
  const ListDoctor = useSelector((state) => state.doctor.data);
  const text = {
    name: "Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng",
    pass: "Nguyên Trưởng khoa Cơ xương khớp, Bệnh viện Bạch Mai Chủ tịch Hội Thấp khớp học Việt Nam Bác sĩ khám cho người bệnh từ 14 tuổi trở lên",
    tieude: "ĐỊA CHỈ KHÁM",
    ten: "Phòng khám Chuyên khoa Da Liễu",
    diachi: "207 Phố Huế - Hai Bà Trưng - Hà Nội",
    gia: "250.000 VND  ",
    baoHiem: "Bảo y tế",
  };
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
                        <div className="d-flex justify-content-center">
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
                          <h5>{doctor.fullName}</h5>
                        </div>
                        <div>
                          <Muted>
                            {doctor.description}<br/>
                            <Link to={`/doctor/${doctor.id}`}>Xem thêm </Link>
                          </Muted>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <Select
                        className="col-md-3"
                        value={calendar}
                        onChange={handleChange}
                      >
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
                            <Button color="lime" onClick={onOpenModal}>
                              15:00 - 15:30
                            </Button>
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
                      <div>{text.tieude}</div>
                      <div>{text.ten}</div>
                      <div>{text.diachi}</div>
                      <div>
                        Giá Khám: {text.gia}.<Link>Xem chi tiết</Link>
                      </div>
                      <div>
                        Loại Bảo Hiểm áp dụng.
                        <Link>Xem chi tiết</Link>
                      </div>
                    </Grid>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
