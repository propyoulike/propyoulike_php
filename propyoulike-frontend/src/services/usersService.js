import { BASE_URL, fetchJSON } from "./apiConfig";

const ENDPOINT = `${BASE_URL}/users`;

export const getUsers = () => fetchJSON(`${ENDPOINT}/getUsers.php`);
export const insertUser = (data) => fetchJSON(`${ENDPOINT}/insertUser.php`, "POST", data);
export const updateUser = (id, data) => fetchJSON(`${ENDPOINT}/updateUser.php?id=${id}`, "PUT", data);
export const deleteUser = (id) => fetchJSON(`${ENDPOINT}/deleteUser.php?id=${id}`, "DELETE");