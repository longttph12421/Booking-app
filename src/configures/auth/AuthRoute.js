import { Redirect } from "react-router";

const AuthRoute = (props) => {
  const checkLogin = () => {
    let check = false;
    const user = JSON.parse(localStorage.getItem("userLogin"));
    if (user === null || user === "undefined") {
      return false;
    }
    return check;
  };

  return checkLogin() ? (
    props.children
  ) : (
    <Redirect to={{ pathname: "/login" }} />
  );
};
export default AuthRoute;