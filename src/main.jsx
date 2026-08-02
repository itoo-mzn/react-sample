import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import EventCompare from "./EventCompare.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EventCompare />
  </StrictMode>,
);
