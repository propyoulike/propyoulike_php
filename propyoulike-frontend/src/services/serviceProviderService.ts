// src/services/serviceProviderService.ts
import { fetchJSON, API_BASE } from "./apiConfig";

export interface ServiceProvider {
  id: number;
  name: string;
  serviceType: string;
  phone: string;
  email: string;
}

const PROVIDERS_URL = `${API_BASE}/serviceProviders`;

export const getServiceProviders = async (): Promise<ServiceProvider[]> => fetchJSON(PROVIDERS_URL);

export const createServiceProvider = async (sp: Omit<ServiceProvider, "id">): Promise<ServiceProvider> =>
  fetchJSON(PROVIDERS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(sp),
  });

export const updateServiceProvider = async (id: number, sp: Partial<ServiceProvider>): Promise<ServiceProvider> =>
  fetchJSON(`${PROVIDERS_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(sp),
  });

export const deleteServiceProvider = async (id: number): Promise<void> =>
  fetchJSON(`${PROVIDERS_URL}/${id}`, { method: "DELETE" });