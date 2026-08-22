import { useReducer } from "react";

export default function HookReducer({ init }) {
  // State + Reducerの用意
  const [state, dispatch] = useReducer(
    // Reducer関数
    (state, action) => {
      switch (action.type) {
        case "update":
          return { count: state.count + action.step };
        case "reset":
          return { count: action.init };
        default:
          return state;
      }
    },
    // Stateの初期値
    { count: init },
  );

  const handleUp = () => {
    // Reducer経由でStateを更新
    dispatch({ type: "update", step: 1 });
  };
  const handleDown = () => {
    dispatch({ type: "update", step: -1 });
  };
  const handleReset = () => {
    dispatch({ type: "reset", init: 0 });
  };

  return (
    <>
      <button onClick={handleUp}>カウントアップ</button>
      <button onClick={handleDown}>カウントダウン</button>
      <button onClick={handleReset}>カウントリセット</button>
      <p>{state.count}回、クリックされました。</p>
    </>
  );
}
