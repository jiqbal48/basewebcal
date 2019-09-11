import * as React from "react";
import { Card, StyledBody } from "baseui/card";
import { Label1, Paragraph1 } from "baseui/typography";
import { Button } from "baseui/button";
import { ButtonGroup, MODE } from "baseui/button-group";
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

const Heading = () => {
  const title = "Select time";
  const instructions =
    "All times listed below are in the selected location's local time zone.";

  return (
    <Block>
      <Label1>{title}</Label1>
      <Paragraph1>{instructions}</Paragraph1>
    </Block>
  );
};

const BlocksOfTime = ({ timeOfDay }) => {
  const timeBlocks = [
    "9:30 am",
    "10:00 am",
    "10:30 am",
    "9:30 am",
    "10:10 am",
    "10:30 am"
    // "9:30 am",
    // "10:00 am",
    // "10:30 am"
  ];
  const [selected, setSelected] = React.useState();
  return (
    <Block display="flex">
      <ButtonGroup
        mode={MODE.radio}
        selected={selected}
        kind="tertiary"
        onClick={(event, index) => {
          setSelected(index);
        }}
        override={{
          Root: {
            style: { color: "red" }
          }
        }}
      >
        {timeBlocks.map((time, index) => (
          <Button key={index}>{time}</Button>
        ))}
      </ButtonGroup>
    </Block>
  );
};

const SelectTime = () => (
  <Card overrides={{ Root: { style: { width: "328px" } } }}>
    <StyledBody>
      <Block display="flex" flexDirection="column">
        <Heading />
        <BlocksOfTime timeOfDay="morning" />
        {/* <BlocksOfTime timeOfDay="afternoon" />
        <BlocksOfTime timeOfDay="evening" /> */}
      </Block>
    </StyledBody>
  </Card>
);

export default () => (
  <Block display="flex">
    <Block display="flex" flexDirection="column">
      {/* <Calendar /> */}
      {/* <LocationCard /> */}
    </Block>
    <SelectTime />
  </Block>
);
