import styles from "../../assets/jss/material-kit-react/views/profilePage.js";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../../components/CustomButtons/Button"
import Grid from "@material-ui/core/Grid";
import { Divider } from "@material-ui/core";
const useStyles = makeStyles({
  imageradios: {
    margin: "0px",
    padding: "15px",
    paddingRight: "15px",
    borderRadius: "50%",
    height: "200px",
    width: "200px",
  },
  icon: {
    margin: "4px",
  },
  datlichkham: {
    display: "block",
    width: "100%",
  },
  chongio: {
    padding: "10px 10px 10px 10px",
    margin: "5px 0px 0px 20px",
    background: "#d7e360",
  },
  chititet: {
    textDecoration: "none",
  },
  huongdan: {
    margin: "12px 0 0 20px",
  },
  texta: {
    margin: "18px",
    padding: "0px",
    fontSize: "20px",
    color: "#333",
  },
  texta3: {
    margin: "25px 0 0 20px",
    padding: "0px",
    fontSize: "20px",
    color: "#333",
  },
  texta1: {
    fontSize: "18px",
    color: "#333",
    margin: "20px",
    padding: "0px",
  },
  detail: {
    margin: "25px 0 0 5px",
  },
  texta2: {
    padding: "5px",
  },
  selectTime: {
    color: "#666",
    margin: "12px 0 0 20px",
  },

  lichkham: {
    fontSize: "20px",
    color: "#333",
    margin: "0 0 5px 0",
    padding: "15px",
  },
  select: {
    borderRadius: "0px",
    BorderBottom: "1px solid #999",
    background: "transparent",
    color: "#337ab7",
    padding: "3px",
  },
});
function DoctorDetail() {
  const classes = useStyles();

  const doctor = {
    name: "Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng",
    pass: "Nguyên Trưởng phòng chỉ đạo tuyến tại Bệnh viện Da liễu Trung ương  ",
    tieude: "ĐỊA CHỈ KHÁM",
    ten: "Phòng khám Chuyên khoa Da Liễu",
    diachi: "207 Phố Huế - Hai Bà Trưng - Hà Nội",
    gia: "250.000 VND  ",
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={2}>
          <img
            src="https://cdn.bookingcare.vn/fr/w200/2020/03/17/114430-bshung.jpg"
            alt="..."
            className={classes.imageradios}
          />
        </Grid>
        <Grid item xs={7}>
          <div className={classes.texta}>{doctor.name}</div>
          <div className={classes.text}>{doctor.pass}</div>
        </Grid>
      </Grid>
      <div className={classes.selectTime}>
        <p>
          <select className={classes.select}>
            <option>Thứ 2 - 25/10</option>
            <option>Thứ 3 - 26/10</option>
            <option>Thứ 4 - 27/10</option>
          </select>
        </p>
      </div>
      <Grid container>
        <Grid item xs={6}>
          <h3 className={classes.lichkham}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className={classes.icon}
              viewBox="0 0 16 16"
            >
              <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
            </svg>
            Lịch Khám
          </h3>
          <div className={classes.datlichkham}>
            <Button className={classes.chongio}>15:00 - 15:30</Button>
            <Button className={classes.chongio}>15:00 - 15:30</Button>
            <Button className={classes.chongio}>15:00 - 15:30</Button>
            <Button className={classes.chongio}>15:00 - 15:30</Button>
            <Button className={classes.chongio}>15:00 - 15:30</Button>
            <Button className={classes.chongio}>15:00 - 15:30</Button>
            <Button className={classes.chongio}>15:00 - 15:30</Button>
            <Button className={classes.chongio}>15:00 - 15:30</Button>
          </div>
          <div className={classes.huongdan}>
            Chọn
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-up"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
              />
            </svg>
            và đặt (miễn phí)
          </div>
        </Grid>

        <Grid item xs={6}>
          <div className={classes.texta1}>{doctor.tieude}</div>
          <div className={classes.texta}>{doctor.ten}</div>
          <div className={classes.text}>{doctor.diachi}</div>
          <div className={classes.text}>
            Giá Khám: {doctor.gia}.
            <a href="" className={classes.chititet}>
              {" "}
              Xem chi tiết
            </a>
          </div>
        </Grid>
      </Grid>
      <hr />
      <h2 className={classes.texta3}>{doctor.name}</h2>
      <ul className={classes.detail}>
        <li>
          <span>Phó giáo sư, Tiến sĩ, Bác sĩ cao cấp chuyên khoa Da liễu</span>
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
    </div>
  );
}
export default DoctorDetail;
