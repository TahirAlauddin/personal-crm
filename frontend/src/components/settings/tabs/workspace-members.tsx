"use client";

import { SettingsSection } from "@/components/ui/settings/section";
import { SettingsGroup } from "@/components/ui/settings/group";

export function WorkspaceMembersTab() {
  return (
    <div className="flex flex-col gap-9 p-8">
      <SettingsSection title="Workspace Members">
        <SettingsGroup
          title="Team Members"
          description="Manage your workspace team members and their roles."
        />
      </SettingsSection>
    </div>
  );
} 