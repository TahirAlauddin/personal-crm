import Image from "next/image";
import {
  Sidebar as SidebarPrimitive,
  SidebarSeparator,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenuButton,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Settings,
  Mail,
  Notebook,
  Contact2Icon,
  MenuSquare,
  Calendar,
  ChartPie,
  ChartLine,
  Bell,
  Clipboard,
  BriefcaseBusiness,
} from "lucide-react";
import Link from "next/link";

// Menu items.
const items = {
  MAIN: [
    {
      title: "Dashboard",
      url: "/",
      icon: ChartPie,
    },
    {
      title: "Notifications",
      url: "/notifications",
      icon: Bell,
    },
    {
      title: "Notes",
      url: "/notes",
      icon: Notebook,
    },
    {
      title: "Tasks",
      url: "#",
      icon: Clipboard,
    },
    {
      title: "Emails",
      url: "/email",
      icon: Mail,
    },
    {
      title: "Calendars",
      url: "#",
      icon: Calendar,
    },
  ],
  DATABASE: [
    {
      title: "Analytics",
      url: "#",
      icon: ChartLine,
    },
    {
      title: "Contacts",
      url: "/customers",
      icon: Contact2Icon,
    },
    {
      title: "Companies",
      url: "/companies",
      icon: BriefcaseBusiness,
    },
  ],
  SETTINGS: [
    {
      title: "Integrations",
      url: "/integrations",
      icon: MenuSquare,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ],
};

export function Sidebar() {
  return (
    <SidebarPrimitive>
      <SidebarHeader className="shadow items-center justify-center h-14 p-0 pl-4">
        <div className="flex items-center p-2 gap-2">
          <Image src={"/logo.svg"} alt="Logo" width={40} height={40} />
          <h1 className="font-bold text-xl">Peronsal CRM</h1>
        </div>
      </SidebarHeader>
      <SidebarContent className="text-neutral-80">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items["MAIN"].map((item) => (
                <SidebarMenuItem className="hover:text-black" key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>DATABASE</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items["DATABASE"].map((item) => (
                <SidebarMenuItem className="hover:text-black" key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items["SETTINGS"].map((item) => (
                <SidebarMenuItem className="hover:text-black" key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </SidebarPrimitive>
  );
}
