import { useRouteError } from "react-router-dom";

export default function RouteErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center bg-secondary">
      <h3>{error.status}</h3>
      <h5>{error.statusText}</h5>
      <p>Sorry, an unexpected error has occurred.</p>
    </main>
  );
}
