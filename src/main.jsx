import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import JotaiCounter from "./JotaiCounter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <JotaiCounter />
  </StrictMode>,
);
