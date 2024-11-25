import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "./layout/app";
import { AuthLayout } from "./layout/auth";
import { Contracts } from "./pages/app/contracts";
import { Dashboard } from "./pages/app/dashboard";
import { Invoices } from "./pages/app/invoices";
import { Login } from "./pages/app/login";
import { Spaces } from "./pages/app/spaces";
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
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/reservas", element: <div>reservas</div> },
      { path: "/contratos", element: <Contracts /> },
      { path: "/financeiro", element: <Invoices /> },
      { path: "/espacos", element: <Spaces /> },
      { path: "/servicos", element: <div>servicos</div> },
      { path: "/comentarios", element: <div>comentarios</div> },
    ],
  },
]);
