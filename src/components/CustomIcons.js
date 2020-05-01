import React from "react";
import Icons from "./custom-carbon-icons.svg";

export function CustomCarbonIcon(props) {
  let className = "";
  if (!props.hasOwnProperty("className")) {
    className = "bx--btn__icon";
  } else {
    className = props.className;
  }
  return (
    <svg className={className}>
      <use xlinkHref={Icons + "#" + props.divId} />
    </svg>
  );
}

export function AppServiceIcon(props) {
  return <CustomCarbonIcon divId="icon--app-services" {...props} />;
}
export function TerminalIcon(props) {
  return <CustomCarbonIcon divId="icon--terminal" {...props} />;
}
export function DocumentIcon(props) {
  return <CustomCarbonIcon divId="icon--document" {...props} />;
}
export function ContainerIcon(props) {
  return <CustomCarbonIcon divId="icon--containers" {...props} />;
}
export function UserIcon(props) {
  return <CustomCarbonIcon divId="icon--header--user" {...props} />;
}
export function SecurityIcon(props) {
  return <CustomCarbonIcon divId="icon--locked" {...props} />;
}
export function InfraIcon(props) {
  return <CustomCarbonIcon divId="icon--infrastructure" {...props} />;
}
export function NetworkIcon(props) {
  return <CustomCarbonIcon divId="icon--network" {...props} />;
}
