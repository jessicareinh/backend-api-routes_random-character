import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function HomePage() {
  const { data, isLoading, error } = useSWR("/api/random-character", fetcher);

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Failed to load</h1>;

  return (
    <>
      <h1>
        Hello my name is {data.firstName} {data.lastName} and I am {data.age}{" "}
        years old.
      </h1>

      <p>
        I work as a {data.profession}. Pls follow 4 follow on twitter{" "}
        {data.twitter} 🤠.
      </p>
    </>
  );
}
