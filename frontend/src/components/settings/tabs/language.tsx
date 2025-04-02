"use client";

import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SettingsSection } from "@/components/ui/settings/section";
import { SettingsGroup } from "@/components/ui/settings/group";

export function LanguageTab() {
  return (
    <div className="flex flex-col gap-9 p-8">
      <SettingsSection title="Language & Region">
        <SettingsGroup
          title="Language"
          description="Select your preferred language"
          action={
            <Button variant="outline">
              English
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          }
        />
      </SettingsSection>
    </div>
  );
} 