import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Container from "./orderConfirm";
import Todo from "./todo";
import { SampleHooks } from "./hooks";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <SampleHooks />
  </>
);
