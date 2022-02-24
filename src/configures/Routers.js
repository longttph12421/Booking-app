import { Switch, Route } from "react-router-dom";
import HomePage from "../container/homePage/HomePage";
import Dashboard from "../container/admin/DashBoard/Dashboard";
import AdminLayout from "../container/admin/Index";
import Index from "../container/homePage/Sections/Index";
import AdminRoute from "../configures/auth/AdminRoute";
import AuthRoute from "./auth/AuthRoute";
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
// import Account from "../container/admin/account/Account";
import Staff from "../container/admin/calender/Staff";
import Days from "../container/admin/calender/day/Days";
import Customer from "../container/admin/customer/Customer";
import TimeSchedule from "../container/admin/calender/time/TimeSchedule";
import History from "../container/ProfilePage/History";
import Schedule from "../container/doctor/schedule/Schedule";
import ForgotPassword from "../container/ForgotPassword";
function Routers() {
  return (
    <Switch>
      <Route exact path="/admin/:path?/:path?/:path?/:path?">
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

            {/* <AdminRoute exact path="/admin/account">
              <Account />
            </AdminRoute> */}

            <AdminRoute exact path="/admin/customer">
              <Customer />
            </AdminRoute>

            <AdminRoute exact path="/admin/staff">
              <Staff />
            </AdminRoute>

            <Route exact path="/admin/time/:id" component={TimeSchedule} />

            <Route exact path="/admin/schedule" component={Schedule} />

            <AdminRoute>
              <Route exact path="/admin/staff/:id" component={Days} />
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
      <Route
        exact
        path="/forgot"
        render={() => {
          return <ForgotPassword />;
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
            <Route exact path="/history" component={History} />
            <Route exact path="/" component={Index} />
            <AuthRoute>
              <Route exact path="/profile" component={ProfilePage} />
            </AuthRoute>
          </Switch>
        </HomePage>
      </Route>

      <Route exact path="*" component={Page404} />
    </Switch>
  );
}
export default Routers;
