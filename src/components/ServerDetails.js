import React from "react";
import { Tile } from "carbon-components-react";
import { ContainerIcon } from "./CustomIcons";
import { TileLoader } from "./TileLoader";

function printTime(jsontime) {
  var date = new Date(jsontime);
  return date.toLocaleString();
}
function PrintServerDetails(props) {
  if (props.isLoading) {
    return <TileLoader />;
  } else {
    return (
      <div>
        <div className="data-display-row">
          <span className="tile-attr-title">Created:</span>
          <span className="tile-attr-val bolded" id="created">
            {printTime(props.details.created)}
          </span>
        </div>
        <div className="data-row-div"></div>
        <div className="data-display-row">
          <span className="tile-attr-title">ID:</span>
          <span className="tile-attr-val" id="id">
            {props.details.id}
          </span>
        </div>
        <div className="data-display-row">
          <span className="tile-attr-title">Image:</span>
          <span className="tile-attr-val" id="image">
            {props.details.image}
          </span>
        </div>
        <div className="data-row-div"></div>
        <div className="data-display-row">
          <span className="tile-attr-title">Status:</span>
          <span className="tile-attr-val bolded" id="status">
            {props.details.stateStatus} - {props.details.status}
          </span>
        </div>
      </div>
    );
  }
}

function ServerDetails(props) {
  return (
    <>
      <Tile className="bx--skeleton">
        <div>
          <div className="bx--col-sm-12">
            <div className="tile-header">
              <ContainerIcon className="tile-icon" />
              <span className="tile-title">Server Details</span>
            </div>
            <PrintServerDetails {...props} />
          </div>
        </div>
      </Tile>
    </>
  );
}

export default ServerDetails;
