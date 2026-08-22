import { useReducer } from "react";

export default function HookReducer({ init }) {
  // State + Reducerの用意
  const [state, dispatch] = useReducer(
    // Reducer関数
    (state, action) => {
      switch (action.type) {
        case "update":
          return { count: state.count + 1 };
        default:
          return state;
      }
    },
    // Stateの初期値
    { count: init },
  );

  const handleClick = () => {
    // Reducer経由でStateを更新
    dispatch({ type: "update" });
  };

  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{state.count}回、クリックされました。</p>
    </>
  );
}
