import type React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SettingsSidebar } from "@/components/settings/sidebar";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider className="flex flex-col">
      <h1 className="text-2xl font-medium p-4">App Settings</h1>
      <hr />
      <div className="flex h-full">
        {/* Your existing main sidebar would go here */}
        <SettingsSidebar />
        {/* vertical bar line separator */}
        <div style={{ borderLeft: "1px solid #E4E4E4", height: "100vh" }}></div>

        <div className="flex-1">{children}</div>
      </div>
    </SidebarProvider>
  );
}
