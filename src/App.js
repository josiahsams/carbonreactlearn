import React from "react";

import "./app.scss";
import "./dashboard.scss";
import { StartPage } from "./components/Main";

import {
  BrowserRouter as Router,
  Route,
  useLocation,
  Redirect,
  Switch,
} from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function My404Component() {
  return <div>Page Not Found</div>;
}

function HandleRoutes() {
  let query = useQuery();
  return (
    <Switch>
      <Route path="/404" component={My404Component} />
      <Route
        path="/sso_dashboard"
        component={() => <StartPage query={query} />}
      />
      <Redirect from="*" to="/404" />
    </Switch>
  );
}

export default function App() {
  return (
    <Router>
      <HandleRoutes />
    </Router>
  );
}
