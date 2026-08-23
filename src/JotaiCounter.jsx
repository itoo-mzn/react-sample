import { useAtom } from "jotai";
import { useResetAtom } from "jotai/utils";
import { counterAtom } from "./atom";

export default function JotaiCounter() {
  const [counter, setCounter] = useAtom(counterAtom);
  const resetCounter = useResetAtom(counterAtom);

  const handleClick = () => {
    setCounter((c) => c + 1);
  };
  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <button onClick={resetCounter}>リセット</button>
      <p>{counter}回、クリックされました。</p>
    </>
  );
}
