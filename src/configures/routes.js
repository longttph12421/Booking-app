import React from 'react'
import Dashboard from '../container/admin/DashBoard/Dashboard'
import Customers from '../container/admin/DashBoard/Customers'
import HomePage from "../container/homePage/HomePage";
import ProfilePage from "../views/ProfilePage/ProfilePage";
import LoginPage from "../views/LoginPage/LoginPage";
import ProductBox from "../container/product/ProductBox";
import Component from "../views/Components/Components";
import LandingPage from "../views/LandingPage/LandingPage"
import ProductDetail from '../container/product/ProductDetail';
const routes = [
  { path: "/", exact: true, name: "Home", main: () => <HomePage /> },
  {
    path: "/admin",
    exact: true,
    name: "Admin",
    main: () => <Dashboard />,
  },
  {
    path: "/admin/Customer",
    exact: true,
    name: "Customer",
    main: () => <Customers />,
  },
  {
    path: "/Product",
    exact: true,
    name: "Product",
    main: () => <ProductBox />,
  },
  {
    path: "/Category",
    exact: true,
    name: "Category",
    main: () => <ProfilePage />,
  },
  {
    path: "/Login",
    exact: true,
    name: "Login",
    main: () => <LoginPage />,
  },
  {
    path: "/Component",
    exact: true,
    name: "Component",
    main: () => <Component />,
  },
  {
    path: "/ProductDetail",
    exact: true,
    name: "ProductDetail",
    main: () => <ProductDetail />,
  },
  {
    path: "/Landing",
    exact: true,
    name: "Component",
    main: () => <LandingPage />,
  },
];

export default routes;
