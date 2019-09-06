import * as React from "react";
import { StatefulCalendar } from "baseui/datepicker";
import { StatefulList } from "baseui/dnd-list";
import ModifiedSelect from "./nestedOverrides";

const arrowBtnOverrides = ({ $theme }) => {
  return {
    ":focus": {
      backgroundColor: $theme.colors.warning500
    }
  };
};

const overrideObj = {
  CalendarHeader: {
    style: ({ $theme }) => ({
      backgroundColor: $theme.colors.warning
    })
  },
  MonthHeader: {
    style: ({ $theme }) => ({
      backgroundColor: $theme.colors.warning
    })
  },
  MonthYearSelectButton: {
    style: ({ $theme }) => ({
      ":focus": {
        backgroundColor: $theme.colors.warning500,
        outline: "none"
      }
    })
  },
  PrevButton: {
    style: arrowBtnOverrides
  },
  NextButton: {
    style: arrowBtnOverrides
  },
  Day: {
    // how to get value of day. if day is today's date. then color it red
    style: obj => {
      const { $theme, $selected, $isHovered, $isHighlighted, $date } = obj;
      // console.log("full obj: ", obj);
      // console.log("a single day: ", $date.getDay());
      const isItToday = $date.getDate() === 6;
      // console.log(isItToday);
      const bgColor = $selected
        ? $theme.colors.warning
        : $isHovered || $isHighlighted
        ? $theme.colors.warning100
        : "transparent";
      const realBgColor = isItToday ? "red" : bgColor;
      return {
        backgroundColor: realBgColor
      };
    }
  }
};

const datesToExclude = [
  new Date("09/1/2019"),
  new Date("09/2/2019"),
  new Date("09/3/2019"),
  new Date("09/4/2019")
];
const selectableDates = [
  new Date("09/5/2019"),
  new Date("09/6/2019"),
  new Date("09/7/2019"),
  new Date("09/8/2019"),
  new Date("09/11/2019"),
  new Date("09/12/2019"),
  new Date("09/13/2019"),
  new Date("09/14/2019"),
  new Date("09/15/2019"),
  new Date("09/16/2019"),
  new Date("09/20/2019"),
  new Date("09/27/2019"),
  new Date("09/29/2019"),
  new Date("09/30/2019")
];

export default () => {
  return (
    <div>
      <ModifiedSelect />
      {/* <StatefulCalendar
        initialState={{ value: new Date("09/6/2019") }}
        // use the 'onChange' prop to pull data from the component into your application state
        onChange={({ date }) => console.log(date)}
        excludeDates={datesToExclude}
        includeDates={selectableDates}
        value={new Date("09/30/2019")}
        overrides={overrideObj}
      />
      <br />
      <StatefulList
        initialState={{
          items: [1, 2, 3]
        }}
        overrides={{
          Label: {
            style: obj => {
              // console.log("incoming value: ", obj);
              return {
                color: obj.$value === 1 ? "palevioletred" : "green"
              };
            },
            props: {
              "data-test-id": "hello-mars"
            }
          }
        }}
      /> */}
    </div>
  );
};
