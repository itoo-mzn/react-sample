import wrapPromise from "./wrapPromise.jsx";

const info = getInfo();
export default function ThrowResult() {
  const result = info.get();
  return <h1>{result}</h1>;
}

function getInfo() {
  return wrapPromise(
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve("正しく表示できました");
        } else {
          reject("エラーが発生しました");
        }
      }, 2000);
    }),
  );
}
