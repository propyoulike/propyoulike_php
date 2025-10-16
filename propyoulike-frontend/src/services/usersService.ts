// src/services/usersService.ts
import { fetchJSON, API_BASE } from "./apiConfig";

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const USERS_URL = `${API_BASE}/users`;

export const getUsers = async (): Promise<User[]> => fetchJSON(USERS_URL);

export const createUser = async (user: Omit<User, "id">): Promise<User> =>
  fetchJSON(USERS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

export const updateUser = async (id: number, user: Partial<User>): Promise<User> =>
  fetchJSON(`${USERS_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

export const deleteUser = async (id: number): Promise<void> =>
  fetchJSON(`${USERS_URL}/${id}`, { method: "DELETE" });