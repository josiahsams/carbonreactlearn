import React from "react";
import { Tile, ModalWrapper } from "carbon-components-react";
import { View16 } from "@carbon/icons-react";
import { SecurityIcon } from "./CustomIcons";

function trimSSH(sshkey) {
  return sshkey.substring(8, 28) + " ...";
}
function trimCert(cert) {
  return cert.substring(28, 48) + " ...";
}

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
              <span className="tile-attr-title">SSH Public Key:</span>
              <span className="tile-attr-val bolded" id="ssh-pubkey-short">
                {trimSSH(props.details.sshPublickey)}
              </span>
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
                  <span className="display-value" id="ssh-pubkey">
                    {props.details.sshPublickey}
                  </span>
                </p>{" "}
              </ModalWrapper>
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col-sm-3">
              <span className="tile-attr-title">X.509 Certificate:</span>
              <span className="tile-attr-val bolded" id="ssh-certi-short">
                {trimCert(props.details.x509Certificate)}
              </span>
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
                modalHeading="X.509 Certificate"
                modalLabel="Label"
              >
                {" "}
                <p>
                  <span className="display-value" id="ssh-pubkey">
                    {props.details.x509Certificate}
                  </span>
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
