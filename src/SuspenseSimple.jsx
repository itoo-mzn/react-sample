import { Suspense } from "react";
import ThrowPromise from "./ThrowPromise.jsx";

export default function SuspenseSimple() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <ThrowPromise />
    </Suspense>
  );
}
