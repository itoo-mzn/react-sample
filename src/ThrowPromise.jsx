let flag = false;

export default function ThrowPromise() {
  if (flag) {
    return <h1>正しく表示できました</h1>;
  }
  throw new Promise((resolve, reject) => {
    setTimeout(() => {
      flag = true;
      // Promiseを解決することで、Suspenseが再レンダリングされ、正しく表示されるようになる
      resolve("Success!");
    }, 3000);
  });
}
