import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import StateForm from "./StateForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StateForm />
  </StrictMode>,
);
