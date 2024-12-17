'use client'

import { MoreVertical, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

interface Notification {
  id: string
  type: 'mention' | 'access' | 'update' | 'task'
  user: {
    name: string
    avatar: string
    initials: string
  }
  content: {
    action: string
    target: string
    mention?: string
    date?: string
  }
  timestamp: string
  team: string
  read: boolean
}

export default function NotificationComponent() {
  const notifications: Notification[] = [
    {
      id: '1',
      type: 'mention',
      user: {
        name: 'Frank Edward',
        avatar: '/avatars/frank.png',
        initials: 'FE'
      },
      content: {
        action: 'mentioned you in a comment in',
        target: 'Design Team Reports',
        mention: 'have you update this design so we can use it on next meeting?'
      },
      timestamp: '3 hours ago',
      team: 'Design Team',
      read: false
    },
    {
      id: '2',
      type: 'access',
      user: {
        name: 'Elsa Wright',
        avatar: '/avatars/elsa.png',
        initials: 'EW'
      },
      content: {
        action: 'Asking for edit access in',
        target: 'Monthly Team Progress'
      },
      timestamp: 'Yesterday',
      team: 'Marketing Team',
      read: false
    },
    {
      id: '3',
      type: 'access',
      user: {
        name: 'Elsa Wright',
        avatar: '/avatars/elsa.png',
        initials: 'EW'
      },
      content: {
        action: 'Asking for edit access in',
        target: 'Monthly Team Progress'
      },
      timestamp: 'Yesterday',
      team: 'Marketing Team',
      read: false
    }
    // Add more notifications as needed
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <h1 className="text-2xl font-semibold">Notifications</h1>
          <Tabs defaultValue="all" className="sm:ml-4">
            <TabsList>
              <TabsTrigger value="all" className="relative">
                All
                <span className="ml-1 rounded-full bg-red-100 px-2 py-0.5 text-xs text-red-600">
                  12
                </span>
              </TabsTrigger>
              <TabsTrigger value="tasks">Tasks</TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                Sort By <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Newest First</DropdownMenuItem>
              <DropdownMenuItem>Oldest First</DropdownMenuItem>
              <DropdownMenuItem>Unread First</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline">Mark All as Read</Button>
          <Button variant="outline">Notification Settings</Button>
        </div>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-start justify-between p-4 rounded-lg border bg-white"
          >
            <div className="flex gap-4">
              <Avatar>
                <AvatarImage src={notification.user.avatar} />
                <AvatarFallback>{notification.user.initials}</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-medium">{notification.user.name}</span>
                  <span className="text-muted-foreground">
                    {notification.content.action}
                  </span>
                  <span className="font-medium">{notification.content.target}</span>
                </div>
                {notification.content.mention && (
                  <div className="mt-2 text-sm text-muted-foreground border-l-2 border-muted pl-3">
                    @brianf {notification.content.mention}
                  </div>
                )}
                {notification.type === 'access' && (
                  <div className="mt-2 flex gap-2">
                    <Button variant="destructive" size="sm">Decline</Button>
                    <Button size="sm">Accept</Button>
                  </div>
                )}
                <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{notification.timestamp}</span>
                  <span>•</span>
                  <span>{notification.team}</span>
                </div>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

