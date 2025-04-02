"use client";

import { SettingsSection } from "@/components/ui/settings/section";
import { SettingsGroup } from "@/components/ui/settings/group";

export function WorkspaceBillingTab() {
  return (
    <div className="flex flex-col gap-9 p-8">
      <SettingsSection title="Billing & Subscription">
        <SettingsGroup
          title="Current Plan"
          description="Manage your subscription and billing details."
        />
      </SettingsSection>
    </div>
  );
} 