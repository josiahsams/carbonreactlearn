import React from "react";

import { Button, Tile } from "carbon-components-react";
import { Terminal16, Document16 } from "@carbon/icons-react";

function Title(props) {
  return (
    <Tile>
      <span id="ibm-name">IBM Cloud </span>
      <span id="app-name">Hyper Protect Virtual Servers</span>
      <span id="sub-name">Z Next</span>
      <h3 id="dash-name">Dashboard</h3>

      <div className="center" id="btn-row">
        <Button
          size="field"
          kind="ghost"
          href={props.consoleurl}
          renderIcon={Terminal16}
        >
          Master Console
        </Button>
        <span className="btn-divider">/ </span>
        <Button
          size="field"
          kind="ghost"
          href={props.zosmf}
          renderIcon={Document16}
        >
          z/OSMF{" "}
        </Button>
        <span className="btn-divider">/ </span>
        <Button
          size="field"
          kind="ghost"
          href={props.syslogs}
          renderIcon={Document16}
        >
          System Logs{" "}
        </Button>
      </div>
    </Tile>
  );
}

export default Title;
