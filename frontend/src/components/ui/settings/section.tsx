import type * as React from "react"
import { cn } from "@/lib/utils"

interface SettingsSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  children?: React.ReactNode
}

export function SettingsSection({ title, description, children, className, ...props }: SettingsSectionProps) {
  return (
    <div className={cn("space-y-4", className)} {...props}>
      <div className="space-y-1">
        <h3 className="text-xl font-medium">{title}</h3>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
      <hr />
      <div className="space-y-4">{children}</div>
    </div>
  )
}

