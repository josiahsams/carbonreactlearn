import React from "react";

import "./app.scss";
import "./dashboard.scss";
import Title from "./components/Title";
import ServerDetails from "./components/ServerDetails";
import System from "./components/System";
import Network from "./components/Network";
import Security from "./components/Security";
import Admin from "./components/Admin";
import {
  BrowserRouter as Router,
  Route,
  useLocation,
  Redirect,
  Switch,
} from "react-router-dom";

function PrintSection(props) {
  if (!props.details.isLoading) {
    return (
      <div className="bx--row">
        <div className="bx--col-md-4 bx--col-sm-2">
          <System {...props} />
        </div>

        <div className="bx--col-md-4 bx--col-sm-2">
          <Network {...props} />
        </div>

        <div className="bx--col-md-4 bx--col-sm-2">
          <Security {...props} />
        </div>

        <div className="bx--col-md-4 bx--col-sm-2">
          <Admin {...props} />
        </div>
      </div>
    );
  } else {
    return <div />;
  }
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

class StartPage extends React.Component {
  //

  state = {
    details: {
      consoleurl: "https://169.63.122.236:2424/master",
      zosmf: "https://169.63.122.236:10443/zosmf",
      syslogs: "https://169.63.122.236:10443/zosmf",
      cpu: 2,
      memory: 4096,
      publicip: "169.63.122.236",
      privateip: "169.63.122.192",
      isLoading: true,
    },
  };
  componentDidMount() {
    console.log(this.props.query.get("code"));
    console.log(this.props.query.get("state"));
  }
  render() {
    return (
      <div className="bleed">
        <div className="bx--grid ">
          <div className="bx--row">
            <div className="bx--col-lg-16 bx--col-md-8 bx--col-sm-4">
              <Title details={this.state.details} />
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col-lg-16 bx--col-md-8 bx--col-sm-4">
              <ServerDetails details={this.state.details} />
            </div>
          </div>
          <PrintSection details={this.state.details} />
        </div>
      </div>
    );
  }
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
      {/* <Redirect from="*" to="/404" /> */}
    </Router>
  );
}
