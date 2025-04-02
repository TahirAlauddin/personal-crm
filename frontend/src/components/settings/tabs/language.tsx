"use client"

import type React from "react"

import { useState } from "react"
import { Globe, Settings, User, Bell, Wrench, Users, CreditCard } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"

export function LanguageRegionSettings() {
  const [language, setLanguage] = useState("english")
  const [region, setRegion] = useState("united-states")
  const [startWeekOnMonday, setStartWeekOnMonday] = useState(true)

  return (

      <div className="flex-1 w-full">
        <div className="max-w-3xl mx-auto py-8 px-8">
          <h1 className="text-2xl font-semibold mb-6">Language & Region</h1>

          <Separator className="mb-8" />

          {/* Language Setting */}
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-2">Language</h2>
            <p className="text-sm text-gray-500 mb-4">Change the language used in the user interface.</p>

            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-full max-w-xs">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="spanish">Spanish</SelectItem>
                <SelectItem value="french">French</SelectItem>
                <SelectItem value="german">German</SelectItem>
                <SelectItem value="japanese">Japanese</SelectItem>
                <SelectItem value="chinese">Chinese</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Region Setting */}
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-2">Region</h2>
            <p className="text-sm text-gray-500 mb-4">Choose what region that you used on this apps.</p>

            <Select value={region} onValueChange={setRegion}>
              <SelectTrigger className="w-full max-w-xs">
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="united-states">United States</SelectItem>
                <SelectItem value="europe">Europe</SelectItem>
                <SelectItem value="asia-pacific">Asia Pacific</SelectItem>
                <SelectItem value="latin-america">Latin America</SelectItem>
                <SelectItem value="middle-east">Middle East</SelectItem>
                <SelectItem value="africa">Africa</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Start Week Setting */}
          <div className="mb-8">
            <div className="flex items-center justify-between max-w-xs">
              <div>
                <h2 className="text-lg font-medium mb-2">Start Week on Monday</h2>
                <p className="text-sm text-gray-500">This will change how all calendars in your app look.</p>
              </div>
              <Switch checked={startWeekOnMonday} onCheckedChange={setStartWeekOnMonday} />
            </div>
          </div>
        </div>
      </div>
  )
}