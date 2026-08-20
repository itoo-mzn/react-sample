import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { SWRConfig } from "swr";
import SWRBasic from "./SWRBasic";
import fetcher from "./fetcher";

function ErrorFallback({ error, resetErrorBounday }) {
  setTimeout(resetErrorBounday, 5000);
  return <p>{error.message}</p>;
}

export default function SWRApp() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<p>Loading...</p>}>
        <SWRConfig
          value={{
            fetcher,
            suspense: true,
          }}
        >
          <SWRBasic />
        </SWRConfig>
      </Suspense>
    </ErrorBoundary>
  );
}
