import * as React from "react";
import { Block } from "baseui/block";

const itemStyles = {
  Block: {
    style: { border: "1px solid palevioletred" }
  }
};
export default () => {
  return (
    <Block
      display="flex"
      height={["20px", "40px", "80px", "160px"]}
      backgroundColor={["red", "yellow", "green", "orange"]}
      overrides={itemStyles}
    >
      <Block display="flex" flexDirection="column">
        <Block overrides={itemStyles}>Calenders</Block>
        <Block overrides={itemStyles}>Location</Block>
      </Block>
      <Block overrides={itemStyles}>select date time</Block>
    </Block>
  );
};
