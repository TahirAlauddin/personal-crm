"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Plus, Send, ChevronDown, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Task } from "@/types/task";

interface TaskDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  task: Task | null;
}

export function TaskDetailsModal({
  isOpen,
  onClose,
  task,
}: TaskDetailsModalProps) {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    "Task Checklist": true,
    "Daily Sprint": true,
    Activity: true,
  });

  if (!task) return null;

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="border-b p-4">
          <DialogTitle className="text-xl font-semibold">
            <div className="flex justify-between items-center">
              <DialogTitle className="text-xl font-semibold">{task.title}</DialogTitle>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col md:flex-row">
          {/* Main content */}
          <div className="flex-1 p-6 border-r">

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Description
              </h3>
              <p className="text-sm text-gray-600">{task.description}</p>
            </div>

            {/* Task Checklists */}
            {task.checklists?.map((checklist, index) => (
              <div key={index} className="mb-4">
                <div
                  className="flex items-center cursor-pointer mb-2"
                  onClick={() => toggleSection(checklist.title)}
                >
                  {expandedSections[checklist.title] ? (
                    <ChevronDown className="h-4 w-4 mr-2 text-gray-500" />
                  ) : (
                    <ChevronRight className="h-4 w-4 mr-2 text-gray-500" />
                  )}
                  <h3 className="text-sm font-medium text-gray-700">
                    {checklist.title}
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-auto h-7 px-2"
                  >
                    <Plus className="h-3 w-3 mr-1" />
                    <span className="text-xs">Add Item</span>
                  </Button>
                </div>

                {expandedSections[checklist.title] && (
                  <div className="space-y-2 pl-6">
                    {checklist.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={`item-${index}-${itemIndex}`}
                          checked={item.completed}
                          className="h-4 w-4"
                        />
                        <label
                          htmlFor={`item-${index}-${itemIndex}`}
                          className={`text-sm ${
                            item.completed
                              ? "line-through text-gray-400"
                              : "text-gray-700"
                          }`}
                        >
                          {item.title}
                        </label>
                        <div className="ml-auto text-xs text-gray-400">:</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Button
              variant="outline"
              size="sm"
              className="w-full text-sm h-8 mt-2 mb-6"
            >
              <Plus className="h-3 w-3 mr-2" />
              Add New Checklist
            </Button>

            {/* Activity */}
            <div className="mb-4">
              <div
                className="flex items-center cursor-pointer mb-2"
                onClick={() => toggleSection("Activity")}
              >
                {expandedSections["Activity"] ? (
                  <ChevronDown className="h-4 w-4 mr-2 text-gray-500" />
                ) : (
                  <ChevronRight className="h-4 w-4 mr-2 text-gray-500" />
                )}
                <h3 className="text-sm font-medium text-gray-700">Activity</h3>
                <Button variant="ghost" size="sm" className="ml-auto h-7 px-2">
                  <span className="text-xs">Hide Details</span>
                </Button>
              </div>

              {expandedSections["Activity"] && (
                <div className="space-y-4 pl-6">
                  {task.activities?.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Avatar className="h-7 w-7">
                        <AvatarImage src={activity.user} />
                        <AvatarFallback>
                          {activity.user?.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-medium">{activity.user}</span>{" "}
                          {activity.action}
                        </p>
                        <p className="text-xs text-gray-500">
                          {activity.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Comment Input */}
            <div className="flex items-center space-x-2 mt-4 border rounded-md p-1">
              <Input
                placeholder="Add your comment..."
                className="flex-1 border-0 text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button size="icon" variant="ghost" className="h-8 w-8">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full md:w-64 p-6 bg-gray-50">
            {/* Members */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-medium text-gray-700">Member</h3>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
              <div className="flex -space-x-1">
                {task.assignees?.map((assignee, index) => (
                  <Avatar key={index} className="h-8 w-8 border-2 border-white">
                    <AvatarImage src={assignee} />
                    <AvatarFallback>{assignee?.charAt(0)}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>

            {/* Due Date */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-medium text-gray-700">Due Date</h3>
              </div>
              <div className="flex items-center border rounded-md p-2 bg-white">
                <span className="text-sm">{task.dueDate}</span>
              </div>
            </div>

            {/* Labels */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-medium text-gray-700">Labels</h3>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-1">
                {task.labels?.map((label, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className={`
                      text-xs font-normal px-2 py-0.5 rounded-sm
                      ${
                        label.color === "red"
                          ? "bg-red-50 text-red-600 border-red-200"
                          : ""
                      }
                      ${
                        label.color === "green"
                          ? "bg-green-50 text-green-600 border-green-200"
                          : ""
                      }
                      ${
                        label.color === "yellow"
                          ? "bg-yellow-50 text-yellow-600 border-yellow-200"
                          : ""
                      }
                    `}
                  >
                    {label.text}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Attachment */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-medium text-gray-700">
                  Attachment
                </h3>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
