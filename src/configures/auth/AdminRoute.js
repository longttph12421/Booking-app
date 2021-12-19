import { Redirect, Route } from "react-router";

const AdminRoute = ({ children }) => {
  const checkAdmin = () => {
    let check = false;
    const user = JSON.parse(localStorage.getItem("userLogin"));
    if (user === null || user === "undefined") {
      return false;
    }
    if (user.role === "ADMIN" || user.role === "STAFF") {
      check = true;
    }
    return check;
  };

  return (
    <Route
      render={() => {
        return checkAdmin() ? children : <Redirect to={{ pathname: "/" }} />;
      }}
    />
  );
};
export default AdminRoute;
