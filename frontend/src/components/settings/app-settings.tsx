"use client"

import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SettingsGroup } from "@/components/ui/settings/group"
import { SettingsSection } from "@/components/ui/settings/section"
import { Switch } from "@/components/ui/switch"

export function AppsSettings() {
  return (
    <div className="space-y-8 p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Apps Settings</h2>
        <Button variant="outline">
          Last Visited Page
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <SettingsSection
        title="Startup Settings"
        description="Choose what to show when Apps starts or when you switch workspaces."
      >
        
        {/* Add startup settings controls here */}
      </SettingsSection>

      <SettingsSection title="Date and Time">
        <SettingsGroup
          title="Set timezone automatically using your location"
          description="Reminders, notifications and emails are delivered based on your time zone."
          action={<Switch />}
        >
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div>
              <div className="font-medium">Time Zone</div>
              <div className="text-sm text-muted-foreground">Current time zone setting.</div>
            </div>
            <Button variant="outline">
              (GMT-05:00) (Ukraine Time)
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </SettingsGroup>
      </SettingsSection>

      <SettingsSection title="Privacy">
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
        <SettingsGroup
          title="Show my view history"
          description="People with edit or full access will be able to see when you've viewed a page."
          action={<Switch />}
        />
      </SettingsSection>
    </div>
  )
}

