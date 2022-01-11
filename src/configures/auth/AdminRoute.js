import { Redirect } from "react-router";

const AdminRoute = (props) => {
  const checkAdmin = () => {
    let check = false;
    const user = JSON.parse(localStorage.getItem("userLogin"));
    if (user === null || user === "undefined") {
      return false;
    }
    if (
      user.role === "ADMIN" ||
      user.role === "STAFF" ||
      user.role === "DOCTOR"
    ) {
      check = true;
    }
    return check;
  };
  
  return checkAdmin() == true ? (
    props.children
  ) : (
    <Redirect to={{ pathname: "/login" }} />
  );
};
export default AdminRoute;
