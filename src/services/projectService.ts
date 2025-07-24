import type { Project } from "../types/Project";

const projects: Project[] = [
  {
    id: "1",
    name: "Project One",
    description: "This is project one",
    createdAt: "2023-07-24T12:00:00Z",
    tasks: [
      { id: "t1", title: "Task A", description: "Task description", status: "done" },
      { id: "t2", title: "Task B", status: "in_progress" },
    ],
  },
  {
    id: "2",
    name: "Project Two",
    description: undefined,
    createdAt: "2023-07-20T08:30:00Z",
    tasks: [{ id: "t3", title: "Task C", status: "todo" }],
  },
];

export const projectService = {
  getAll: (): Project[] => {
    return projects;
  },

  getById: (id: string): Project | undefined => {
    return projects.find((p) => p.id === id);
  },
};
