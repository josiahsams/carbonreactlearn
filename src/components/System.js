import React from "react";
import { Tile } from "carbon-components-react";
import { InfraIcon } from "./CustomIcons";

function PrintDetails(props) {
  return (
    <div>
      <div className="data-display-row">
        <span className="tile-attr-title">CPU:</span>
        <span className="tile-attr-val bolded" id="created">
          {props.details.cpu}
        </span>
      </div>
      <div className="data-row-div"></div>
      <div className="data-display-row">
        <span className="tile-attr-title">Memory:</span>
        <span className="tile-attr-val bolded" id="id">
          {props.details.memory}
        </span>
      </div>
    </div>
  );
}

function System(props) {
  return (
    <Tile>
      <div>
        <div className="bx--col-sm-12">
          <div className="tile-header">
            <InfraIcon className="tile-icon" />
            <span className="tile-title">System</span>
          </div>
          <PrintDetails {...props} />
        </div>
      </div>
    </Tile>
  );
}

export default System;
