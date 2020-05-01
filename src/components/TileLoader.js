import React from "react";
import { SkeletonText } from "carbon-components-react";
export function TileLoader(props) {
  let width;
  if (props.hasOwnProperty("width")) {
    width = props.width;
  } else {
    width = "500px";
  }
  return <SkeletonText width={width} paragraph lineCount={3}></SkeletonText>;
}
