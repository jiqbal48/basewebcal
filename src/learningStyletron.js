import React from "react";
import { styled } from "styletron-react";

export default () => {
  const Button = styled("button", {
    color: "palevioletred",
    fontSize: "16px",
    paddingLeft: "1em",
    paddingRight: "1em"
  });
  return <Button>Button</Button>;
};
