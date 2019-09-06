import * as React from "react";
import { StatefulCalendar } from "baseui/datepicker";

const arrowBtnOverrides = ({ $theme }) => {
  return {
    ":focus": {
      backgroundColor: $theme.colors.warning500
    }
  };
};

/* const overrideObj = {
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
    style: ({ $theme, $selected, $isHovered, $isHighlighted }) => ({
      backgroundColor: $selected
        ? $theme.colors.warning
        : $isHovered || $isHighlighted
        ? $theme.colors.warning100
        : "transparent"
    })
  }
};
      // initialState={{ value: new Date() }}
      // overrides={overrideObj}
            // excludeDates={datesToExclude}
                  range
      quickSelect
*/
const datesToExclude = [
  new Date("09/1/2019"),
  new Date("09/2/2019"),
  new Date("09/3/2019"),
  new Date("09/4/2019")
];
const selectableDates = [
  new Date("09/5/2019"),
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
const today = new Date();
export default () => {
  return (
    <StatefulCalendar
      // use the 'onChange' prop to pull data from the component into your application state
      onChange={({ date }) => console.log(date)}
      excludeDates={datesToExclude}
      includeDates={selectableDates}
    />
  );
};
