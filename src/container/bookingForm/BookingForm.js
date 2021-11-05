import { makeStyles } from "@material-ui/core/styles";
import Button from "../../components/CustomButtons/Button"
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
//import Modal
const useStyles = makeStyles( (theme) =>({
    
    imageradios: {
        margin: "0px",
        marginLeft: "25px",
        padding: "15px",
        paddingRight: "15px",
        borderRadius: "50%",
        height: "150px",
        width: "150px",
    },
    bacsi:{
        marginTop:"10px",
    },
    textTitle:{
        fontSize:"20px",
    },
    textName:{
        fontSize:"18px",
        color:"blue",
    },
    root: {
        '& > *': {
          margin: theme.spacing(2),
          width: '70ch',
        },
      },
      giakham:{
          width:" 50%",
          border:"1px solid #f89008",
          display:"inline-block",
          margin:"9px 5px",
          padding:"10px",
          textAlign:"center",
          borderRadius:"3px",
      },
      dauVaoText:{
          display:"block",
          width:"100%",
      },
      oNhapText:{
          display:"inline-block",
          padding:"10px",
          border:"1px solid #000000", 
          borderRadius:"3px",
          width:"100%",          
      },
      inputText:{
          border:"none",
          width:"100%",
          padding:"0",
          outline:"none",
          boxSizing:"border-box",
      },
      errorTen:{
          color:"red",
      },
      btn:{
          width:"100%",
        display: "block",
        padding: "6px 12px",
        textAlign:"center",
        borderRadius:"4px",
        background: "#006e6f",
        color: "#fff",
        border: "1px solid transparent",
      }
}))

function BookingForm() {

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
                <Grid container direction="row">
                    <Grid item xs={2}>
                        <img
                            src="https://cdn.bookingcare.vn/fr/w200/2020/03/17/114430-bshung.jpg"
                            alt="..."
                            className={classes.imageradios}
                        />
                    </Grid>
                    <Grid item xs={7} className={classes.bacsi}>
                        <div className={classes.textTitle}>ĐẶT LỊCH KHÁM</div>
                        <div className={classes.textName}>{doctor.name}</div>
                        <div >15:00 - 15:30 - Thứ 3 - 02/11/2021</div>
                        <div >Miễn phí đặt lịch</div>
                    </Grid>
                </Grid>

                <Grid container item xs={12} justifyContent="center">
                    <form className={classes.root} >
                        <TextField id="outlined-basic" label="Test Lỗi" variant="outlined" />
                        
                        <div style={{display:"block"}}>
                            <label className={classes.giakham}>
                                <input type="radio" checked="checked" name="price" value={doctor.gia}/>
                                <span>Giá khám</span>
                                <div>{doctor.gia}</div>
                            </label>
                        </div>

                        <div className={classes.dauVaoText}> 
                            <div className={classes.oNhapText}>
                                <input className={classes.inputText} name="name"  type="text" placeholder="Họ tên người đặt(Bắt buộc)"></input>
                            </div>
                            <div className={classes.errorTen} hidden>Vui lòng nhập tên</div>
                        </div>

                        <div className={classes.dauVaoText}> 
                            <div className={classes.oNhapText}>
                                <input className={classes.inputText} name="sdt"  type="text" placeholder="Số điện thoại người đặt(Bắt buộc)"></input>
                            </div>
                            <div className={classes.errorTen} hidden>Vui lòng nhập số điện thoại</div>
                        </div>

                        <div className={classes.dauVaoText}> 
                            <div className={classes.oNhapText}>
                                <input className={classes.inputText} name="address"  type="text" placeholder="Địa chỉ"></input>
                            </div>
                            <div className={classes.errorTen} hidden>Vui lòng nhập địa chỉ</div>
                        </div>

                        <div className={classes.dauVaoText}> 
                            <div className={classes.oNhapText}>
                                <textarea className={classes.inputText} name="address"  type="text" placeholder="Lý do khám"></textarea>
                            </div>
                            <div className={classes.errorTen} hidden>Vui lòng nhập địa chỉ</div>
                        </div>

                        <div style={{display:"block"}}>
                            <label>
                                <input type="radio" checked="checked" name="thanhtoan" value={doctor.gia}/>
                                Thanh toán sau tại cơ sở y tế
                            </label>
                        </div>
                        
                        <p style={{textAlign:"center"}}>Quý khách vui lòng điền đầy đủ thông tin để tiết kiệm thời gian làm thủ tục khám</p>

                        <button className={classes.btn}>Xác nhận đặt khám</button>
                    </form>
                </Grid>
            </Grid>
        </div>
    )

}

export default BookingForm;