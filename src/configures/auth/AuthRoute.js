import { Redirect } from "react-router";

const AuthRoute = (props) => {
  const checkLogin = () => {
    const user = JSON.parse(localStorage.getItem("userLogin"));
    if (user === null || user === "undefined") {
      return false;
    } else {
      return true;
    }
  };

  return checkLogin() ? (
    props.children
  ) : (
    <Redirect to={{ pathname: "/login" }} />
  );
};
export default AuthRoute;
