import { useEffect, useState } from "react";
import fetcher from "./fetcher";

export default function SWRPre() {
  const [data, setData] = useState(null);
  const [isRefresh, setIsRefresh] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const endpoint =
    "https://api.openweathermap.org/data/2.5/weather?q=Tokyo&lang=ja&appid=ea6cbd9501095bfd0b42c922c310fc27";

  useEffect(() => {
    // リフレッシュする必要がなければ処理しない
    if (!isRefresh) {
      return;
    }
    setIsLoading(true);
    setError("");
    fetcher(endpoint)
      .then((result) => {
        setData(result);
        setIsRefresh(false);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [isRefresh]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <figure>
      <figcaption>{data?.weather?.[0]?.description}</figcaption>
    </figure>
  );
}
