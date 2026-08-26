import { useActionState, useOptimistic, useState } from "react";
import { updateForm } from "./action";

export default function BookForm() {
  const [books, setBooks] = useState([]);

  // 楽観的Stateを用意（booksのコピー）
  const [optimisticBooks, setOptimisticBooks] = useOptimistic(
    books,
    (prevBooks, formData) => {
      return [
        ...prevBooks,
        {
          id: crypto.randomUUID(),
          title: formData.get("title"),
          price: formData.get("price"),
          published: formData.get("published"),
          updating: true,
        },
      ];
    },
  );

  const [error, submitAction, isPending] = useActionState(
    // サブミット時に呼び出される関数
    async (prevState, formData) => {
      // 楽観的更新
      setOptimisticBooks(formData);

      const { result, errors } = await updateForm({
        id: crypto.randomUUID(),
        title: formData.get("title"),
        price: formData.get("price"),
        published: formData.get("published"),
      });
      if (!errors) {
        setBooks((prevBooks) => [...prevBooks, result]);
      }
      return errors;
    },
    // アクションに関連するStateの初期値
    null,
  );

  return (
    // form要素のaction属性にsubmit関数を渡す
    <form noValidate action={submitAction}>
      <ul>
        {error?.map((msg) => (
          <li key={msg}>{msg}</li>
        ))}
      </ul>
      <div>
        <label htmlFor="title">書名：</label>
        <br />
        <input id="title" name="title" type="text" size="20" />
      </div>
      <div>
        <label htmlFor="price">価格：</label>
        <br />
        <input id="price" name="price" type="text" size="20" />
      </div>
      <div>
        <label htmlFor="published">刊行日：</label>
        <br />
        <input id="published" name="published" type="text" size="20" />
      </div>
      <div>
        <button type="submit" disabled={isPending}>
          登録
        </button>
      </div>

      <ul>
        {optimisticBooks.map((book) => (
          <li key={book.id}>
            {book.title} - {book.price}円 - {book.published}
            {book.updating && <small>(Updating...)</small>}
          </li>
        ))}
      </ul>
    </form>
  );
}
