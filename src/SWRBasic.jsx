import fetcher from "./fetcher";
import useSWR from "swr";

export default function SWRBasic() {
  const endpoint =
    "https://api.openweathermap.org/data/2.5/weather?q=Tokyo&lang=ja&appid=ea6cbd9501095bfd0b42c922c310fc27";

  // useSWRの第１引数は、キャッシュする際のキーとなる値
  const { data, isLoading, error } = useSWR(endpoint, fetcher);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <figure>
      <h3>test</h3>
      <figcaption>{data?.weather?.[0]?.description}</figcaption>
    </figure>
  );
}
