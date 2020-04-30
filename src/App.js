import React from "react";
//import "carbon-components/css/carbon-components.min.css";

import "./app.scss";
import "./dashboard.scss";
import Title from "./components/Title";
import ServerDetails from "./components/ServerDetails";
import System from "./components/System";
import Network from "./components/Network";
import Security from "./components/Security";
import Admin from "./components/Admin";

function App() {
  const details = {
    consoleurl: "https://169.63.122.236:2424/master",
    zosmf: "https://169.63.122.236:10443/zosmf",
    syslogs: "https://169.63.122.236:10443/zosmf",
    cpu: 2,
    memory: 4096,
    publicip: "169.63.122.236",
    privateip: "169.63.122.192",
  };

  return (
    <div className="bleed">
      <div className="bx--grid ">
        <div className="bx--row">
          <div className="bx--col bx--col-lg-16 bx--col-md-8 bx--col-sm-4">
            <Title details={details} />
          </div>
        </div>
        <div className="bx--row">
          <div className="bx--col-lg-16 bx--col-md-8 bx--col-sm-4">
            <ServerDetails />
          </div>
        </div>
        <div className="bx--row">
          <div className="bx--col-md-4 bx--col-sm-2">
            <System details={details} />
          </div>

          <div className="bx--col-md-4 bx--col-sm-2">
            <Network details={details} />
          </div>

          <div className="bx--col-md-4 bx--col-sm-2">
            <Security details={details} />
          </div>

          <div className="bx--col-md-4 bx--col-sm-2">
            <Admin details={details} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
