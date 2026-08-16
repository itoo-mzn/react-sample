export default function ErrorThrow() {
  if (Math.random() < 0.6) {
    throw new Error("An error occured");
  }
  return <p>正しく実行されました。</p>;
}
