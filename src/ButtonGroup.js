import * as React from "react";
import { Button, Baseutton } from "baseui/button";
import { ButtonGroup } from "baseui/button-group";

const VButton = ({ children }) => {
  const overrides = {
    BaseButton: {
      style: () => {
        return {
          border: `2px solid palevioletred`,
          backgroundColor: "green"
        };
      }
    }
  };
  return <Button overrides={overrides}>{children}</Button>;
};
export default () => (
  <ButtonGroup
    overrides={{
      Root: {
        style: {
          border: "2px solid green",
          display: "flex",
          flexDirection: "column"
        }
      }
    }}
  >
    <VButton>Label</VButton>
    <VButton>Label</VButton>
    <VButton>Label</VButton>
    <VButton>Label</VButton>
    <VButton>Label</VButton>
    <VButton>Label</VButton>
    <VButton>Label</VButton>
    <VButton>Label</VButton>
    <VButton>Label</VButton>
    <VButton>Label</VButton>
    <VButton>Label</VButton>
    <VButton>Label</VButton>
  </ButtonGroup>
);
