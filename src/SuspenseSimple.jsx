import { Suspense } from "react";
import ThrowResult from "./ThrowResult.jsx";

export default function SuspenseSimple() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <ThrowResult />
    </Suspense>
  );
}
