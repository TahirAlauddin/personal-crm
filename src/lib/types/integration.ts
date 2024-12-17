export interface IntegrationType {
  id: string
  name: string
  description: string
  icon: string
  category: string
  installed: boolean
  companyId: string
  features: string[]
  documentation: string
}

export type CategoryType = {
  id: string
  name: string
  slug: string
}

export interface RelatedAppType {
  id: string
  name: string
  description: string
  icon: string
  installed: boolean
}

export interface IntegrationCompanyType {
  name: string
  description: string
  logo: string
  categories: string[]
  license: string
}