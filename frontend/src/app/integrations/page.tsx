'use client'

import { useState } from "react"
import { categories, integrations } from "@/lib/data/integrations"
import { IntegrationSidebar } from "@/components/IntegrationSidebar"
import { IntegrationCard } from "@/components/IntegrationCard"

export default function IntegrationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [installedIntegrations, setInstalledIntegrations] = useState(
    new Set(integrations.filter(i => i.installed).map(i => i.id))
  )

  const filteredIntegrations = integrations.filter(integration => 
    selectedCategory === "all" || integration.category === selectedCategory
  )

  const handleInstall = (id: string) => {
    setInstalledIntegrations(prev => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Integration</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <IntegrationSidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <div className="flex-1">
          <div className="grid gap-4 md:grid-cols-2">
            {filteredIntegrations.map(integration => (
              <IntegrationCard
                key={integration.id}
                integration={{
                  ...integration,
                  installed: installedIntegrations.has(integration.id)
                }}
                onInstall={handleInstall}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

