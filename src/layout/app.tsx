import { Outlet } from "react-router-dom";

import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export function AppLayout() {
  return (
    <SidebarProvider className="">
      <AppSidebar />

      <div className="flex w-full flex-col">
        <header className="sticky left-0 right-0 top-0 z-10 flex h-16 items-center justify-between bg-est-FBFDFE p-5">
          <div className="flex items-center gap-2">
            <SidebarTrigger />
          </div>
        </header>
        <main className="w-full !overflow-hidden rounded-tl-[20px] bg-est-EDF4F7 p-6">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}
