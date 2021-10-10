import React from "react";
import { Route, Switch } from "react-router-dom";
import Components from "./views/Components/Components";
import LandingPage from "./views/LandingPage/LandingPage";
import ProfilePage from "./views/ProfilePage/ProfilePage";
import LoginPage from "./views/LoginPage/LoginPage";
import ProductBox from "./container/product/ProductBox";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/landing-page" component={LandingPage} />
        <Route path="/profile-page" component={ProfilePage} />
        <Route path="/login-page" component={LoginPage} />
        <Route path="/product" component={ProductBox} />
        <Route path="/" component={Components} />
      </Switch>
    </div>
  );
}

export default App;
