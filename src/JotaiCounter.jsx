import { useAtom } from "jotai";
import { counterAtom } from "./atom";

export default function JotaiCounter() {
  const [counter, setCounter] = useAtom(counterAtom);

  const handleClick = () => {
    setCounter((c) => c + 1);
  };
  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{counter}回、クリックされました。</p>
    </>
  );
}
