import * as React from "react";
import { Card, StyledBody } from "baseui/card";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { Block } from "baseui/block";
import Calendar from "./Calendar";

const LocationCard = () => (
  <Card overrides={{ Root: { style: { width: "328px" } } }}>
    <StyledBody>
      Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare
      faucibus ex, non facilisis nisl. Proin ut dui sed metus pharetra hend
      rerit vel non mi. Nulla ornare faucibus ex, non facilisis nisl. Proin ut
      dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex,
      non facilisis nisl.
    </StyledBody>
  </Card>
);

const SelectTime = () => (
  <Card overrides={{ Root: { style: { width: "328px" } } }}>
    <StyledBody>
      Hello mars. Hello mars. Hello mars. Hello mars. Hello mars. Hello mars.
      Hello mars.
    </StyledBody>
  </Card>
);

export default () => (
  <Block>
    <Block>
      <Calendar />
      <LocationCard />
    </Block>
    <SelectTime />
  </Block>
);
