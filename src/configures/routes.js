import React from 'react'
import Dashboard from '../container/admin/DashBoard/Dashboard'
import Customers from '../container/admin/DashBoard/Customers'
import HomePage from "../container/homePage/HomePage";
import ProfilePage from "../views/ProfilePage/ProfilePage";
import LoginPage from "../views/LoginPage/LoginPage";
import ProductBox from "../container/product/ProductBox";
import Component from "../views/Components/Components";

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
];

export default routes;
