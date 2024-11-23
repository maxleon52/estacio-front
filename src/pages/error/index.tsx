import { Link, useRouteError } from "react-router-dom";

import { Button } from "@/components/ui/button";

export function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex h-screen w-full flex-col items-center justify-center gap-4"
    >
      <h1>Oops!</h1>
      <p>Desculpe, a página não encontrada.</p>
      <p>
        <i>{error.statusText || error.message}</i> <i>{error.status}</i>
      </p>

      <Link to={"/"}>
        <Button variant={"secondary"}>Voltar</Button>
      </Link>
    </div>
  );
}
