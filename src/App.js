import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./container/homePage/HomePage";
import LandingPage from "./views/LandingPage/LandingPage";
import ProfilePage from "./views/ProfilePage/ProfilePage";
import LoginPage from "./views/LoginPage/LoginPage";
import ProductBox from "./container/product/ProductBox";
import Component from "./views/Components/Components";
import Carousels from "./components/carousel/Carousel"
function App() {
  return (
    <div>
      <Switch>
        <Route path="/landing" component={LandingPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/product" component={ProductBox} />
        <Route path="/Component" component={Component} />
        <Route path="/" component={Carousels} />
      </Switch>
    </div>
  );
}

export default App;
