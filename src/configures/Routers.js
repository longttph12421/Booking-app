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
import AdminProduct from "../container/admin/product/AdminProduct";
import Booking from "../container/admin/booking/Booking";
import ServiceCustomer from "../container/admin/ServiceCustomer";
import Register from "../container/Register";
import ProfilePage from "../container/ProfilePage/ProfilePage";
import Staff from "../container/admin/calender/Staff";
import WeekSchedule from "../container/admin/calender/weekSchedule";
import Customer from "../container/admin/customer/Customer";
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

            <AdminRoute exact path="/admin/booking">
              <Booking />
            </AdminRoute>

            <AdminRoute exact path="/admin/service">
              <ServiceCustomer />
            </AdminRoute>

            <AdminRoute exact path="/admin/customer">
              <Customer />
            </AdminRoute>

            <AdminRoute exact path="/admin/staff">
              <Staff />
            </AdminRoute>

            <AdminRoute exact path="/admin/staff/:id">
              <WeekSchedule />
            </AdminRoute>
          </Switch>
        </AdminLayout>
      </Route>
      <Route
        exact
        path="/login"
        render={() => {
          return <LoginPage />;
        }}
      />

      <Route
        exact
        path="/register"
        render={() => {
          return <Register />;
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
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/" component={Index} />
          </Switch>
        </HomePage>
      </Route>

      <Route exact path="*" component={Page404} />
    </Switch>
  );
}
export default Routers;
