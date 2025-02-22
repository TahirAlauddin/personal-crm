"use client"

import { Globe, LayoutDashboard, Settings, Users, Bell, CreditCard } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"

const generalSettings = [
  {
    title: "Apps",
    icon: LayoutDashboard,
    href: "/settings/apps",
  },
  {
    title: "Account",
    icon: Settings,
    href: "/settings/account",
  },
  {
    title: "Notification",
    icon: Bell,
    href: "/settings/notification",
  },
  {
    title: "Language & Region",
    icon: Globe,
    href: "/settings/language",
  },
]

const workspaceSettings = [
  {
    title: "General",
    icon: Settings,
    href: "/settings/workspace/general",
  },
  {
    title: "Members",
    icon: Users,
    href: "/settings/workspace/members",
  },
  {
    title: "Billing",
    icon: CreditCard,
    href: "/settings/workspace/billing",
  },
]

export function SettingsSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="border-l" side="right" collapsible="none">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>GENERAL SETTINGS</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {generalSettings.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link href={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>WORKSPACE SETTINGS</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {workspaceSettings.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link href={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

