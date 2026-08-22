import { useEffect, useRef, useState } from "react";

export default function HookCallbackRef() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const address = useRef(null);
  // 住所項目が空でなければ住所項目にフォーカスする
  useEffect(() => {
    if (address.current) {
      address.current.focus();
    }
  }, [show]);

  return (
    <>
      <div>
        <label htmlFor="name">名前：</label>
        <input id="name" type="text" />
      </div>
      <div>
        <label htmlFor="email">メールアドレス：</label>
        <input id="email" type="text" />
        <button onClick={handleClick}>拡張表示</button>
      </div>

      {show && (
        <div>
          <label htmlFor="address">住所：</label>
          <input id="address" type="text" />
        </div>
      )}
    </>
  );
}
