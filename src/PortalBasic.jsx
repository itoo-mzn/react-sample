import { use, useState } from "react";
import { createPortal } from "react-dom";
import "./PortalBasic.css";

export default function PortalBasic() {
  const [show, setShow] = useState(false);
  const handleDialog = () => setShow((s) => !s);

  return (
    <form>
      <button type="button" onClick={handleDialog} disabled={show}>
        ダイアログ表示
      </button>
      {show &&
        // 第２引数の要素に、第１引数の要素を埋め込む
        createPortal(
          <div className="dialog">
            <p>ダイアログ</p>
            <button type="button" onClick={handleDialog}>
              閉じる
            </button>
          </div>,
          document.getElementById("dialog"),
        )}
    </form>
  );
}
