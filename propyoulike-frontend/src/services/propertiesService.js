import { BASE_URL, fetchJSON } from "./apiConfig";

const ENDPOINT = `${BASE_URL}/properties`;

export const getProperties = () => fetchJSON(`${ENDPOINT}/getProperties.php`);
export const insertProperty = (data) => fetchJSON(`${ENDPOINT}/insertProperty.php`, "POST", data);
export const updateProperty = (id, data) => fetchJSON(`${ENDPOINT}/updateProperty.php?id=${id}`, "PUT", data);
export const deleteProperty = (id) => fetchJSON(`${ENDPOINT}/deleteProperty.php?id=${id}`, "DELETE");