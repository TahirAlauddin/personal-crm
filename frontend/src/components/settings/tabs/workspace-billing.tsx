"use client";

import { SettingsSection } from "@/components/ui/settings/section";
import { SettingsGroup } from "@/components/ui/settings/group";
import WorkspaceBilling from "@/components/settings/workspace-billings";
export function WorkspaceBillingTab() {
  return (
    <div className="flex flex-col gap-9 p-8">
      <WorkspaceBilling />
    </div>
  );
} 