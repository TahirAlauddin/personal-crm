"use client"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"

export function NotificationTab() {
  // In-app notification settings
  const [mobilePushEnabled, setMobilePushEnabled] = useState(true)
  const [desktopPushEnabled, setDesktopPushEnabled] = useState(true)
  const [dailyDigestEnabled, setDailyDigestEnabled] = useState(true)

  // Email notification settings
  const [workspaceActivityEnabled, setWorkspaceActivityEnabled] = useState(true)
  const [alwaysSendEmailEnabled, setAlwaysSendEmailEnabled] = useState(true)
  const [emailDigestEnabled, setEmailDigestEnabled] = useState(true)

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      {/* In-app Notifications */}
      <h1 className="text-xl font-semibold mb-6">In-app Notifications</h1>

      <div className="space-y-6 mb-8">
        {/* Mobile push notifications */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="font-medium">Mobile push notifications</h3>
            <p className="text-sm text-gray-500">
              Receive push notifications on mentions and comments via your mobile app
            </p>
          </div>
          <Switch checked={mobilePushEnabled} onCheckedChange={setMobilePushEnabled} />
        </div>

        {/* Desktop push notifications */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="font-medium">Desktop push notifications</h3>
            <p className="text-sm text-gray-500">
              Receive push notifications on mentions and comments immediately on your desktop app
            </p>
          </div>
          <Switch checked={desktopPushEnabled} onCheckedChange={setDesktopPushEnabled} />
        </div>

        {/* Daily digest */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="font-medium">Daily digest</h3>
            <p className="text-sm text-gray-500">
              Includes Productivity stats and tasks due today. Sent every morning.
            </p>
          </div>
          <Switch checked={dailyDigestEnabled} onCheckedChange={setDailyDigestEnabled} />
        </div>
      </div>

      <Separator className="my-8" />

      {/* Email Notifications */}
      <h2 className="text-xl font-semibold mb-6">Email Notifications</h2>

      <div className="space-y-6">
        {/* Activity in your workspace */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="font-medium">Activity in your workspace</h3>
            <p className="text-sm text-gray-500">
              Receive emails when you get comments, mentions, page invites, reminders, access requests, and property
              changes
            </p>
          </div>
          <Switch checked={workspaceActivityEnabled} onCheckedChange={setWorkspaceActivityEnabled} />
        </div>

        {/* Always send email notifications */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="font-medium">Always send email notifications</h3>
            <p className="text-sm text-gray-500">
              Receive emails about activity in your workspace, even when you're active on the app
            </p>
          </div>
          <Switch checked={alwaysSendEmailEnabled} onCheckedChange={setAlwaysSendEmailEnabled} />
        </div>

        {/* Email digest */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="font-medium">Email digest</h3>
            <p className="text-sm text-gray-500">
              Receive email digests every 8 hours for changes to pages you're subscribed to
            </p>
          </div>
          <Switch checked={emailDigestEnabled} onCheckedChange={setEmailDigestEnabled} />
        </div>
      </div>
    </div>
  )
}

