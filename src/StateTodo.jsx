import { useState } from "react";
import "./StateTodo.css";

export default function StateTodo() {
  const [maxId, setMaxId] = useState(1);
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState([]);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleClick = () => {
    setTodo([
      // 元の配列を複製したもの + 新しい要素 で新しい配列を作る
      ...todo,
      {
        id: maxId,
        title,
        created: new Date(),
        isDone: false,
      },
    ]);
    setMaxId(maxId + 1);
  };

  const handleDone = (e) => {
    setTodo(
      todo.map((item) => {
        if (item.id === Number(e.target.dataset.id)) {
          return {
            ...item,
            isDone: true,
          };
        } else {
          return item;
        }
      }),
    );
  };

  return (
    <div>
      <label>
        やること：
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChangeTitle}
        />
      </label>
      <button type="button" onClick={handleClick}>
        追加
      </button>
      <hr />
      <ul>
        {todo.map((item) => (
          <li key={item.id} className={item.isDone ? "done" : ""}>
            {item.title}
            <button type="button" onClick={handleDone} data-id={item.id}>
              完了
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
