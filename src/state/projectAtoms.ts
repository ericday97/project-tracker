import { atom } from "jotai";
import type { Project } from "../types/Project";
import { projectService } from "../services/projectService";

// Initialize atom with mock data from service
export const projectsAtom = atom<Project[]>(projectService.getAll());

// Optional: atom for selected project ID (for routing, etc.)
export const selectedProjectIdAtom = atom<string | null>(null);

// Derived atom to get the selected project (if you want)
export const selectedProjectAtom = atom((get) => {
  const id = get(selectedProjectIdAtom);
  return get(projectsAtom).find((p) => p.id === id) ?? null;
});
