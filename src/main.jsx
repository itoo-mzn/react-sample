import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MaterialGrid from "./MaterialGrid.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MaterialGrid />
  </StrictMode>,
);
