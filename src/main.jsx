import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MaterialBasic from "./MaterialBasic.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MaterialBasic />
  </StrictMode>,
);
