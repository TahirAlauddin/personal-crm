import { Task } from "@/types/task";
import { TaskSection } from "./TaskSection";
import { TaskDetailsModal } from "./TaskDetailsModal";
import { useState } from "react";

export function ListView() {
  const [selectedTask, setSelectedTask] = useState<Task | null>({
    id: 1,
    title: "Monthly Product Discussion",
    description: "Monthly Product Discussion by Design and Marketing Team with CEO to Plan our future product sales and reports.",
    dueDate: "24 Jan 2023",
    labels: [
      { text: "Internal", color: "bg-amber-100 text-amber-800" },
      { text: "Marketing", color: "bg-lime-100 text-lime-800" },
      { text: "Urgent", color: "bg-rose-100 text-rose-800" },
    ],
    assignees: [
      "/placeholder.svg?height=24&width=24",
      "/placeholder.svg?height=24&width=24",
      "/placeholder.svg?height=24&width=24",
    ],
    checklists: [
      {
        title: "Checklist 1",
        items: [
          { title: "Item 1", completed: false },
          { title: "Item 2", completed: false },
        ],
      },
      {
        title: "Checklist 2",
        items: [
          { title: "Item 1", completed: false },
          { title: "Item 2", completed: false },
        ],
      },
    ],
    activities: [
      {
        user: "John Doe",
        action: "Created the task",
        timestamp: "2023-01-24 10:00:00",
      },
      {
        user: "Frank dward",
        action: "mentioned you in a comment",
        timestamp: "2023-01-24 10:00:00",
      },
    ],
  });
  
  return (
    <div className="space-y-4">
      <TaskSection
      setSelectedTask={setSelectedTask}
        title="Planned"
        count={3}
        tasks={[
          {
            id: 1,
            title: "Monthly Product Discussion",
            dueDate: "24 Jan 2023",
            labels: [
              { text: "Internal", color: "bg-amber-100 text-amber-800" },
              { text: "Marketing", color: "bg-lime-100 text-lime-800" },
              { text: "Urgent", color: "bg-rose-100 text-rose-800" },
            ],
            assignees: [
              "/placeholder.svg?height=24&width=24",
              "/placeholder.svg?height=24&width=24",
              "/placeholder.svg?height=24&width=24",
            ],
          },
          {
            id: 2,
            title: "Update New Social Media Posts",
            dueDate: "18 Jan 2023",
            labels: [
              { text: "Marketing", color: "bg-lime-100 text-lime-800" },
              { text: "Event", color: "bg-purple-100 text-purple-800" },
              { text: "Urgent", color: "bg-rose-100 text-rose-800" },
            ],
            assignees: [
              "/placeholder.svg?height=24&width=24",
              "/placeholder.svg?height=24&width=24",
            ],
          },
          {
            id: 3,
            title: "Input Data for Monthly Sales Revenue",
            dueDate: "31 Jan 2023",
            labels: [
              { text: "Internal", color: "bg-amber-100 text-amber-800" },
              { text: "Document", color: "bg-blue-100 text-blue-800" },
              { text: "Marketing", color: "bg-lime-100 text-lime-800" },
            ],
            assignees: [
              "/placeholder.svg?height=24&width=24",
              "/placeholder.svg?height=24&width=24",
            ],
          },
        ]}
        />

      <TaskSection
        setSelectedTask={setSelectedTask}
        title="Upcoming"
        count={5}
        tasks={[
          {
            id: 4,
            title: "Create Monthly Revenue Recap for All Product Linear",
            dueDate: "11 Jan 2023",
            labels: [
              { text: "Report", color: "bg-green-100 text-green-800" },
              { text: "Event", color: "bg-purple-100 text-purple-800" },
              { text: "Urgent", color: "bg-rose-100 text-rose-800" },
            ],
            assignees: [
              "/placeholder.svg?height=24&width=24",
              "/placeholder.svg?height=24&width=24",
            ],
          },
          {
            id: 5,
            title: "Uploading New Items to Marketplace",
            dueDate: "09 Jan 2023",
            labels: [
              { text: "Report", color: "bg-green-100 text-green-800" },
              { text: "Document", color: "bg-blue-100 text-blue-800" },
              { text: "Marketing", color: "bg-lime-100 text-lime-800" },
            ],
            assignees: [
              "/placeholder.svg?height=24&width=24",
              "/placeholder.svg?height=24&width=24",
            ],
          },
          {
            id: 6,
            title: "Monthly Product Discussion",
            dueDate: "12 Jan 2023",
            labels: [
              { text: "Internal", color: "bg-amber-100 text-amber-800" },
              { text: "Marketing", color: "bg-lime-100 text-lime-800" },
              { text: "Urgent", color: "bg-rose-100 text-rose-800" },
            ],
            assignees: [
              "/placeholder.svg?height=24&width=24",
              "/placeholder.svg?height=24&width=24",
              "/placeholder.svg?height=24&width=24",
            ],
          },
          {
            id: 7,
            title: "Update New Social Media Post",
            dueDate: "15 Jan 2023",
            labels: [
              { text: "Marketing", color: "bg-lime-100 text-lime-800" },
              { text: "Event", color: "bg-purple-100 text-purple-800" },
              { text: "Urgent", color: "bg-rose-100 text-rose-800" },
            ],
            assignees: [
              "/placeholder.svg?height=24&width=24",
              "/placeholder.svg?height=24&width=24",
              "/placeholder.svg?height=24&width=24",
            ],
          },
          {
            id: 8,
            title: "Input Data for Monthly Sales Revenue",
            dueDate: "13 Jan 2023",
            labels: [
              { text: "Internal", color: "bg-amber-100 text-amber-800" },
              { text: "Document", color: "bg-blue-100 text-blue-800" },
              { text: "Marketing", color: "bg-lime-100 text-lime-800" },
            ],
            assignees: [
              "/placeholder.svg?height=24&width=24",
              "/placeholder.svg?height=24&width=24",
            ],
          },
        ]}
      />

      <TaskSection
        setSelectedTask={setSelectedTask}
        title="Completed"
        count={2}
        tasks={[
          {
            id: 9,
            title: "Uploading New Items to Marketplace",
            dueDate: "09 Jan 2023",
            labels: [
              { text: "Report", color: "bg-green-100 text-green-800" },
              { text: "Document", color: "bg-blue-100 text-blue-800" },
              { text: "Marketing", color: "bg-lime-100 text-lime-800" },
            ],
            assignees: [
              "/placeholder.svg?height=24&width=24",
              "/placeholder.svg?height=24&width=24",
            ],
            completed: true,
          },
          {
            id: 10,
            title: "Uploading New Items to Marketplace",
            dueDate: "09 Jan 2023",
            labels: [
              { text: "Report", color: "bg-green-100 text-green-800" },
              { text: "Document", color: "bg-blue-100 text-blue-800" },
              { text: "Marketing", color: "bg-lime-100 text-lime-800" },
            ],
            assignees: [
              "/placeholder.svg?height=24&width=24",
              "/placeholder.svg?height=24&width=24",
            ],
            completed: true,
          },
        ]}
      />

      <TaskDetailsModal
        isOpen={!!selectedTask}
        onClose={() => setSelectedTask(null)}
        task={selectedTask}
      />
    </div>
  );
}
