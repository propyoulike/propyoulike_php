import { BASE_URL, fetchJSON } from "./apiConfig";

const ENDPOINT = `${BASE_URL}/projects`;

export const getProjects = () => fetchJSON(`${ENDPOINT}/getProjects.php`);
export const insertProject = (data) => fetchJSON(`${ENDPOINT}/insertProject.php`, "POST", data);
export const updateProject = (id, data) => fetchJSON(`${ENDPOINT}/updateProject.php?id=${id}`, "PUT", data);
export const deleteProject = (id) => fetchJSON(`${ENDPOINT}/deleteProject.php?id=${id}`, "DELETE");