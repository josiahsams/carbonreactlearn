import React from "react";
import { Button, Tile } from "carbon-components-react";
import { syslogUrl } from "../const";

import { TerminalIcon, DocumentIcon, AppServiceIcon } from "./CustomIcons";

function Title(props) {
  var consoleurl;
  var zosmf;
  var syslogs;
  let skeletonClass;
  if (props.isLoading) {
    skeletonClass = "bx--skeleton";
  } else {
    skeletonClass = "";
    consoleurl = "https://" + props.details.network.public_ip + ":2424/master";
    zosmf = "https://" + props.details.network.public_ip + ":10443/zosmf";
    syslogs = syslogUrl + "/log/" + props.details.hostname;
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
          href={consoleurl}
          renderIcon={TerminalIcon}
        >
          Master Console
        </Button>

        <span className="btn-divider">/ </span>
        <Button
          className={skeletonClass}
          size="field"
          kind="ghost"
          href={zosmf}
          renderIcon={AppServiceIcon}
        >
          z/OSMF{" "}
        </Button>
        <span className="btn-divider">/ </span>
        <Button
          className={skeletonClass}
          size="field"
          kind="ghost"
          href={syslogs}
          renderIcon={DocumentIcon}
        >
          System Logs{" "}
        </Button>
      </div>
    </Tile>
  );
}

export default Title;
