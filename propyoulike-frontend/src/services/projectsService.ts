// src/services/projectsService.ts
import { fetchJSON, API_BASE } from "./apiConfig";

export interface Project {
  id: number;
  name: string;
  builderId: number;
  location: string;
  priceRange: string;
}

const PROJECTS_URL = `${API_BASE}/projects`;

export const getProjects = async (): Promise<Project[]> =>
  fetchJSON(`${PROJECTS_URL}/getProjects.php`);

export const createProject = async (project: Omit<Project, "id">): Promise<Project> =>
  fetchJSON(`${PROJECTS_URL}/insertProject.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(project),
  });

export const updateProject = async (id: number, project: Partial<Project>): Promise<Project> =>
  fetchJSON(`${PROJECTS_URL}/updateProject.php?id=${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(project),
  });

export const deleteProject = async (id: number): Promise<void> =>
  fetchJSON(`${PROJECTS_URL}/deleteProject.php?id=${id}`, { method: "DELETE" });