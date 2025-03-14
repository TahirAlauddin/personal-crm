import Image from "next/image"
import { Search } from "lucide-react"

export default function HelpCenter() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-64 border-r shrink-0">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold">Help Center</h1>
        </div>

        <nav className="p-4">
          <div className="mb-6">
            <h2 className="text-xs font-semibold text-gray-500 mb-2">GETTING STARTED</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  What is CRM?
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  What to do
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Menu Function
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Main Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Apps and Extension
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Navigating Apps
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-xs font-semibold text-gray-500 mb-2">REFERENCE</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Email & Calendar
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Integration
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Data Syncing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Security & Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold text-gray-500 mb-2">GUIDES</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Forms
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Tasks & To-do
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Ads Management
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Mailing
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="w-24 h-24 mx-auto mb-4">
              <Image
                src="/helpcenter-svg.png?height=96&width=96"
                alt="CRM Logo"
                width={96}
                height={96}
                className="mx-auto"
              />
            </div>
            <h1 className="text-2xl font-bold mb-2">CRM documentations, integrations, and guides references</h1>
            <p className="text-gray-600 mb-6">
              CRMgives you everything you need to build the perfect relationship management tool for your customer,
              merchants and teams.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-16 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-400">
                <span className="border rounded px-1 mr-1">⌘</span>
                <span className="border rounded px-1">F</span>
              </div>
            </div>
          </div>

          {/* Getting Started Section */}
          <section className="mb-12">
            <h2 className="text-xl font-bold mb-4">Getting Started</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card title="What is CRM?" description="Discover how CRMcan transform your workflow." />
              <Card title="What to do" description="Discover how CRMcan transform your workflow." />
              <Card title="Menu Function" description="Discover how CRMcan transform your workflow." />
              <Card title="Main Features" description="Discover how CRMcan transform your workflow." />
              <Card title="Apps and Extension" description="Discover how CRMcan transform your workflow." />
              <Card title="Navigating Apps" description="Discover how CRMcan transform your workflow." />
            </div>
          </section>

          {/* Reference Section */}
          <section className="mb-12">
            <h2 className="text-xl font-bold mb-4">Reference</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card title="Email & Calendar" description="Discover how CRMcan transform your workflow." />
              <Card title="Account" description="Discover how CRMcan transform your workflow." />
              <Card title="Integration" description="Discover how CRMcan transform your workflow." />
              <Card title="Data Syncing" description="Discover how CRMcan transform your workflow." />
              <Card title="Security & Privacy" description="Discover how CRMcan transform your workflow." />
              <Card title="Support" description="Discover how CRMcan transform your workflow." />
            </div>
          </section>

          {/* Guides Section */}
          <section>
            <h2 className="text-xl font-bold mb-4">Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card title="Forms" description="Discover how CRMcan transform your workflow." />
              <Card title="Tasks & To-do" description="Discover how CRMcan transform your workflow." />
              <Card title="Ads Management" description="Discover how CRMcan transform your workflow." />
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

function Card({ title, description }: { title: string; description: string }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

