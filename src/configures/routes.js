import React from "react";
import Dashboard from "../container/admin/DashBoard/Dashboard";
import Customers from "../container/admin/DashBoard/Customers";
import Index from "../container/homePage/Sections/Index";
import ProductBox from "../container/product/ProductBox";
import Component from "../views/Components/Components";
import ProductDetail from "../container/product/ProductDetail";
import Doctor from "../container/doctor/Doctor";
import DoctorDetail from "../container/doctor/DoctorDetail";
import { Route } from "react-router-dom";

const routes = [
  <Route path="/" exact component={Index}/>,
  <Route path="/admin" exact component={Dashboard}/>,
  <Route path="/admin/customer" exact component={Customers}/>,
  <Route path="/product" exact component={ProductBox}/>,
  <Route path="/product/:id" exact component={ProductDetail}/>,
  <Route path="/component" exact component={Component}/>,
  <Route path="/doctor" exact component={Doctor}/>,
  <Route path="/doctor/:id" exact component={DoctorDetail}/>,
];

export default routes;
