import React from "react";
//import "carbon-components/css/carbon-components.min.css";

import "./app.scss";
import "./dashboard.scss";

import { Button, CodeSnippet, Tile } from "carbon-components-react";

import {
  Terminal16,
  Document16,
  ContainerSoftware24,
} from "@carbon/icons-react";

function App() {
  return (
    <div className="bleed">
      <div className="bx--grid ">
        <div className="bx--row">
          <div className="bx--col bx--col-lg-16 bx--col-md-8 bx--col-sm-4">
            <Tile>
              <span id="ibm-name">IBM Cloud </span>
              <span id="app-name">Hyper Protect Virtual Servers</span>
              <span id="sub-name">Z Next</span>
              <h3 id="dash-name">Dashboard</h3>

              <div className="center" id="btn-row">
                <Button
                  size="field"
                  kind="ghost"
                  href="https://169.63.122.236:2424/master"
                  renderIcon={Terminal16}
                >
                  Master Console
                </Button>
                <span className="btn-divider">/ </span>
                <Button
                  size="field"
                  kind="ghost"
                  href="https://169.63.122.236:10443/zosmf"
                  renderIcon={Document16}
                >
                  z/OSMF{" "}
                </Button>
                <span className="btn-divider">/ </span>
                <Button
                  size="field"
                  kind="ghost"
                  href="https://169.63.122.236:10443/zosmf"
                  renderIcon={Document16}
                >
                  System Logs{" "}
                </Button>
              </div>
            </Tile>
          </div>
        </div>
        <div className="bx--row">
          <div className="bx--col-md-4 bx--col-sm-2">
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
          </div>

          <div className="bx--col-md-4 bx--col-sm-2">
            <Tile>
              <span id="tile-title">IBM Cloud </span>
              <CodeSnippet>
                {`
                  Hello Code Snippet`}
              </CodeSnippet>
            </Tile>
          </div>

          <div className="bx--col-md-4 bx--col-sm-2">
            <Tile>
              <span id="tile-title">IBM Cloud </span>
              <CodeSnippet>
                {`
                  Hello Code Snippet`}
              </CodeSnippet>
            </Tile>
          </div>

          <div className="bx--col-md-4 bx--col-sm-2">
            <Tile>
              <span id="tile-title">IBM Cloud </span>
              <CodeSnippet>
                {`
                  Hello Code Snippet`}
              </CodeSnippet>
            </Tile>
          </div>

          <div className="bx--col-md-4 bx--col-sm-2">
            <Tile>
              <span id="tile-title">IBM Cloud </span>
              <CodeSnippet>
                {`
              Hello Code Snippet`}
              </CodeSnippet>
            </Tile>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
