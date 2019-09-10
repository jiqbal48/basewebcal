import * as React from "react";
import axios from "axios";
import { StatefulList } from "baseui/dnd-list";
import ModifiedSelect from "./nestedOverrides";
import StyletronButton, { MediaQueryExample } from "./learningStyletron";
import SelectDateTime from "./selectDateTime";

// const axiosConfig = {
//   "x-auth-token":
//     "PBVibrent-HBNxNeAa7v1ULigd8B4QkGG5jHdBQAtZ08KHvMzhAxhDLhEN1eNw2jf-6CLCT9rl80oHYwDNgXYAkD7g1K0dqsA9S26rCmVEKZtBXFCn-37k6RILSG8df2Y"
// };
// // axios.interceptors.request.use(axiosConfig);
// export const availableAppointmentsCall = config => {
//   const newConfig = Object.assign(config, { headers: axiosConfig });
//   console.log("new config: ", newConfig);
//   return new Promise((resolve, reject) => {
//     const failure = error => {
//       reject(error);
//     };
//     const success = response => {
//       if (response) {
//         resolve(response);
//       } else {
//         failure(new Error("NO DATA"));
//       }
//     };
//     axios
//       .get(
//         "https://pmistagingsub.joinallofus.org/api/schedule/availableTimes",
//         newConfig
//       )
//       .then(success)
//       .catch(failure);
//   });
// };

// const timesConfig = {
//   siteId: "hpo-site-walgreensphoenixapachejunction",
//   numberOfDays: 60
// };
// const success = data => {
//   console.log("Success! data from api: ", data);
// };
// const error = error => {
//   console.log("Error! error from api: ", error);
// };

// availableAppointmentsCall(timesConfig).then(success, error);

export default () => {
  return (
    <div>
      <SelectDateTime />
      {/* <MediaQueryExample /> */}
      {/* <StyletronButton /> */}
      {/* <ModifiedSelect /> */}
      {/* 
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
      {/* <p>loading data</p> */}
    </div>
  );
};
