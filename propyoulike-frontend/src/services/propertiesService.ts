// src/services/propertiesService.ts
import { fetchJSON, API_BASE } from "./apiConfig";

export interface Property {
  id: number;
  name: string;
  location: string;
  price: number;
  type: string;
}

const PROPERTIES_URL = `${API_BASE}/properties`;

export const getProperties = async (): Promise<Property[]> =>
  fetchJSON(`${PROPERTIES_URL}/getProperties.php`);

export const createProperty = async (property: Omit<Property, "id">): Promise<Property> =>
  fetchJSON(`${PROPERTIES_URL}/insertProperty.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(property),
  });

export const updateProperty = async (id: number, property: Partial<Property>): Promise<Property> =>
  fetchJSON(`${PROPERTIES_URL}/updateProperty.php?id=${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(property),
  });

export const deleteProperty = async (id: number): Promise<void> =>
  fetchJSON(`${PROPERTIES_URL}/deleteProperty.php?id=${id}`, { method: "DELETE" });