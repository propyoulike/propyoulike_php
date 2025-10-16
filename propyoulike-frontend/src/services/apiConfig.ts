// src/services/apiConfig.js
//export const API_BASE = "https://propyoulike.com/api";
export const API_BASE = "http://localhost:8000/api";

export async function fetchJSON(url, options = {}) {
  const response = await fetch(url, options);
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || "API request failed");
  }
  return response.json();
}