import { useState } from "react";

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
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
