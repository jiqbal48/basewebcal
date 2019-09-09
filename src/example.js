import * as React from "react";
import axios from "axios";
import { StatefulCalendar } from "baseui/datepicker";
import { StatefulList } from "baseui/dnd-list";
import ModifiedSelect from "./nestedOverrides";
import StyletronButton, { MediaQueryExample } from "./learningStyletron";

const axiosConfig = {
  "x-auth-token":
    "PBVibrent-HBNxNeAa7v1ULigd8B4QkGG5jHdBQAtZ08KHvMzhAxhDLhEN1eNw2jf-6CLCT9rl80oHYwDNgXYAkD7g1K0dqsA9S26rCmVEKZtBXFCn-37k6RILSG8df2Y"
};
// axios.interceptors.request.use(axiosConfig);
export const availableAppointmentsCall = config =>
  new Promise((resolve, reject) => {
    const failure = error => {
      reject(error);
    };
    const success = response => {
      if (response) {
        resolve(response);
      } else {
        failure(new Error("NO DATA"));
      }
    };
    axios
      .get(
        "https://pmistagingsub.joinallofus.org/api/schedule/availableTimes",
        Object.assign(config, { axiosConfig })
      )
      .then(success)
      .catch(failure);
  });

const timesConfig = {
  siteId: "hpo-site-walgreensphoenixapachejunction",
  numberOfDays: 60
};
const success = data => {
  console.log("got data from api: ", data);
};
const error = error => {
  console.log("got error from api: ", error);
};
availableAppointmentsCall(timesConfig).then(success, error);

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
      backgroundColor: $theme.colors.primary
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
      {/* <MediaQueryExample /> */}
      {/* <StyletronButton /> */}
      {/* <ModifiedSelect /> */}
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
      <p>loading data</p>
    </div>
  );
};
