export interface Stats {
  progress: string;
  comments: number;
  likes: number;
}

export interface Label {
  text: string;
  color: string;
}

export interface Status {
  text: string;
  color: string;
}

export interface ChecklistItem {
  title: string;
  completed: boolean;
}

export interface Checklist {
  title: string;
  items: ChecklistItem[];
}

export interface Activity {
  user: string;
  action: string;
  timestamp: string;
}

export interface Task {
  id: number;
  title: string;
  dueDate: string;
  labels: Label[];
  assignees: string[];
  completed?: boolean;
  stats?: Stats;
  description?: string;
  attachments?: string[];
  checklists?: Checklist[];
  activities?: Activity[];
} 
