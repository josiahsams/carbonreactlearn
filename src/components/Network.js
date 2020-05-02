import React from "react";
import { Tile } from "carbon-components-react";
import { NetworkIcon } from "./CustomIcons";

function Network(props) {
  return (
    <Tile>
      <div>
        <div className="bx--col-sm-12">
          <div className="tile-header">
            <NetworkIcon className="tile-icon" />
            <span className="tile-title">Network</span>
          </div>
          <div>
            <div className="data-display-row">
              <span className="tile-attr-title">Public IP:</span>
              <span className="tile-attr-val bolded" id="created">
                {props.details.network.public_ip}
              </span>
            </div>
            <div className="data-row-div"></div>
            <div className="data-display-row">
              <span className="tile-attr-title">Private IP:</span>
              <span className="tile-attr-val bolded" id="id">
                {props.details.network.private_ip}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Tile>
  );
}

export default Network;
