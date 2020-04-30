import React from "react";
import { Tile } from "carbon-components-react";

import { ContainerSoftware24 } from "@carbon/icons-react";

function System(props) {
  return (
    <Tile>
      <div>
        <div className="bx--col-sm-12">
          <div className="tile-header">
            <ContainerSoftware24 />
            <span className="tile-title">System</span>
          </div>
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
        </div>
      </div>
    </Tile>
  );
}

export default System;
