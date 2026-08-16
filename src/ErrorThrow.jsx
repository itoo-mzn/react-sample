import { useErrorBoundary } from "react-error-boundary";

export default function ErrorThrow() {
  const { showBoundary } = useErrorBoundary();
  const handleClick = () => {
    try {
      throw new Error("An error occured");
    } catch (e) {
      showBoundary(e);
    }
  };

  return (
    <button type="button" onClick={handleClick}>
      エラーイベント
    </button>
  );
}
