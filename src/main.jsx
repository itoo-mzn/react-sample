import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MotionVariant from "./MotionVariant.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MotionVariant />
  </StrictMode>,
);
