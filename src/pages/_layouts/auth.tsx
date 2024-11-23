import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="flex h-screen items-center border border-green-600 antialiased">
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
}
