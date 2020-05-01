import React from "react";
import { CodeSnippet, Tile } from "carbon-components-react";

// import { ContainerSoftware24 } from "@carbon/icons-react";
import { UserIcon } from "./CustomIcons";

function Admin(props) {
  const copyFn = () => {
    var copyText = document.querySelector("#codeholder").textContent;
    const el = document.createElement("input");
    el.value = copyText;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  return (
    <Tile>
      <div>
        <div className="bx--col-sm-12">
          <div className="tile-header">
            <UserIcon className="tile-icon" />
            <span className="tile-title">Admin</span>
          </div>
          <div>
            <div className="data-display-row">
              <span className="tile-attr-p-title">Username:</span>
              <span className="tile-attr-val bolded" id="created">
                ibmuser
              </span>
            </div>
            <div className="data-row-div"></div>
            <div className="data-display-row">
              <span className="tile-attr-p-title">Password:</span>
              <span className="data-row-p-val" id="id">
                The password must be set upon first login via SSH. You may use
                the following command:
              </span>
              <CodeSnippet type="multi" onClick={copyFn} id="codeholder">
                {`ssh ibmuser@${props.details.publicip} 'tsocmd "ALTUSER IBMUSER PASSWORD(<new-password>) NOEXPIRE RESUME"'"`}
              </CodeSnippet>
            </div>
          </div>
        </div>
      </div>
    </Tile>
  );
}

export default Admin;
