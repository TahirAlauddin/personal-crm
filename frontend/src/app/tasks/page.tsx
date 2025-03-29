"use client";

import { useState } from "react";
import { Plus, Filter, ListFilter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ListView } from "@/components/tasks/ListView";
import { KanbanView } from "@/components/tasks/KanbanView";
import { TableView } from "@/components/tasks/TableView";

export default function TaskPage() {
  const [activeView, setActiveView] = useState("list");

  return (
    <div className="container px-0 p-4">
      <div className="flex flex-col justify-between items-center mb-4">
        <Tabs
          value={activeView}
          onValueChange={setActiveView}
          className="w-full"
        >
          <div className="flex items-center space-x-4 px-8 py-5">
            <h1 className="text-xl font-bold">Tasks</h1>

            <TabsList className="flex-1 bg-transparent justify-start">
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

            {/* stick to end */}
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

          <div className="border-t border-gray-200 p-8">
            <TabsContent value="list" className="mt-0">
              <ListView />
            </TabsContent>

            <TabsContent value="kanban" className="mt-0">
              <KanbanView />
            </TabsContent>

            <TabsContent value="table" className="mt-0">
              <TableView />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
