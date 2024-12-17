import Image from "next/image"
import { IntegrationCompanyType } from "@/lib/types/integration"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CompanyInfoProps {
  info: IntegrationCompanyType
}

export function CompanyInfoCard({ info }: CompanyInfoProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About Companies</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12">
            <Image
              src={info.logo}
              alt={info.name}
              className="rounded-lg object-contain"
              fill
            />
          </div>
          <h3 className="font-semibold">{info.name}</h3>
        </div>
        <p className="text-sm text-muted-foreground">{info.description}</p>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm font-medium">Categories</span>
            <div className="flex gap-2">
              {info.categories.map((category) => (
                <Badge key={category} variant="secondary">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-medium">License</span>
            <span className="text-sm">{info.license}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

