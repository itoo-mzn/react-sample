import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HookCallbackRef from "./HookCallbackRef.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HookCallbackRef />
  </StrictMode>,
);
