import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RelatedAppType } from "@/lib/types/integration"

interface RelatedAppsProps {
  apps: RelatedAppType[]
}

export function RelatedApps({ apps }: RelatedAppsProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Related Apps</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {apps.map((app) => (
          <Card key={app.id}>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12">
                    <Image
                      src={app.icon}
                      alt={app.name}
                      className="rounded-lg object-contain"
                      fill
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{app.name}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {app.description}
                </p>
                <Button
                  variant={app.installed ? "secondary" : "default"}
                  className="w-full"
                >
                  {app.installed ? "Installed" : "Install"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

