// src/services/api.ts
export const BASE_URL = "http://localhost:8000/api";

export const fetchJSON = async (url: string, method = "GET", data?: any) => {
  const res = await fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: data ? JSON.stringify(data) : undefined,
  });
  return res.json();
};

// optional default export if some services expect it
export default { fetchJSON, BASE_URL };