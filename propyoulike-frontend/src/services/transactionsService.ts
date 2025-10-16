// src/services/transactionsService.ts
import { fetchJSON, API_BASE } from "./apiConfig";

export interface Transaction {
  id: number;
  userId: number;
  propertyId: number;
  amount: number;
  date: string;
  status: "pending" | "completed" | "failed";
}

const TRANSACTIONS_URL = `${API_BASE}/transactions`;

export const getTransactions = async (): Promise<Transaction[]> => fetchJSON(TRANSACTIONS_URL);

export const createTransaction = async (tx: Omit<Transaction, "id">): Promise<Transaction> =>
  fetchJSON(TRANSACTIONS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tx),
  });

export const updateTransaction = async (id: number, tx: Partial<Transaction>): Promise<Transaction> =>
  fetchJSON(`${TRANSACTIONS_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tx),
  });

export const deleteTransaction = async (id: number): Promise<void> =>
  fetchJSON(`${TRANSACTIONS_URL}/${id}`, { method: "DELETE" });