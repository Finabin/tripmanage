import React from "react";
import { Switch, Route } from "react-router-dom";
import { routeConfig } from "./routeConfig";

export const Router = () => {
  return (
    <Switch>
      {routeConfig.map((route, index) => (
        <Route key={index} path={route.path} exact={route.exact} component={route.component} />
      ))}
    </Switch>
  );
}