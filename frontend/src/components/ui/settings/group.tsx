import type * as React from "react"
import { cn } from "@/lib/utils"

interface SettingsGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  action?: React.ReactNode
  children?: React.ReactNode
}

export function SettingsGroup({ title, description, action, children, className, ...props }: SettingsGroupProps) {
  return (
    <div className={cn("space-y-6", className)} {...props}>
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <h4 className="text-base font-medium">{title}</h4>
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>
        {action && <div>{action}</div>}
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  )
}

