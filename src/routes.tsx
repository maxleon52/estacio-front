import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "./layout/app";
import { AuthLayout } from "./layout/auth";
import { Login } from "./pages/app/login";
import { ErrorPage } from "./pages/error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [{ path: "/", element: <Login /> }],
  },
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/dashboard", element: <div>dashboard</div> },
      { path: "/reservas", element: <div>reservas</div> },
      { path: "/contratos", element: <div>contratos</div> },
      { path: "/financeiro", element: <div>financeiro</div> },
      { path: "/espacos", element: <div>espacos</div> },
      { path: "/servicos", element: <div>servicos</div> },
      { path: "/comentarios", element: <div>comentarios</div> },
    ],
  },
]);
