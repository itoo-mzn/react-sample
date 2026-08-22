import { useState } from "react";

export default function HookRefNg() {
  // 関数コンポーネントは再描画のたび（stateが変わるたび）に実行されるため、
  // このローカル変数はそのたびに初期化される
  // なので、このタイマー機能はバグっている
  let id = null;
  const [count, setCount] = useState(0);

  const handleStart = () => {
    if (id === null) {
      id = setInterval(() => setCount((c) => c + 1), 1000);
    }
  };

  const handleEnd = () => {
    clearInterval(id);
    id = null;
  };

  return (
    <>
      <button onClick={handleStart}>開始</button>
      <button onClick={handleEnd}>終了</button>
      <p>{count}秒経過</p>
    </>
  );
}
