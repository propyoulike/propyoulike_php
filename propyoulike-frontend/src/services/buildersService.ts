// src/services/buildersService.ts
import { fetchJSON, API_BASE } from "./apiConfig";

export interface Builder {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const BUILDERS_URL = `${API_BASE}/builders`;

export const getBuilders = async (): Promise<Builder[]> =>
  fetchJSON(`${BUILDERS_URL}/getBuilders.php`);

export const createBuilder = async (builder: Omit<Builder, "id">): Promise<Builder> =>
  fetchJSON(`${BUILDERS_URL}/insertBuilder.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(builder),
  });

export const updateBuilder = async (id: number, builder: Partial<Builder>): Promise<Builder> =>
  fetchJSON(`${BUILDERS_URL}/updateBuilder.php?id=${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(builder),
  });

export const deleteBuilder = async (id: number): Promise<void> =>
  fetchJSON(`${BUILDERS_URL}/deleteBuilder.php?id=${id}`, {
    method: "DELETE",
  });