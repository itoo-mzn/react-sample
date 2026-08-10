import { useForm } from "react-hook-form";
import "./FormBasic.css";

export default function FormBasic() {
  const defaultValues = {
    name: "テスト太郎",
    email: "admin@example.com",
    gender: "male",
    memo: "",
  };

  // フォームの初期化
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const onsubmit = (data) => console.log(data);
  const onerror = (err) => console.log(err);

  return (
    <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
      <div>
        <label htmlFor="name">名前</label>
        <br />
        <input
          id="name"
          type="text"
          {...register("name", {
            required: "名前は必須です",
            maxLength: {
              value: 20,
              message: "名前は20文字以内で入力してください",
            },
          })}
        />
        <div className="error">{errors.name?.message}</div>
      </div>
      <div>
        <label>性別：</label>
        <br />
        <label>
          <input
            id="male"
            type="radio"
            value="male"
            {...register("gender", {
              required: "性別は必須です",
            })}
          />
          男性
        </label>
        <label>
          <input
            id="female"
            type="radio"
            value="female"
            {...register("gender", {
              required: "性別は必須です",
            })}
          />
          女性
        </label>
        <div className="error">{errors.gender?.message}</div>
      </div>
      <div>
        <label htmlFor="email">メールアドレス：</label>
        <br />
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "メールアドレスは必須です",
            pattern: {
              value: /^[a-z\-\d._%+]+@[a-z\-\d]+(?:\.[a-z\-\d]+)*\.[a-z]{2,}$/i,
              message: "メールアドレスの形式で入力してください",
            },
          })}
        />
        <div className="error">{errors.email?.message}</div>
      </div>
      <div>
        <label htmlFor="memo">備考：</label>
        <br />
        <textarea
          id="memo"
          {...register("memo", {
            required: "備考は必須です",
            minLength: {
              value: 10,
              message: "備考は10文字以上で入力してください",
            },
          })}
        />
        <div className="error">{errors.memo?.message}</div>
      </div>
      <div>
        <button type="submit">送信</button>
      </div>
    </form>
  );
}
