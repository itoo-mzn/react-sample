import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HookRef from "./HookRef.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HookRef />
  </StrictMode>,
);
