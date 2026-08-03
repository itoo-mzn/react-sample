import { useId, useState } from "react";

export default function StateForm() {
  const id = useId();

  // フォームに関する値は一つのオブジェクトにまとめる
  const [form, setForm] = useState({
    name: "山田太郎",
    age: "30",
  });

  const handleForm = (e) => {
    setForm({
      // 現在のformの値をセット
      ...form,
      // ユーザが入力した値で更新
      // 算出プロパティ
      [e.target.name]: e.target.value,
    });
  };

  const show = () => {
    console.log(`こんにちは、${form.name} (${form.age}歳)さん。`);
  };

  return (
    <form>
      <div>
        <label htmlFor={id + "-name"}>名前：</label>
        <input
          id={id + "-name"}
          name="name"
          type="text"
          value={form.name}
          onChange={handleForm}
        />
      </div>
      <div>
        <label htmlFor="age">年齢：</label>
        <input
          id="age"
          name="age"
          type="number"
          value={form.age}
          onChange={handleForm}
        />
      </div>
      <div>
        <button type="button" onClick={show}>
          送信
        </button>
      </div>
      <p>
        こんにちは、{form.name} ({form.age}歳)さん。
      </p>
    </form>
  );
}
