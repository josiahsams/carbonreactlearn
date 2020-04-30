import React from "react";
import { Tile, ModalWrapper } from "carbon-components-react";

import { ContainerSoftware24, View16 } from "@carbon/icons-react";

function Security(props) {
  return (
    <Tile>
      <div className="bx-row">
        <div className="bx--col-sm-4">
          <div className="tile-header">
            <ContainerSoftware24 />
            <span className="tile-title">Security</span>
          </div>
        </div>
      </div>
      <div className="bx-row">
        <div className="bx--col-sm-4">
          <div className="bx--row">
            <div className="bx--col-sm-3">
              <div className="tile-attr-title">SSH Public Key:</div>
            </div>
            <div className="bx--col-sm-1">
              <ModalWrapper
                passiveModal
                size="sm"
                hasScrollingContent
                buttonTriggerClassName="tile-view-button"
                triggerButtonIconDescription="ssh keys"
                triggerButtonKind="ghost"
                renderTriggerButtonIcon={View16}
                modalHeading="SSH Public Key"
                modalLabel="Label"
              >
                {" "}
                <p>
                  <span className="display-value" id="ssh-pubkey"></span>
                </p>{" "}
              </ModalWrapper>
            </div>
          </div>
        </div>
      </div>

      <div className="bx-row">
        <div className="bx--col-sm-4">
          <div className="bx--row">
            <div className="bx--col-sm-3">
              <span className="tile-attr-title">X.509 Certificate:</span>
            </div>
            <div className="bx--col-sm-1">
              <ModalWrapper
                passiveModal
                size="sm"
                hasScrollingContent
                buttonTriggerClassName="tile-view-button"
                triggerButtonIconDescription="ssh keys"
                triggerButtonKind="ghost"
                renderTriggerButtonIcon={View16}
                modalHeading="SSH Public Key"
                modalLabel="Label"
              >
                {" "}
                <p>
                  <span className="display-value" id="ssh-pubkey"></span>
                </p>{" "}
              </ModalWrapper>
            </div>
          </div>
        </div>
      </div>
    </Tile>
  );
}

export default Security;
