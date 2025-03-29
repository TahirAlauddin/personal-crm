import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Task } from "@/types/task";
import {
  Plus,
  MoreHorizontal,
  Calendar,
  Users,
  MessageSquare,
} from "lucide-react";

interface KanbanColumnProps {
  title: string;
  count: number;
  color: string;
  tasks: Task[];
}

export function KanbanColumn({
  title,
  count,
  color,
  tasks,
}: KanbanColumnProps) {
  return (
    <div className="border rounded-lg p-4 bg-gray-50">
      <div className="flex items-center mb-4">
        <div className={`w-2 h-2 rounded-full mr-2 ${color}`}></div>
        <span className="font-medium mr-2">{title}</span>
        <span className="text-sm text-gray-500">
          {count} {title === "Completed" ? "completed" : "open"} tasks
        </span>
      </div>

      <button className="w-full py-3 bg-gray-100 hover:bg-gray-200 rounded-md flex items-center justify-center mb-4">
        <Plus className="h-4 w-4 mr-2" />
        Create Task
      </button>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white border rounded-lg p-4 shadow-sm"
          >
            <div className="flex flex-wrap gap-1 mb-2">
              {task.labels.map((label, idx) => (
                <span
                  key={idx}
                  className={`text-xs px-2 py-1 rounded-md ${label.color}`}
                >
                  {label.text}
                </span>
              ))}
              <Button variant="ghost" size="icon" className="h-6 w-6 ml-auto">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>

            <h3 className="font-medium mb-2">{task.title}</h3>

            <div className="flex items-center text-sm text-gray-500 mb-3">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Due Date {task.dueDate}</span>
            </div>

            <div className="flex items-center text-sm text-gray-500 mb-3">
              <span className="mr-4">{task.stats?.progress}</span>
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

              <div className="flex items-center space-x-2 text-gray-500">
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  <span className="text-xs">{task.stats?.likes}</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  <span className="text-xs">{task.stats?.comments}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
