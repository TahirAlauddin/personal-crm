import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Task } from "@/types/task";
import {
  ChevronDown,
  ChevronRight,
  Plus,
  MoreHorizontal,
  Calendar,
} from "lucide-react";

interface TaskSectionProps {
  title: string;
  count: number;
  tasks: Task[];
  completed?: boolean;
}

export function TaskSection({
  title,
  count,
  tasks,
  completed = false,
}: TaskSectionProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div>
      <div className="flex items-center mb-2">
        <button
          className="flex items-center"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <ChevronDown className="h-4 w-4 mr-2" />
          ) : (
            <ChevronRight className="h-4 w-4 mr-2" />
          )}
          <div
            className={`w-2 h-2 rounded-full mr-2 ${
              title === "Planned"
                ? "bg-yellow-500"
                : title === "Upcoming"
                ? "bg-blue-500"
                : "bg-green-500"
            }`}
          ></div>
          <span className="font-medium mr-2">{title}</span>
          <span className="text-sm text-gray-500">
            {count} {title === "Completed" ? "completed" : "open"} tasks
          </span>
        </button>
      </div>

      {expanded && (
        <div className="space-y-2">
          <button className="w-full py-3 bg-gray-100 hover:bg-gray-200 rounded-md flex items-center justify-center">
            <Plus className="h-4 w-4 mr-2" />
            Create Task
          </button>

          {tasks.map((task) => (
            <div key={task.id} className="border rounded-md p-4">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  className="mt-1 mr-3"
                  checked={task.completed || false}
                  readOnly
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex flex-wrap gap-1">
                      {task.labels.map((label, idx) => (
                        <span
                          key={idx}
                          className={`text-xs px-2 py-1 rounded-md ${label.color}`}
                        >
                          {label.text}
                        </span>
                      ))}
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                  <h3 className="font-medium mb-2">{task.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Due Date {task.dueDate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {task.assignees.map((avatar, idx) => (
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
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
