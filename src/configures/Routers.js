import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "../container/homePage/HomePage";
import Dashboard from "../container/admin/DashBoard/Dashboard";
import AdminLayout from "../container/admin/Index";
import Index from "../container/homePage/Sections/Index";
import AdminRoute from "../configures/auth/AdminRoute";
import Page404 from "../container/Page404";
import Product from "../container/product/Product";
import ProductDetail from "../container/product/ProductDetail";
import LoginPage from "../container/LoginPage";
import Doctor from "../container/doctor/Doctor";
import DoctorDetail from "../container/doctor/DoctorDetail";
import AboutPage from "../container/AboutPage/AboutPage";
import Contact from "../container/AboutPage/Sections/Contact";
import AdminProduct from "../container/admin/DashBoard/AdminProduct";
function Routers() {
  return (
    <Switch>
      <Route exact path="/admin/:path?/:path?/:path?">
        <AdminLayout>
          <Switch>
            <AdminRoute exact path="/admin">
              <Dashboard />
            </AdminRoute>
            <AdminRoute exact path="/admin/product">
              <AdminProduct />
            </AdminRoute>
          </Switch>
        </AdminLayout>
      </Route>
      <Route
        exact
        path="/login"
        render={() => {
          return localStorage.getItem("TokenLoginnnn") !== null ? (
            <Redirect to="/" />
          ) : (
            <LoginPage />
          );
        }}
      />

      <Route>
        <HomePage>
          <Switch>
            <Route exact path="/product" component={Product} />
            <Route exact path="/product/:id" component={ProductDetail} />
            <Route exact path="/doctor" component={Doctor} />
            <Route exact path="/doctor/:id" component={DoctorDetail} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/" component={Index} />
          </Switch>
        </HomePage>
      </Route>

      <Route exact path="/*" component={Page404} />
    </Switch>
  );
}
export default Routers;
