"use client";

import { usePathname } from "next/navigation";
import { AppsTab } from "@/components/settings/tabs/apps";
import { AccountTab } from "@/components/settings/tabs/account";
import { NotificationTab } from "@/components/settings/tabs/notification";
import { LanguageRegionSettings } from "@/components/settings/tabs/language";
import { WorkspaceGeneralTab } from "@/components/settings/tabs/workspace-general";
import { WorkspaceMembersTab } from "@/components/settings/tabs/workspace-members";
import { WorkspaceBillingTab } from "@/components/settings/tabs/workspace-billing";

export function AppSettings() {
  const pathname = usePathname();

  const renderContent = () => {
    switch (pathname) {
      case "/settings/apps":
        return <AppsTab />;
      case "/settings/account":
        return <AccountTab />;
      case "/settings/notification":
        return <NotificationTab />;
      case "/settings/language":
        return <LanguageRegionSettings />;
      case "/settings/workspace/general":
        return <WorkspaceGeneralTab />;
      case "/settings/workspace/members":
        return <WorkspaceMembersTab />;
      case "/settings/workspace/billing":
        return <WorkspaceBillingTab />;
      default:
        return <AppsTab />;
    }
  };

  return renderContent();
}
