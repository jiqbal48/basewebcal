import React from "react";
import ReactDOM from "react-dom";
import R from "ramda";
import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

import Example from "./example";

const engine = new Styletron();

console.log("lightTheme: ", LightTheme);
const vibrentTheme = R.clone(LightTheme);
vibrentTheme.colors.primary = "#dadada";
console.log("vibrentTheme: ", vibrentTheme);

function App() {
  return <Example />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StyletronProvider value={engine}>
    <BaseProvider theme={vibrentTheme}>
      <App />
    </BaseProvider>
  </StyletronProvider>,
  rootElement
);
