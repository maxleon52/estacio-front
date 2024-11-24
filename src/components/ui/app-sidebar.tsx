import {
  Building2,
  Calendar1,
  DollarSign,
  FilePenLine,
  Handshake,
  LayoutDashboard,
  MessagesSquare,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Painel de Controle",
    url: "/painel-de-controle",
    icon: LayoutDashboard,
  },
  {
    title: "Reservas",
    url: "/reservas",
    icon: Calendar1,
  },
  {
    title: "Contratos",
    url: "/contratos",
    icon: FilePenLine,
  },
  {
    title: "Financeiro",
    url: "/financeiro",
    icon: DollarSign,
  },
  {
    title: "Espaços",
    url: "/espacos",
    icon: Building2,
  },
  {
    title: "Serviços",
    url: "/servicos",
    icon: Handshake,
  },
  {
    title: "Comentários",
    url: "/comentarios",
    icon: MessagesSquare,
  },
];

export function AppSidebar() {
  const [isActive, setIsActive] = useState(items[0]);
  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader>
        <img className="pr-9" src="/images/logo.svg" alt="" />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    size={"lg"}
                    asChild
                    isActive={item === isActive}
                    onClick={() => setIsActive(item)}
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
