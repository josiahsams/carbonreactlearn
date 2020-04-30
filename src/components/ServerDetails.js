import React from "react";
import { Tile } from "carbon-components-react";

import { ContainerSoftware24 } from "@carbon/icons-react";

function ServerDetails() {
  return (
    <Tile>
      <div>
        <div className="bx--col-sm-12">
          <div className="tile-header">
            <ContainerSoftware24 />
            <span className="tile-title">Server Details</span>
          </div>
          <div>
            <div className="data-display-row">
              <span className="tile-attr-title">Created:</span>
              <span className="tile-attr-val bolded" id="created">
                Invalid Date
              </span>
            </div>
            <div className="data-row-div"></div>
            <div className="data-display-row">
              <span className="tile-attr-title">ID:</span>
              <span className="tile-attr-val" id="id"></span>
            </div>
            <div className="data-display-row">
              <span className="tile-attr-title">Image:</span>
              <span className="tile-attr-val" id="image"></span>
            </div>
            <div className="data-row-div"></div>
            <div className="data-display-row">
              <span className="tile-attr-title">Status:</span>
              <span className="tile-attr-val bolded" id="status">
                undefined - Running
              </span>
            </div>
          </div>
        </div>
      </div>
    </Tile>
  );
}

export default ServerDetails;
