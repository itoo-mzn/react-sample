import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import EventMouse from "./EventMouse.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EventMouse
      alt="ロゴ画像"
      defaultSrc="https://www.web-deli.com/image/linkbanner_l.gif"
      afterSrc="https://www.web-deli.com/image/home_chara.gif"
    />
  </StrictMode>,
);
