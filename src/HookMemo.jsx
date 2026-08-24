import { useState } from "react";
import { MyButton, MyCounter } from "./HookMemoChild";

const sleep = (delay) => {
  const start = Date.now();
  while (Date.now() - start < delay);
};

export default function HookMemo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const increment = () => setCount1((c) => c + 1);
  const decrement = () => setCount2((c) => c - 1);

  // count2を更新（カウントダウン）しても、（コンポーネントが再描画されるため）
  // count2は関係ないこの関数が実行され、応答が遅くなる
  const heavyProcess = () => {
    sleep(1000);
    return count1 + 100;
  };

  return (
    <>
      <div>
        <MyButton id="btn1" handleClick={increment}>
          カウントアップ
        </MyButton>
        <MyCounter id="c1" value={count1} />
        <p>{heavyProcess()}</p>
      </div>
      <div>
        <MyButton id="btn2" handleClick={decrement}>
          カウントダウン
        </MyButton>
        <MyCounter id="c2" value={count2} />
        <p></p>
      </div>
    </>
  );
}
