"use client";
import {
  Search,
  ChevronDown,
  Plus,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function Dashboard() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Page Content */}
      <main className="flex-1 overflow-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-9 items-center">
            <h1 className="text-2xl font-semibold">Companies</h1>

            <div className="flex items-center gap-1">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-9">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M17 10H3" />
                      <path d="M21 6H3" />
                      <path d="M21 14H3" />
                      <path d="M17 18H3" />
                    </svg>
                    List
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>List</DropdownMenuItem>
                  <DropdownMenuItem>Kanban</DropdownMenuItem>
                  <DropdownMenuItem>Table</DropdownMenuItem>
                  <DropdownMenuItem>Grid</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="outline" size="sm" className="h-9">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                  <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
                  <path d="M3 16v3a2 2 0 0 0 2 2h3" />
                  <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
                </svg>
                Kanban
              </Button>

              <Button variant="outline" size="sm" className="h-9">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M3 3h18v18H3z" />
                  <path d="M21 12H3" />
                  <path d="M12 3v18" />
                </svg>
                Table
              </Button>

              <Button variant="outline" size="sm" className="h-9">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <rect width="7" height="7" x="3" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="14" rx="1" />
                  <rect width="7" height="7" x="3" y="14" rx="1" />
                </svg>
                Grid
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-9">
                  Sort By
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Name</DropdownMenuItem>
                <DropdownMenuItem>Date Added</DropdownMenuItem>
                <DropdownMenuItem>Status</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="border-l h-9 mx-2"></div>
            <Button
              size="sm"
              className="h-9 bg-black text-white hover:bg-gray-800"
            >
              <Plus className="mr-2 h-4 w-4" /> Add Company
            </Button>
          </div>
        </div>

        {/* Status Filters */}
        <div className="flex items-center mb-6 gap-3">
          <StatusFilter label="All Companies" active />
          <StatusFilter label="Active" color="blue" />
          <StatusFilter label="Lead" color="orange" />
          <StatusFilter label="Pending" color="yellow" />
          <StatusFilter label="Cancelled" color="red" />
          <StatusFilter label="Done" color="gray" />

          <div className="ml-auto">
            <Button variant="ghost" size="sm">
              <Plus className="mr-2 h-4 w-4" /> Add Categories
            </Button>
          </div>
        </div>

        {/* Companies Table */}
        <div className="bg-white border rounded-md overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">
                  Companies Name{" "}
                  <ChevronDown className="inline-block h-4 w-4 ml-1" />
                </TableHead>
                <TableHead>
                  Industry <ChevronDown className="inline-block h-4 w-4 ml-1" />
                </TableHead>
                <TableHead>
                  Location <ChevronDown className="inline-block h-4 w-4 ml-1" />
                </TableHead>
                <TableHead>
                  Status <ChevronDown className="inline-block h-4 w-4 ml-1" />
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <CompanyRow
                logo={
                  <div className="bg-red-500 rounded-full p-2 w-8 h-8 flex items-center justify-center text-white text-xs">
                    PH
                  </div>
                }
                name="Product Hunt"
                industry="Web Design"
                location="New York City, NY"
                status="active"
              />
              <CompanyRow
                logo={
                  <div className="bg-white rounded-full p-2 w-8 h-8 flex items-center justify-center border">
                    <GoogleLogo />
                  </div>
                }
                name="Google"
                industry="Search Engine"
                location="New York City, NY"
                status="active"
              />
              <CompanyRow
                logo={
                  <div className="bg-blue-600 rounded-full p-2 w-8 h-8 flex items-center justify-center text-white">
                    W
                  </div>
                }
                name="Wordpress"
                industry="Web Development"
                location="New York City, NY"
                status="active"
              />
              <CompanyRow
                logo={
                  <div className="bg-green-500 rounded-full p-2 w-8 h-8 flex items-center justify-center text-white text-xs">
                    T
                  </div>
                }
                name="Tripadvisor"
                industry="Travel Reviews"
                location="New York City, NY"
                status="lead"
              />
              <CompanyRow
                logo={
                  <div className="bg-white border rounded-full p-2 w-8 h-8 flex items-center justify-center">
                    <SlackLogo />
                  </div>
                }
                name="Slack"
                industry="Communication"
                location="New York City, NY"
                status="lead"
              />
              <CompanyRow
                logo={
                  <div className="bg-teal-500 rounded-full p-2 w-8 h-8 flex items-center justify-center text-white text-xs">
                    Z
                  </div>
                }
                name="Zendesk"
                industry="Marketing Platform"
                location="New York City, NY"
                status="lead"
              />
              <CompanyRow
                logo={
                  <div className="bg-green-400 rounded-full p-2 w-8 h-8 flex items-center justify-center text-white text-xs">
                    TC
                  </div>
                }
                name="Tech Crunch"
                industry="Agency"
                location="New York City, NY"
                status="lead"
              />
              <CompanyRow
                logo={
                  <div className="bg-blue-600 rounded-full p-2 w-8 h-8 flex items-center justify-center text-white">
                    f
                  </div>
                }
                name="Facebook"
                industry="Social Media"
                location="New York City, NY"
                status="pending"
              />
              <CompanyRow
                logo={
                  <div className="bg-blue-700 rounded-full p-2 w-8 h-8 flex items-center justify-center text-white text-xs">
                    P
                  </div>
                }
                name="Paypal"
                industry="Fintech"
                location="New York City, NY"
                status="pending"
              />
              <CompanyRow
                logo={
                  <div className="bg-green-600 rounded-full p-2 w-8 h-8 flex items-center justify-center text-white text-xs">
                    S
                  </div>
                }
                name="Shopify"
                industry="E-Commerce Platform"
                location="New York City, NY"
                status="pending"
              />
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex items-center justify-between px-4 py-3 border-t">
            <div className="flex items-center">
              <span className="text-sm">Show</span>
              <select className="mx-2 border rounded px-2 py-1 text-sm">
                <option>10</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
              <span className="text-sm">Row</span>
            </div>

            <div className="flex items-center space-x-1">
              <Button variant="outline" size="icon" className="h-8 w-8">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 bg-black text-white hover:bg-black"
              >
                1
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8">
                2
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8">
                3
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8">
                4
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8">
                5
              </Button>
              <span>...</span>
              <Button variant="outline" size="sm" className="h-8 w-8">
                30
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({
  icon,
  label,
  active = false,
  expanded = false,
}: {
  icon: string;
  label: string;
  active?: boolean;
  expanded?: boolean;
}) {
  return (
    <Link
      href="#"
      className={`flex items-center space-x-2 px-3 py-2 rounded-md ${
        active ? "bg-gray-100 font-medium" : "text-gray-700 hover:bg-gray-50"
      }`}
    >
      <span className="flex-shrink-0">
        <NavIcon name={icon} />
      </span>
      <span>{label}</span>
      {expanded && <ChevronDown className="h-4 w-4 ml-auto" />}
    </Link>
  );
}

function NavIcon({ name }: { name: string }) {
  // This is a simple implementation - in a real app, you'd use a proper icon library
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {name === "layout-dashboard" && (
        <>
          <rect width="7" height="9" x="3" y="3" rx="1" />
          <rect width="7" height="5" x="14" y="3" rx="1" />
          <rect width="7" height="9" x="14" y="12" rx="1" />
          <rect width="7" height="5" x="3" y="16" rx="1" />
        </>
      )}
      {name === "mail" && (
        <>
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </>
      )}
      {name === "bell" && (
        <>
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </>
      )}
      {name === "file-text" && (
        <>
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" x2="8" y1="13" y2="13" />
          <line x1="16" x2="8" y1="17" y2="17" />
          <line x1="10" x2="8" y1="9" y2="9" />
        </>
      )}
      {name === "check-square" && (
        <>
          <polyline points="9 11 12 14 22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </>
      )}
      {name === "calendar" && (
        <>
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
        </>
      )}
      {name === "bar-chart-2" && (
        <>
          <line x1="18" x2="18" y1="20" y2="10" />
          <line x1="12" x2="12" y1="20" y2="4" />
          <line x1="6" x2="6" y1="20" y2="14" />
        </>
      )}
      {name === "users" && (
        <>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </>
      )}
      {name === "building" && (
        <>
          <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01" />
          <path d="M16 6h.01" />
          <path d="M12 6h.01" />
          <path d="M12 10h.01" />
          <path d="M12 14h.01" />
          <path d="M16 10h.01" />
          <path d="M16 14h.01" />
          <path d="M8 10h.01" />
          <path d="M8 14h.01" />
        </>
      )}
      {name === "puzzle" && (
        <>
          <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.452-.888-.925a2.501 2.501 0 0 0-3.214-2.092c-.95.243-1.686.978-1.929 1.929a2.5 2.5 0 0 0 2.092 3.214c.474.086.855.418.925.888a.98.98 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-.92.996a2.5 2.5 0 1 1-4.38-1.92c.242-.95.978-1.686 1.929-1.929a2.5 2.5 0 0 0 1.919-4.38c-.493-.08-.922-.427-.996-.92a1.026 1.026 0 0 0 .29-.877l1.568-1.568c.47-.47 1.086-.706 1.704-.706s1.233.236 1.704.707l1.61 1.61a.98.98 0 0 1 .277.836c-.086.474-.418.855-.925.925a2.5 2.5 0 0 0-2.092 3.214c.243.95.978 1.686 1.929 1.929a2.5 2.5 0 0 0 3.214-2.092c.086-.474.418-.855.925-.925a.98.98 0 0 1 .837.277l1.61 1.61a2.404 2.404 0 0 1 .7 1.705c0 .643-.241 1.245-.707 1.704l-1.61 1.611a.977.977 0 0 1-.837.276c-.474-.086-.855-.418-.925-.925a2.5 2.5 0 0 0-3.214-2.092c-.95.243-1.686.978-1.929 1.929a2.5 2.5 0 0 0 2.092 3.214c.474.086.855.418.925.888a.98.98 0 0 1-.276.837l-1.61 1.61a2.402 2.402 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-.92.996a2.5 2.5 0 1 1-4.38-1.92c.242-.95.978-1.686 1.929-1.929a2.5 2.5 0 0 0 1.919-4.38c-.493-.08-.922-.427-.996-.92a1.026 1.026 0 0 0 .29-.877l1.568-1.568c.47-.47 1.086-.706 1.704-.706s1.233.236 1.704.707l1.61 1.61a.977.977 0 0 1 .277.836c-.086.474-.418.855-.925.925a2.501 2.501 0 0 0-2.092 3.214c.243.95.978 1.686 1.929 1.929a2.501 2.501 0 0 0 3.214-2.092c.086-.474.418-.855.925-.925a.98.98 0 0 1 .837.277l1.61 1.61a2.404 2.404 0 0 1 .707 1.705c0 .643-.241 1.245-.707 1.704l-1.61 1.611a.977.977 0 0 1-.837.276c-.474-.086-.855-.418-.925-.925a2.5 2.5 0 0 0-3.214-2.092c-.95.243-1.686.978-1.929 1.929a2.5 2.5 0 0 0 2.092 3.214c.474.086.855.418.925.888a.98.98 0 0 1-.276.837l-1.61 1.61a2.402 2.402 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-.92.996a2.5 2.5 0 1 1-4.38-1.92c.242-.95.978-1.686 1.929-1.929a2.5 2.5 0 0 0 1.919-4.38c-.493-.08-.922-.427-.996-.92a1.026 1.026 0 0 0 .29-.877l1.568-1.568c.47-.47 1.086-.706 1.704-.706s1.233.236 1.704.707l1.61 1.61c.208.21.286.5.242.782z" />
        </>
      )}
      {name === "settings" && (
        <>
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </>
      )}
    </svg>
  );
}

const StatusFilter = ({
  label,
  active = false,
  color = "",
}: {
  label: string;
  active?: boolean;
  color?: string;
}) => {
  return (
    <div
      className={cn(
        "flex mx-3 my-2 items-center text-neutral-80 font-medium",
        active ? "text-black rounded-full px-4 py-2 bg-[#F0F2F7]" : ""
      )}
    >
      {color && (
        <span
          className={`w-2 h-2 rounded-full mr-2 ${
            color === "blue"
              ? "bg-blue-500"
              : color === "orange"
              ? "bg-orange-500"
              : color === "yellow"
              ? "bg-yellow-500"
              : color === "red"
              ? "bg-red-500"
              : color === "gray"
              ? "bg-gray-500"
              : ""
          }`}
        />
      )}
      {label}
    </div>
  );
};

const CompanyRow = ({
  logo,
  name,
  industry,
  location,
  status,
}: {
  logo: React.ReactNode;
  name: string;
  industry: string;
  location: string;
  status: string;
}) => {
  return (
    <TableRow>
      <TableCell>
        <div className="flex items-center gap-3">
          {logo}
          <span className="font-medium">{name}</span>
        </div>
      </TableCell>
      <TableCell>{industry}</TableCell>
      <TableCell>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 text-gray-500"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {location}
        </div>
      </TableCell>
      <TableCell>
        <StatusBadge status={status} />
      </TableCell>
    </TableRow>
  );
};

const StatusBadge = ({ status }: { status: string }) => {
  const getStatusStyles = () => {
    switch (status) {
      case "active":
        return "bg-blue-100 text-blue-800 before:bg-blue-500";
      case "lead":
        return "bg-orange-100 text-orange-800 before:bg-orange-500";
      case "pending":
        return "bg-yellow-100 text-yellow-800 before:bg-yellow-500";
      case "cancelled":
        return "bg-red-100 text-red-800 before:bg-red-500";
      case "done":
        return "bg-gray-100 text-gray-800 before:bg-gray-500";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Badge
      variant="outline"
      className={`relative pl-5 font-normal capitalize ${getStatusStyles()}`}
    >
      <span className="absolute left-1.5 top-1/2 -translate-y-1/2 block w-2 h-2 rounded-full before:content-[''] before:absolute before:w-full before:h-full before:rounded-full" />
      {status}
    </Badge>
  );
};

const GoogleLogo = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
};

const SlackLogo = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.048 15.124C5.048 16.226 4.15 17.124 3.048 17.124C1.946 17.124 1.048 16.226 1.048 15.124C1.048 14.022 1.946 13.124 3.048 13.124H5.048V15.124Z"
        fill="#E01E5A"
      />
      <path
        d="M6.048 15.124C6.048 14.022 6.946 13.124 8.048 13.124C9.15 13.124 10.048 14.022 10.048 15.124V20.124C10.048 21.226 9.15 22.124 8.048 22.124C6.946 22.124 6.048 21.226 6.048 20.124V15.124Z"
        fill="#E01E5A"
      />
      <path
        d="M8.048 5.124C6.946 5.124 6.048 4.226 6.048 3.124C6.048 2.022 6.946 1.124 8.048 1.124C9.15 1.124 10.048 2.022 10.048 3.124V5.124H8.048Z"
        fill="#36C5F0"
      />
      <path
        d="M8.048 6.124C9.15 6.124 10.048 7.022 10.048 8.124C10.048 9.226 9.15 10.124 8.048 10.124H3.048C1.946 10.124 1.048 9.226 1.048 8.124C1.048 7.022 1.946 6.124 3.048 6.124H8.048Z"
        fill="#36C5F0"
      />
      <path
        d="M18.048 8.124C18.048 7.022 18.946 6.124 20.048 6.124C21.15 6.124 22.048 7.022 22.048 8.124C22.048 9.226 21.15 10.124 20.048 10.124H18.048V8.124Z"
        fill="#2EB67D"
      />
      <path
        d="M17.048 8.124C17.048 9.226 16.15 10.124 15.048 10.124C13.946 10.124 13.048 9.226 13.048 8.124V3.124C13.048 2.022 13.946 1.124 15.048 1.124C16.15 1.124 17.048 2.022 17.048 3.124V8.124Z"
        fill="#2EB67D"
      />
      <path
        d="M15.048 18.124C16.15 18.124 17.048 19.022 17.048 20.124C17.048 21.226 16.15 22.124 15.048 22.124C13.946 22.124 13.048 21.226 13.048 20.124V18.124H15.048Z"
        fill="#ECB22E"
      />
      <path
        d="M15.048 17.124C13.946 17.124 13.048 16.226 13.048 15.124C13.048 14.022 13.946 13.124 15.048 13.124H20.048C21.15 13.124 22.048 14.022 22.048 15.124C22.048 16.226 21.15 17.124 20.048 17.124H15.048Z"
        fill="#ECB22E"
      />
    </svg>
  );
}
