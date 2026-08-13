export default function wrapPromise(promise) {
  let status = "pending";
  let data;
  let wrapper = promise.then(
    (result) => {
      status = "fulfilled";
      data = result;
    },
    (e) => {
      status = "rejected";
      data = e;
    },
  );

  return {
    get() {
      switch (status) {
        case "fulfilled":
          // 成功時は実データを返す
          return data;
        case "rejected":
          // 失敗時はエラーを投げる
          throw data;
        case "pending":
          // 保留中はPromiseを投げる
          throw wrapper;
        default:
          throw new Error("This should not happen");
      }
    },
  };
}
