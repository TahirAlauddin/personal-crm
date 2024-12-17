'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { CategoryType } from "../lib/types/integration"

interface SidebarProps {
  categories: CategoryType[]
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

export function IntegrationSidebar({ categories, selectedCategory, onSelectCategory }: SidebarProps) {
  return (
    <div className="w-full max-w-[200px] space-y-2">
      <h2 className="mb-4 text-lg font-semibold tracking-tight">Categories</h2>
      <nav className="space-y-1">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant="ghost"
            className={cn(
              "w-full justify-start",
              selectedCategory === category.slug && "bg-muted"
            )}
            onClick={() => onSelectCategory(category.slug)}
          >
            {category.name}
          </Button>
        ))}
      </nav>
    </div>
  )
}

