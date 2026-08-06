import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import StateTodo from "./StateTodo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StateTodo />
  </StrictMode>,
);
