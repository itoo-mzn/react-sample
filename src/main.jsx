import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SWRBasic from "./SWRBasic.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SWRBasic />
  </StrictMode>,
);
