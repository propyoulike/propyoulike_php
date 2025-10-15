export const BASE_URL = "https://propyoulike.com/api";

// Generic helper for GET, POST, PUT, DELETE
export const fetchJSON = async (url, method = "GET", body = null) => {
  try {
    const options = {
      method,
      headers: { "Content-Type": "application/json" },
    };
    if (body) options.body = JSON.stringify(body);

    const response = await fetch(url, options);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    return await response.json();
  } catch (err) {
    console.error(`API Error (${method} ${url}):`, err);
    return null;
  }
};