import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MotionBasic from "./MotionBasic.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <MotionBasic />
  </>,
);
