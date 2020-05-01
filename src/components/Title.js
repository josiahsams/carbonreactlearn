import React from "react";

import { Button, Tile } from "carbon-components-react";
// import { Terminal16, Document16 } from "@carbon/icons-react";

import { TerminalIcon, DocumentIcon, AppServiceIcon } from "./CustomIcons";

function Title(props) {
  let skeletonClass;
  if (props.details.isLoading) {
    skeletonClass = "bx--skeleton";
  } else {
    skeletonClass = "";
  }
  return (
    <Tile>
      <span id="ibm-name">IBM Cloud </span>
      <span id="app-name">Hyper Protect Virtual Servers</span>
      <span id="sub-name">Z Next</span>
      <h3 id="dash-name">Dashboard</h3>

      <div className="center" id="btn-row">
        <Button
          className={skeletonClass}
          size="field"
          kind="ghost"
          href={props.consoleurl}
          renderIcon={TerminalIcon}
        >
          Master Console
        </Button>

        <span className="btn-divider">/ </span>
        <Button
          className={skeletonClass}
          size="field"
          kind="ghost"
          href={props.zosmf}
          renderIcon={AppServiceIcon}
        >
          z/OSMF{" "}
        </Button>
        <span className="btn-divider">/ </span>
        <Button
          className={skeletonClass}
          size="field"
          kind="ghost"
          href={props.syslogs}
          renderIcon={DocumentIcon}
        >
          System Logs{" "}
        </Button>
      </div>
    </Tile>
  );
}

export default Title;
