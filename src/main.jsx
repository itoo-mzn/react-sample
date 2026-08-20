import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SWRApp from "./SWRApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SWRApp />
  </StrictMode>,
);
