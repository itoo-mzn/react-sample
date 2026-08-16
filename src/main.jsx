import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PortalBasic from "./PortalBasic.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <MotionVariant />
  // </StrictMode>,
  <>
    <div id="dialog"></div>
    <PortalBasic />
  </>,
);
