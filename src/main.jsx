import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SWRPre from "./SWRPre.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SWRPre />
  </StrictMode>,
);
