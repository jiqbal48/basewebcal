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

export const MediaQueryExample = () => {
  const Block = styled("div", {
    backgroundColor: "darkolivegreen",
    color: "cornsilk",
    padding: "0.5em 1em",
    border: "2px solid black",
    ":hover": {
      border: "2px dashed darkred"
    },
    "@media screen and (max-width: 880px)": {
      backgroundColor: "cornflowerblue",
      color: "cornsilk"
    }
  });
  return <Block>I become blue when the browser window shrinks</Block>;
};
