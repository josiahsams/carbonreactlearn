import React from "react";
import { Tile } from "carbon-components-react";

import { ContainerSoftware24 } from "@carbon/icons-react";

function Network(props) {
  return (
    <Tile>
      <div>
        <div className="bx--col-sm-12">
          <div className="tile-header">
            <ContainerSoftware24 />
            <span className="tile-title">Network</span>
          </div>
          <div>
            <div className="data-display-row">
              <span className="tile-attr-title">Public IP:</span>
              <span className="tile-attr-val bolded" id="created">
                {props.details.publicip}
              </span>
            </div>
            <div className="data-row-div"></div>
            <div className="data-display-row">
              <span className="tile-attr-title">Private IP:</span>
              <span className="tile-attr-val bolded" id="id">
                {props.details.privateip}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Tile>
  );
}

export default Network;
