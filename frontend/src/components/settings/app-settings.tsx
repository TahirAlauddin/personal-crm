"use client";

import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { SettingsGroup } from "@/components/ui/settings/group";
import { SettingsSection } from "@/components/ui/settings/section";
import { Switch } from "@/components/ui/switch";
import Dropdown from "../Dropdown";

export function AppsSettings() {
  return (
    <div className="flex flex-col gap-9 p-8">
      
      <SettingsSection
        title="Apps Settings"
        >
        {/* Startup settings */}
        <SettingsGroup
          title="Startup Settings"
          description="Choose what to show when Apps starts or when you switch workspaces."
          action={

            <Button variant="outline">
              Last Visited Page
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          }
        >
          {/* Add startup settings controls here */}
        </SettingsGroup>
      </SettingsSection>

      {/* Timezone settings */}
      <SettingsSection title="Date and Time">
        <SettingsGroup
          title="Set timezone automatically using your location"
          description="Reminders, notifications and emails are delivered based on your time zone."
          action={<Switch />}
        >
         </SettingsGroup>
         <SettingsGroup
          title="Time Zone"
          description="Current time zone setting."
          action={<Dropdown buttonText="(GMT-07:00) US/Arizona (MST)" />}
        ></SettingsGroup>
      </SettingsSection>

      {/* Privacy settings */}
      <SettingsSection title="Privacy">
        {/* Cookie settings */}
        <SettingsGroup
          title="Cookie Settings"
          description="Customize cookies. See Cookies Notice for details."
          action={
            <Button variant="outline">
              Customize
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          }
        />
        {/* View history */}
        <SettingsGroup
          title="Show my view history"
          description="People with edit or full access will be able to see when you've viewed a page."
          action={<Switch />}
        />
      </SettingsSection>
    </div>
  );
}
