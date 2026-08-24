import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HookMemo from "./HookMemo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HookMemo />
  </StrictMode>,
);
