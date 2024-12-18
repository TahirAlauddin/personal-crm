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
  Home,
  Settings,
  User2Icon,
  Mail,
  PaperclipIcon,
  Notebook,
  Briefcase,
  Contact2Icon,
  LineChart,
  MenuSquare,
  Calendar,
} from "lucide-react";
import Link from "next/link";

// Menu items.
const items = {
  MAIN: [
    {
      title: "Dashboard",
      url: "/",
      icon: Home,
    },
    {
      title: "Notifications",
      url: "/notifications",
      icon: User2Icon,
    },
    {
      title: "Notes",
      url: "#",
      icon: Notebook,
    },
    {
      title: "Tasks",
      url: "#",
      icon: PaperclipIcon,
    },
    {
      title: "Emails",
      url: "#",
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
      icon: LineChart,
    },
    {
      title: "Contacts",
      url: "#",
      icon: Contact2Icon,
    },
    {
      title: "Companies",
      url: "#",
      icon: Briefcase,
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
  ]
};

export function Sidebar() {
  return (
    <SidebarPrimitive>
      <SidebarHeader className="shadow h-14 p-0 pl-4">
        <Image src={"/logo.png"} alt="Logo" width={50} height={50}></Image>
      </SidebarHeader>      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items["MAIN"].map((item) => (
                <SidebarMenuItem key={item.title}>
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
                <SidebarMenuItem key={item.title}>
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
          <SidebarGroupLabel></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items["SETTINGS"].map((item) => (
                <SidebarMenuItem key={item.title}>
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
