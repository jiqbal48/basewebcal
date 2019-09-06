import * as React from "react";
import { Select } from "baseui/select";

export default () => {
  const [value, setValue] = React.useState([{ label: "Atlanta", id: "ATL" }]);

  return (
    <Select
      overrides={{
        MultiValue: {
          props: {
            overrides: {
              Root: {
                style: {
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                  borderBottomLeftRadius: 10,
                  backgroundColor: "green"
                }
              },
              Action: {
                style: {
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                  ":hover": {
                    backgroundColor: "blue"
                  },
                  ":focus": {
                    backgroundColor: "mediumpurple"
                  }
                }
              },
              Text: {
                style: {
                  color: "palevioletred"
                }
              },
              ActionIcon: {
                props: {
                  color: "palevioletred"
                }
              }
            }
          }
        }
      }}
      multi
      type="search"
      options={[
        { label: "Atlanta", id: "ATL" },
        { label: "Baltimore", id: "BWI" },
        { label: "Chicago", id: "ORD" },
        { label: "Denver", id: "DEN" }
      ]}
      onChange={({ value }) => setValue(value)}
      value={value}
    />
  );
};
