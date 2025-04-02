"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus } from "lucide-react"

export function AccountTab() {
  const [firstName, setFirstName] = useState("Brian")
  const [lastName, setLastName] = useState("Frederin")
  const [email] = useState("brian.frederin@example.com")
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true)
  const [supportAccessEnabled, setSupportAccessEnabled] = useState(true)

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-semibold mb-6">My Profile</h1>

      {/* Profile Image */}
      <div className="flex items-start gap-4 mb-8">
        <Avatar className="h-16 w-16 border">
          <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
          <AvatarFallback>BF</AvatarFallback>
        </Avatar>
        <div className="space-y-2">
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="h-8">
              <Plus className="h-3.5 w-3.5 mr-1" />
              Change Image
            </Button>
            <Button size="sm" variant="outline" className="h-8">
              Remove Image
            </Button>
          </div>
          <p className="text-xs text-gray-500">We support PNGs, JPEGs and GIFs under 2MB</p>
        </div>
      </div>

      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
      </div>

      {/* Account Security */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Account Security</h2>

        <div className="space-y-4">
          {/* Email */}
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" value={email} readOnly className="bg-gray-50 text-gray-500" />
            </div>
            <Button variant="outline" size="sm" className="ml-4 whitespace-nowrap">
              Change email
            </Button>
          </div>

          {/* Password */}
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value="••••••••••••" readOnly className="bg-gray-50 text-gray-500" />
            </div>
            <Button variant="outline" size="sm" className="ml-4 whitespace-nowrap">
              Change password
            </Button>
          </div>

          {/* 2-Step Verification */}
          <div className="flex items-center justify-between pt-2">
            <div className="space-y-1">
              <div className="font-medium">2-Step Verifications</div>
              <p className="text-sm text-gray-500">Add an additional layer of security to your account during login.</p>
            </div>
            <Switch checked={twoFactorEnabled} onCheckedChange={setTwoFactorEnabled} />
          </div>
        </div>
      </div>

      {/* Support Access */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Support Access</h2>

        <div className="space-y-4">
          {/* Support access toggle */}
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="font-medium">Support access</div>
              <p className="text-sm text-gray-500">
                You have granted us to access to your account for support purposes until Aug 31, 2023, 9:40 PM.
              </p>
            </div>
            <Switch checked={supportAccessEnabled} onCheckedChange={setSupportAccessEnabled} />
          </div>

          {/* Log out of all devices */}
          <div className="flex items-center justify-between pt-2">
            <div className="space-y-1">
              <div className="font-medium">Log out of all devices</div>
              <p className="text-sm text-gray-500">
                Log out of all other active sessions on other devices besides this one.
              </p>
            </div>
            <Button variant="outline" size="sm">
              Log out
            </Button>
          </div>

          {/* Delete account */}
          <div className="flex items-center justify-between pt-2">
            <div className="space-y-1">
              <div className="font-medium text-red-600">Delete my account</div>
              <p className="text-sm text-gray-500">
                Permanently delete the account and remove access from all workspaces.
              </p>
            </div>
            <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-50">
              Delete Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

