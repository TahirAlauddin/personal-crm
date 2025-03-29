import { Task } from "@/types/task";
import { KanbanColumn } from "./KanbanColumn";

export function KanbanView() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <KanbanColumn
        title="Planned"
        count={3}
        color="bg-yellow-500"
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
            stats: { progress: "10/124", comments: 19, likes: 5 },
          },
          {
            id: 2,
            title: "Update New Social Media Post",
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
            stats: { progress: "12/52", comments: 1, likes: 1 },
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
            stats: { progress: "4/5", comments: 0, likes: 2 },
          },
        ]}
      />

      <KanbanColumn
        title="Upcoming"
        count={5}
        color="bg-blue-500"
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
            stats: { progress: "4/12", comments: 1, likes: 0 },
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
            stats: { progress: "12/64", comments: 23, likes: 1 },
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
            stats: { progress: "3/4", comments: 51, likes: 2 },
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
            stats: { progress: "0/12", comments: 3, likes: 4 },
          },
          {
            id: 8,
            title: "Input Data for Monthly Sales Revenue",
            dueDate: "13 Jan 2023",
            labels: [
              { text: "Marketing", color: "bg-lime-100 text-lime-800" },
              { text: "Event", color: "bg-purple-100 text-purple-800" },
              { text: "Urgent", color: "bg-rose-100 text-rose-800" },
            ],
            assignees: [
              "/placeholder.svg?height=24&width=24",
              "/placeholder.svg?height=24&width=24",
            ],
            stats: { progress: "3/4", comments: 15, likes: 1 },
          },
        ]}
      />

      <KanbanColumn
        title="Completed"
        count={2}
        color="bg-green-500"
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
            stats: { progress: "2/15", comments: 1, likes: 12 },
          },
          {
            id: 10,
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
            stats: { progress: "1/53", comments: 21, likes: 2 },
          },
        ]}
      />
    </div>
  );
}
