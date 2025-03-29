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

export interface Task {
  id: number;
  title: string;
  dueDate: string;
  labels: Label[];
  assignees: string[];
  completed?: boolean;
  stats?: Stats;
} 