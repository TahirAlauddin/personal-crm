import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, MoreHorizontal } from "lucide-react";
import { Label, Status } from "@/types/task";

interface TableRowProps {
  title: string;
  dueDate: string;
  labels: Label[];
  status: Status;
  assignees: string[];
}


// add grid border between columns
export function TableRow({
  title,
  dueDate,
  labels,
  status,
  assignees,
}: TableRowProps) {
  return (
    <tr className="border-b border-gray-200">
      <td className="px-4 py-3 border-r border-gray-200">{title}</td>
      <td className="px-4 py-3 border-r border-gray-200">
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-2 text-gray-500" />
          {dueDate}
        </div>
      </td>
      <td className="px-4 py-3 border-r border-gray-200">
        <div className="flex flex-wrap gap-1">
          {labels.map((label, idx) => (
            <span
              key={idx}
              className={`text-xs px-2 py-1 rounded-md ${label.color}`}
            >
              {label.text}
            </span>
          ))}
        </div>
      </td>
      <td className="px-4 py-3 border-r border-gray-200">
        <div className="flex items-center">
          <div className={`w-2 h-2 rounded-full mr-2 ${status.color}`}></div>
          <span>{status.text}</span>
        </div>
      </td>
      <td className="px-4 py-3 border-r border-gray-200">
        <div className="flex -space-x-2">
          {assignees.map((avatar, idx) => (
            <div
              key={idx}
              className="w-6 h-6 rounded-full border-2 border-white overflow-hidden"
            >
              <Image
                src={avatar || "/placeholder.svg"}
                alt="User avatar"
                width={24}
                height={24}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </td>
      <td className="px-4 py-3">
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </td>
    </tr>
  );
}
