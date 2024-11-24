import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
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
      {
        path: "/dashboard",
        element: <div>Dash</div>,
      },
      { path: "/painel-de-controle", element: <div>painel</div> },
      { path: "/reservas", element: <div>reservas</div> },
      { path: "/contratos", element: <div>contratos</div> },
      { path: "/financeiro", element: <div>financeiro</div> },
      { path: "/espacos", element: <div>espacos</div> },
      { path: "/servicos", element: <div>servicos</div> },
      { path: "/comentarios", element: <div>comentarios</div> },
    ],
  },
]);
