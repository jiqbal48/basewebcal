import * as React from "react";
import { Button } from "baseui/button";
import { ButtonGroup } from "baseui/button-group";

export default () => (
  <ButtonGroup
    overrides={{
      Root: {
        style: {
          border: "2px solid blue",
          display: "flex",
          flexDirection: "column"
        }
      }
    }}
  >
    <Button>Label</Button>
    <Button>Label</Button>
    <Button>Label</Button>
    <Button>Label</Button>
    <Button>Label</Button>
    <Button>Label</Button>
    <Button>Label</Button>
    <Button>Label</Button>
    <Button>Label</Button>
    <Button>Label</Button>
    <Button>Label</Button>
    <Button>Label</Button>
    <Button>Label</Button>
    <Button>Label</Button>
    <Button>Label</Button>
  </ButtonGroup>
);
