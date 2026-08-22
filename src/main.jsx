import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HookReducer from "./HookReducer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HookReducer init={0} />
  </StrictMode>,
);
