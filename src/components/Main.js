import React from "react";

import Title from "./Title";
import ServerDetails from "./ServerDetails";
import System from "./System";
import Network from "./Network";
import Security from "./Security";
import Admin from "./Admin";
import ErrorPage from "./ErrorPage";
import { brokerEndpointUrl } from "../const";

function PrintSection(props) {
  if (!props.isLoading) {
    return (
      <div className="bx--row">
        <div className="bx--col-md-4 bx--col-sm-2">
          <System {...props} />
        </div>

        <div className="bx--col-md-4 bx--col-sm-2">
          <Network {...props} />
        </div>

        <div className="bx--col-md-4 bx--col-sm-2">
          <Security {...props} />
        </div>

        <div className="bx--col-md-4 bx--col-sm-2">
          <Admin {...props} />
        </div>
      </div>
    );
  } else {
    return <div />;
  }
}

function fetchVServerDetails(code, state, callback) {
  return fetch(
    `sso_dashboard_internal?code=${encodeURIComponent(
      code
    )}&state=${encodeURIComponent(state)}`
  )
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + "  " + response.statusText
          );

          error.response = response;

          throw error;
        }
      },
      (error) => {
        var err = new Error(error.message);
        console.log(error.message);

        throw err;
      }
    )
    .then((response) => {
      response.json().then((data) => {
        console.log(data);
        callback(null, data);
      });
    })
    .catch((err) => callback(err, null));

  // setTimeout(() => {
  //   dispatch(addDishes(DISHES));
  // }, 2000);
}

export class StartPage extends React.Component {
  state = {
    isError: false,
    errMsg: "",
    details: {},
    isLoading: true,
  };
  componentDidMount() {
    const code = this.props.query.get("code");
    const state = this.props.query.get("state");
    console.log(this.props.query.get("code"));
    console.log(this.props.query.get("state"));
    fetchVServerDetails(code, state, (err, data) => {
      if (err === null) {
        console.log(data);
        this.setState({
          ...this.state,
          details: { ...data },
          isLoading: false,
        });
      } else {
        err.response.json().then((message) => {
          console.log("Got error - joe " + message);
          console.log(err);
          this.setState({
            ...this.state,
            details: {},
            isError: true,
            errMsg: message.error,
          });
        });
      }
    });
  }
  render() {
    if (this.state.isError) {
      return (
        <ErrorPage
          message={this.state.errMsg}
          title="Failed to retrieve server details"
          caption="To proceed, delete this service instance and recreate a new one."
        />
      );
    } else {
      return (
        <div className="bleed">
          <div className="bx--grid ">
            <div className="bx--row">
              <div className="bx--col-lg-16 bx--col-md-8 bx--col-sm-4">
                <Title
                  details={this.state.details}
                  isLoading={this.state.isLoading}
                />
              </div>
            </div>
            <div className="bx--row">
              <div className="bx--col-lg-16 bx--col-md-8 bx--col-sm-4">
                <ServerDetails
                  details={this.state.details}
                  isLoading={this.state.isLoading}
                />
              </div>
            </div>
            <PrintSection
              details={this.state.details}
              isLoading={this.state.isLoading}
            />
          </div>
        </div>
      );
    }
  }
}
