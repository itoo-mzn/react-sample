import { useState } from "react";
import "./StateTodo.css";

export default function StateTodo() {
  const [maxId, setMaxId] = useState(1);
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState([]);
  // ソート順。降順ならtrue
  const [desc, setDesc] = useState(true);

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

  const handleSort = () => {
    const sorted = [...todo];
    sorted.sort((m, n) => {
      if (desc) {
        return n.created.getTime() - m.created.getTime();
      } else {
        return m.created.getTime() - n.created.getTime();
      }
    });
    setDesc(!desc);
    setTodo(sorted);
  };

  const handleRemove = (e) => {
    setTodo(todo.filter((item) => item.id !== Number(e.target.dataset.id)));
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
      <button type="button" onClick={handleSort}>
        ソート（{desc ? "↑" : "↓"}）
      </button>
      <hr />
      <ul>
        {todo.map((item) => (
          <li key={item.id} className={item.isDone ? "done" : ""}>
            {item.title}
            <button type="button" onClick={handleDone} data-id={item.id}>
              完了
            </button>
            <button type="button" onClick={handleRemove} data-id={item.id}>
              削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
