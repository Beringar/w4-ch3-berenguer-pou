import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TelefonoContextProvider from "./components/contexts/TelefonoContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <TelefonoContextProvider>
      <App />
    </TelefonoContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
