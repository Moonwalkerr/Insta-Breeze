import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import theme from "./theme/theme";
import { ChakraProvider } from "@chakra-ui/react";
import ContextProvider from "./context/context";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
