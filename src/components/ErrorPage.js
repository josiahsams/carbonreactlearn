import React from "react";
import { ToastNotification } from "carbon-components-react";

function ErrorPage(props) {
  return (
    <div className="error-notify">
      <ToastNotification
        hideCloseButton
        kind="error"
        subtitle={props.message}
        timeout={0}
        title={props.title}
        caption={props.caption}
      />
    </div>
  );
}

export default ErrorPage;
