import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ModuleBasic from "./ModuleBasic.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <h3 className="head">CSS Modules</h3>
    <ModuleBasic />
  </>,
);
