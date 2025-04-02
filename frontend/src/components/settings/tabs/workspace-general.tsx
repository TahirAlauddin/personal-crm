"use client";

import { SettingsSection } from "@/components/ui/settings/section";
import { SettingsGroup } from "@/components/ui/settings/group";

export function WorkspaceGeneralTab() {
  return (
    <div className="flex flex-col gap-9 p-8">
      <SettingsSection title="Workspace Settings">
        <SettingsGroup
          title="Workspace Information"
          description="Manage your workspace details and preferences."
        />
      </SettingsSection>
    </div>
  );
} 