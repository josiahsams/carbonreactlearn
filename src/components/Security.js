import React from "react";
import { Tile, ModalWrapper } from "carbon-components-react";

// import { ContainerSoftware24, View16 } from "@carbon/icons-react";
import { View16 } from "@carbon/icons-react";
import { SecurityIcon } from "./CustomIcons";

function Security(props) {
  return (
    <Tile>
      <div className="bx-row">
        <div className="bx--col-sm-4">
          <div className="tile-header">
            <SecurityIcon className="tile-icon" />
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
                modalAriaLabel="ssh"
                aria-label="ssh"
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
                aria-label="cert"
                modalAriaLabel="cert"
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
