import { Outlet } from "react-router-dom";

// import { Sidebar } from "@/components/sidebar";

export function AppLayout() {
  return (
    <section className="flex min-h-screen antialiased">
      {/* DIV NECESSÁRIO PARA O LAYOUT */}
      <div className="border border-red-500">
        Sidebar
        {/* <Sidebar isOpen={isOpen} toogle={toogle} /> */}
      </div>

      <div className="flex w-full flex-col">
        {/* DIV NECESSÁRIO PARA O LAYOUT */}
        <header className="border border-blue-500">Header</header>

        <main className="w-full flex-1 border border-purple-500">
          <Outlet />
        </main>
      </div>
    </section>
  );
}
