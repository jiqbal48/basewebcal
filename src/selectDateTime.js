import * as React from "react";
import { Card, StyledBody } from "baseui/card";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
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

const itemProps = {
  backgroundColor: "mono300",
  height: "scale1000",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

export default () => (
  <FlexGrid
    flexGridColumnCount={2}
    flexGridColumnGap="scale800"
    flexGridRowGap="scale800"
  >
    <FlexGridItem>
      <Calendar {...itemProps} />
    </FlexGridItem>
    <FlexGridItem>
      <LocationCard {...itemProps} />
    </FlexGridItem>
  </FlexGrid>
);
