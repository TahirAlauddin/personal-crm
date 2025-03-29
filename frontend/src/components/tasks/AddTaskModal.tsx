import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Users, Tag } from "lucide-react";
import { Label } from "@/components/ui/label";
import Dropzone from "react-dropzone";

interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddTaskModal({ isOpen, onClose }: AddTaskModalProps) {
  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [checklist, setChecklist] = useState<string[]>([""]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  }, []);


  const handleAddChecklistItem = () => {
    setChecklist([...checklist, ""]);
  };

  const handleChecklistChange = (index: number, value: string) => {
    const newChecklist = [...checklist];
    newChecklist[index] = value;
    setChecklist(newChecklist);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create New Task</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label>Task Title</Label>
            <Input
              placeholder="Enter task name here"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </div>

          <div className="flex gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Add Members
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Tag className="h-4 w-4" />
              Add Labels
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Due Date
            </Button>
          </div>

          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea
              placeholder="Enter your description here"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[100px]"
            />
            <div className="text-xs text-gray-500 text-right">
              {description.length}/50
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Task Checklist</Label>
              <Button
                variant="ghost"
                size="sm"
                className="text-xs"
                onClick={() => handleAddChecklistItem()}
              >
                Add Item
              </Button>
            </div>
            <div className="space-y-2">
              {checklist.map((item, index) => (
                <Input
                  key={index}
                  placeholder="Type here"
                  value={item}
                  onChange={(e) => handleChecklistChange(index, e.target.value)}
                />
              ))}
            </div>
          </div>

          <Dropzone onDrop={onDrop}>
            {({getRootProps, getInputProps, isDragActive}) => (
              <div {...getRootProps()} className="space-y-2">
                <Label>Attachment</Label>
                <div className="border-2 border-dashed rounded-lg p-4 text-center">
                  <div className="text-sm text-gray-500">
                    {/* implement drag and drop using dropzone */}
                    <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop the files here ...</p>
                ) : (
                  <p>Drag files here or Browse</p>
                )}
              </div>
            </div>
          </div>
            )}
          </Dropzone>
        </div>

        <DialogFooter className="flex justify-between">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" className="bg-black text-white hover:bg-gray-800">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
} 