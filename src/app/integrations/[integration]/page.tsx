'use client'

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Settings } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { RelatedApps } from "@/components/related-apps"
import { CompanyInfoCard } from "@/components/company-info"
import { integrations, integrationCompanies } from '@/lib/data/integrations'
import { useParams } from 'next/navigation'
import { IntegrationCompanyType } from "@/lib/types/integration"

export default function IntegrationPage() {
  const params = useParams<{ integration: string }>()
  const name = params.integration;
  const integration = integrations.find(integration => integration.name.toLowerCase() === name?.toString().toLowerCase());

  if (!integration) {
    return <div>Integration not found</div>;
  }

  const companyInfo: IntegrationCompanyType | undefined = integrationCompanies.find(c => c.id === integration.companyId)

  if (!companyInfo) {
    return <div>Company not found</div>;
  }

  const relatedApps = [
    {
      id: "gmail",
      name: "Gmail",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, thing here described.",
      icon: "/integrations/gmail.svg",
      installed: false
    },
    {
      id: "dropbox",
      name: "Dropbox",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, thing here described.",
      icon: "/integrations/dropbox.svg",
      installed: false
    },
    {
      id: "drive",
      name: "Drive",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, thing here described.",
      icon: "/integrations/drive.svg",
      installed: true
    }
  ]

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <Link href="/integrations" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" />
          Integration
        </Link>
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16">
              <Image
                src={integration.icon}
                alt={integration.name}
                className="rounded-xl object-contain"
                fill
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{integration.name}</h1>
              <p className="text-sm text-muted-foreground">{companyInfo?.name}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" asChild>
              <Link href={integration.documentation}>
                View Documentation
              </Link>
            </Button>
            <Button>Install Apps</Button>
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-[1fr,300px]">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-muted-foreground">{integration.description}</p>
            <div className="space-y-2">
              <h2 className="font-semibold">When you integrate your Facebook page with Gorags, you'll be able to:</h2>
              <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-2">
                {integration.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>

              <div className="w-[640px] h-[400px]">
                <video className="w-full h-full" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" controls autoPlay loop muted />
              </div>
        </div>

        <div className="space-y-6">
          <CompanyInfoCard info={companyInfo} />
        </div>
      </div>

      <div className="mt-16">
        <RelatedApps apps={relatedApps} />
      </div>
    </div>
  )
}

