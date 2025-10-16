import React, { useEffect, useState } from "react";
import { getTransactions } from "@/services/transactionsService";

const TransactionsPage: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTransactions = async () => {
    try {
      const data = await getAllTransactions();
      setTransactions(data);
    } catch (error) {
      console.error("Failed to fetch transactions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  if (loading) return <div className="p-10 text-center">Loading transactions...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">User ID</th>
            <th className="p-2 border">Property ID</th>
            <th className="p-2 border">Amount</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(t => (
            <tr key={t.id} className="text-center">
              <td className="p-2 border">{t.id}</td>
              <td className="p-2 border">{t.userId}</td>
              <td className="p-2 border">{t.propertyId}</td>
              <td className="p-2 border">{t.amount}</td>
              <td className="p-2 border">{t.status}</td>
              <td className="p-2 border">{t.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsPage;