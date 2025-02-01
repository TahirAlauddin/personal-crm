import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { IntegrationType } from "@/lib/types/integration"
import Link from "next/link"

interface IntegrationCardProps {
  integration: IntegrationType
  onInstall: (id: string) => void
}

export function IntegrationCard({ integration, onInstall }: IntegrationCardProps) {
  return (
    <Link href={'/integrations/' + integration.name}> 
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12">
              <Image
                src={integration.icon}
                alt={integration.name}
                className="rounded-lg object-contain"
                fill
              />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold">{integration.name}</h3>
              <p className="text-sm text-muted-foreground">
                {integration.description}
              </p>
            </div>
          </div>
          <Button
            variant={integration.installed ? "secondary" : "default"}
            onClick={() => onInstall(integration.id)}
            className="shrink-0"
          >
            {integration.installed ? "Installed" : "Install"}
          </Button>
        </div>
      </CardContent>
    </Card>
    </Link>

  )
}

