import type { Task } from "./Task";

export interface Project {
  id: string;
  name: string;
  description?: string;
  createdAt: string; 
  updatedAt?: string;
  tasks: Task[];
}