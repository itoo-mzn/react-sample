import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import JotaiTodo from "./JotaiTodo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <JotaiTodo />
  </StrictMode>,
);
