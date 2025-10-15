import { BASE_URL, fetchJSON } from "./apiConfig";

const ENDPOINT = `${BASE_URL}/transactions`;

export const getTransactions = () => fetchJSON(`${ENDPOINT}/getTransactions.php`);
export const insertTransaction = (data) => fetchJSON(`${ENDPOINT}/insertTransaction.php`, "POST", data);
export const updateTransaction = (id, data) => fetchJSON(`${ENDPOINT}/updateTransaction.php?id=${id}`, "PUT", data);
export const deleteTransaction = (id) => fetchJSON(`${ENDPOINT}/deleteTransaction.php?id=${id}`, "DELETE");