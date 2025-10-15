import { BASE_URL, fetchJSON } from "./apiConfig";

const ENDPOINT = `${BASE_URL}/builders`;

export const getBuilders = () => fetchJSON(`${ENDPOINT}/getBuilders.php`);
export const insertBuilder = (data) => fetchJSON(`${ENDPOINT}/insertBuilder.php`, "POST", data);
export const updateBuilder = (id, data) => fetchJSON(`${ENDPOINT}/updateBuilder.php?id=${id}`, "PUT", data);
export const deleteBuilder = (id) => fetchJSON(`${ENDPOINT}/deleteBuilder.php?id=${id}`, "DELETE");