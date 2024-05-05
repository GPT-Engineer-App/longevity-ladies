import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#ff6f61", // coral red
    800: "#e65a4c",
    700: "#cc5040",
  },
};

const theme = extendTheme({
  fonts: {
    body: "Arial, Helvetica, sans-serif",
    heading: "Arial, Helvetica, sans-serif",
  },
  colors,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
