"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  ChevronRight,
  Plus,
  Filter,
  ListFilter,
  MoreHorizontal,
  Calendar,
  MessageSquare,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface Stats {
  progress: string;
  comments: number;
  likes: number;
}
interface Label {
  text: string;
  color: string;
}

interface Status {
  text: string;
  color: string;
}

interface TableRowProps {
  title: string;
  dueDate: string;
  labels: Label[];
  status: Status;
  assignees: string[];
}

interface Task {
  id: number;
  title: string;
  dueDate: string;
  labels: Label[];
  assignees: string[];
  completed?: boolean;
  stats?: Stats;
}

export default function TaskPage() {
  const [activeView, setActiveView] = useState("list");

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">Task</h1>
          <Tabs
            value={activeView}
            onValueChange={setActiveView}
            className="w-auto"
          >
            <TabsList>
              <TabsTrigger value="list" className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 6H21M8 12H21M8 18H21M3 6H3.01M3 12H3.01M3 18H3.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                List
              </TabsTrigger>
              <TabsTrigger value="kanban" className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H9C10.1046 21 11 20.1046 11 19V5C11 3.89543 10.1046 3 9 3Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 3H15C13.8954 3 13 3.89543 13 5V19C13 20.1046 13.8954 21 15 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Kanban
              </TabsTrigger>
              <TabsTrigger value="table" className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9H21M3 15H21M3 3H21V21H3V3Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Table
              </TabsTrigger>
            </TabsList>

            <TabsContent value="list" className="mt-0">
              <ListView />
            </TabsContent>

            <TabsContent value="kanban" className="mt-0">
              <KanbanView />
            </TabsContent>

            <TabsContent value="table" className="mt-0">
              <TableView />
            </TabsContent>
          </Tabs>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="outline" className="flex items-center">
            <ListFilter className="h-4 w-4 mr-2" />
            Sort By
          </Button>
          <Button variant="outline" className="flex items-center">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-black text-white hover:bg-gray-800">
            <Plus className="h-4 w-4 mr-2" />
            Add Task
          </Button>
        </div>
      </div>
    </div>
  );
}

function ListView() {
  return (
    <div className="space-y-4">
      <TaskSection
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
    </div>
  );
}

interface TaskSectionProps {
  title: string;
  count: number;
  tasks: Task[];
  completed?: boolean;
}

function TaskSection({
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

function KanbanView() {
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

interface Task {
  id: number;
  title: string;
  dueDate: string;
  labels: Label[];
  assignees: string[];
}

interface KanbanColumnProps {
  title: string;
  count: number;
  color: string;
  tasks: Task[];
}

function KanbanColumn({ title, count, color, tasks }: KanbanColumnProps) {
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

function TableView() {
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

function TableRow({
  title,
  dueDate,
  labels,
  status,
  assignees,
}: TableRowProps) {
  return (
    <tr className="border-b">
      <td className="px-4 py-3">{title}</td>
      <td className="px-4 py-3">
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-2 text-gray-500" />
          {dueDate}
        </div>
      </td>
      <td className="px-4 py-3">
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
      <td className="px-4 py-3">
        <div className="flex items-center">
          <div className={`w-2 h-2 rounded-full mr-2 ${status.color}`}></div>
          <span>{status.text}</span>
        </div>
      </td>
      <td className="px-4 py-3">
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
