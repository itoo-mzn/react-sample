import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ErrorRoot from "./ErrorRoot.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorRoot />
  </StrictMode>,
);
