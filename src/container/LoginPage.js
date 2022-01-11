/* eslint-disable eqeqeq */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import * as LoginService from "../services/auth/LoginService";
// @material-ui/icons
import People from "@material-ui/icons/People";
// core components
import Footer from "../components/Footer/Footer.js";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import Button from "../components/CustomButtons/Button.js";
import Card from "../components/Card/Card.js";
import CardBody from "../components/Card/CardBody.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardFooter from "../components/Card/CardFooter.js";
import CustomInput from "../components/CustomInput/CustomInput.js";
import styles from "../assets/jss/material-kit-react/views/loginPage.js";
import FacebookIcon from "@material-ui/icons/Facebook";
import image from "../assets/img/bg7.jpg";
import { Link, useHistory } from "react-router-dom";
import * as toastHelper from "../common/toastHelper";
const useStyles = makeStyles(styles);

function LoginPage(props) {
  const [cardAnimation, setCardAnimation] = React.useState("cardHidden");
  let history = useHistory();
  const { register, handleSubmit } = useForm();
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const onSubmit = (data) => {
    onLogin(data);
    console.log(data);
  };
  const onLogin = async (data) => {
    LoginService.loginToken(data)
      .then((response) => {
        console.log("đây là data gửi về: ", response.data);
        if (
          response.data != "" &&
          response.data != undefined &&
          response.data != null
        ) {
          if (
            response.data.role == "ADMIN" ||
            response.data.role == "STAFF" ||
            response.data.role == "DOCTOR"
          ) {
            toastHelper.toastSuccess("Đăng nhập thành công!");
            localStorage.setItem("TokenLogin", response.data);
            localStorage.setItem("userLogin", JSON.stringify(response.data));
            history.replace("/admin");
          }
          if (response.data.role == "USER") {
            toastHelper.toastSuccess("Đăng nhập thành công!");
            localStorage.setItem("TokenLogin", response.data);
            localStorage.setItem("userLogin", JSON.stringify(response.data));
            history.replace("/");
          }
        } else {
          toastHelper.toastError("Đăng nhập thất bại!!!");
          localStorage.removeItem("userLogin");
          localStorage.removeItem("TokenLogin");
        }
      })
      .catch(function (error) {
        toastHelper.toastError(
          "Thông tin tài khoản hoặc mật khẩu không chính xác!!!"
        );
        localStorage.removeItem("userLogin");
        localStorage.removeItem("TokenLogin");
        console.log(error);
      });
  };

  return (
    <div>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimation]}>
                <form
                  className={classes.form}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Login</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <FacebookIcon />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-google"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                        </svg>
                      </Button>
                    </div>
                  </CardHeader>
                  <Link to="/register" style={{ textDecoration: "none" }}>
                    <p className={classes.divider}>OR REGISTER</p>
                  </Link>
                  <CardBody>
                    <CustomInput
                      labelText="UserName..."
                      id="first"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        ...register("username"),

                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        ...register("password"),
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" type="submit" size="lg">
                      LOGIN
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
export default LoginPage;
