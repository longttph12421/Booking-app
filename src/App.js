import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./configures/routes"
function App() {
  const showContent = (routes) => {
    var content = null;
    if (routes.length > 0) {
      content = routes.map((rou, index) => {
        return (
          <Route
            key={index}
            path={rou.path}
            exact={rou.exact}
            component={rou.main}
          />
        );
      });
    }
    return <Switch>{content}</Switch>;
  };
  return (
    <div>
      {showContent(routes)}
    </div>
  );
}

export default App;
