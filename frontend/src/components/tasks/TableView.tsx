import { TableRow } from "./TableRow";
import { ChevronDown, Plus } from "lucide-react";

export function TableView() {
  return (
    <div className="border rounded-lg overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 border-b">
            <th className="px-4 py-3 text-left font-medium text-gray-500 flex items-center">
              <span>Task Name</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </th>
            <th className="px-4 py-3 text-left font-medium text-gray-500 flex items-center">
              <span>Due Date</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </th>
            <th className="px-4 py-3 text-left font-medium text-gray-500 flex items-center">
              <span>Label</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </th>
            <th className="px-4 py-3 text-left font-medium text-gray-500 flex items-center">
              <span>Status</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </th>
            <th className="px-4 py-3 text-left font-medium text-gray-500 flex items-center">
              <span>Member</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </th>
            <th className="px-4 py-3"></th>
          </tr>
        </thead>
        <tbody>
          <TableRow
            title="Monthly Product Discussion"
            dueDate="24 Jan 2023"
            labels={[
              { text: "Internal", color: "bg-amber-100 text-amber-800" },
              { text: "Marketing", color: "bg-lime-100 text-lime-800" },
              { text: "Urgent", color: "bg-rose-100 text-rose-800" },
            ]}
            status={{ text: "Planned", color: "bg-yellow-500" }}
            assignees={[
              "/placeholder.svg?height=24&width=24",
              "/placeholder.svg?height=24&width=24",
            ]}
          />
          <TableRow
            title="Update New Social Media Posts"
            dueDate="18 Jan 2023"
            labels={[
              { text: "Internal", color: "bg-amber-100 text-amber-800" },
              { text: "Document", color: "bg-blue-100 text-blue-800" },
              { text: "Marketing", color: "bg-lime-100 text-lime-800" },
            ]}
            status={{ text: "Planned", color: "bg-yellow-500" }}
            assignees={[
              "/placeholder.svg?height=24&width=24",
              "/placeholder.svg?height=24&width=24",
            ]}
          />
          <TableRow
            title="Input Data for Monthly Sales Revenue"
            dueDate="31 Jan 2023"
            labels={[
              { text: "Internal", color: "bg-amber-100 text-amber-800" },
              { text: "Document", color: "bg-blue-100 text-blue-800" },
              { text: "Marketing", color: "bg-lime-100 text-lime-800" },
            ]}
            status={{ text: "Planned", color: "bg-yellow-500" }}
            assignees={[
              "/placeholder.svg?height=24&width=24",
              "/placeholder.svg?height=24&width=24",
            ]}
          />
          <TableRow
            title="Create Monthly Revenue Recap for All Product Linear"
            dueDate="11 Jan 2023"
            labels={[
              { text: "Report", color: "bg-green-100 text-green-800" },
              { text: "Event", color: "bg-purple-100 text-purple-800" },
              { text: "Urgent", color: "bg-rose-100 text-rose-800" },
            ]}
            status={{ text: "Upcoming", color: "bg-blue-500" }}
            assignees={[
              "/placeholder.svg?height=24&width=24",
              "/placeholder.svg?height=24&width=24",
            ]}
          />
          <TableRow
            title="Uploading New Items to Marketplace"
            dueDate="09 Jan 2023"
            labels={[
              { text: "Report", color: "bg-green-100 text-green-800" },
              { text: "Document", color: "bg-blue-100 text-blue-800" },
              { text: "Marketing", color: "bg-lime-100 text-lime-800" },
            ]}
            status={{ text: "Upcoming", color: "bg-blue-500" }}
            assignees={[
              "/placeholder.svg?height=24&width=24",
              "/placeholder.svg?height=24&width=24",
            ]}
          />
          <TableRow
            title="Monthly Product Discussion"
            dueDate="12 Jan 2023"
            labels={[
              { text: "Internal", color: "bg-amber-100 text-amber-800" },
              { text: "Marketing", color: "bg-lime-100 text-lime-800" },
              { text: "Urgent", color: "bg-rose-100 text-rose-800" },
            ]}
            status={{ text: "Upcoming", color: "bg-blue-500" }}
            assignees={[
              "/placeholder.svg?height=24&width=24",
              "/placeholder.svg?height=24&width=24",
              "/placeholder.svg?height=24&width=24",
            ]}
          />
          <TableRow
            title="Update New Social Media Post"
            dueDate="15 Jan 2023"
            labels={[
              { text: "Marketing", color: "bg-lime-100 text-lime-800" },
              { text: "Event", color: "bg-purple-100 text-purple-800" },
              { text: "Urgent", color: "bg-rose-100 text-rose-800" },
            ]}
            status={{ text: "Upcoming", color: "bg-blue-500" }}
            assignees={[
              "/placeholder.svg?height=24&width=24",
              "/placeholder.svg?height=24&width=24",
              "/placeholder.svg?height=24&width=24",
            ]}
          />
          <TableRow
            title="Input Data for Monthly Sales Revenue"
            dueDate="13 Jan 2023"
            labels={[
              { text: "Marketing", color: "bg-lime-100 text-lime-800" },
              { text: "Event", color: "bg-purple-100 text-purple-800" },
              { text: "Urgent", color: "bg-rose-100 text-rose-800" },
            ]}
            status={{ text: "Upcoming", color: "bg-blue-500" }}
            assignees={[
              "/placeholder.svg?height=24&width=24",
              "/placeholder.svg?height=24&width=24",
            ]}
          />
          <TableRow
            title="Uploading New Items to Marketplace"
            dueDate="13 Jan 2023"
            labels={[
              { text: "Report", color: "bg-green-100 text-green-800" },
              { text: "Document", color: "bg-blue-100 text-blue-800" },
              { text: "Marketing", color: "bg-lime-100 text-lime-800" },
            ]}
            status={{ text: "Completed", color: "bg-green-500" }}
            assignees={[
              "/placeholder.svg?height=24&width=24",
              "/placeholder.svg?height=24&width=24",
            ]}
          />
          <TableRow
            title="Input Data for Monthly Sales Revenue"
            dueDate="13 Jan 2023"
            labels={[
              { text: "Internal", color: "bg-amber-100 text-amber-800" },
              { text: "Document", color: "bg-blue-100 text-blue-800" },
              { text: "Marketing", color: "bg-lime-100 text-lime-800" },
            ]}
            status={{ text: "Completed", color: "bg-green-500" }}
            assignees={[
              "/placeholder.svg?height=24&width=24",
              "/placeholder.svg?height=24&width=24",
            ]}
          />
          <tr>
            <td colSpan={6} className="px-4 py-3">
              <button className="flex items-center text-gray-500 hover:text-gray-700">
                <Plus className="h-4 w-4 mr-2" />
                New Task
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
