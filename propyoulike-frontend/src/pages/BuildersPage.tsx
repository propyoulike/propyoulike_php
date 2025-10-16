import React, { useEffect, useState } from "react";
import { getBuilders } from "@/services/buildersService";

// (optional) If you want to type the response, define the interface here:
interface Builder {
  id: number;
  name: string;
  description?: string;
  logo?: string;
}

const BuildersPage: React.FC = () => {
  const [builders, setBuilders] = useState<Builder[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBuilders = async () => {
    try {
      const data = await getBuilders();
      setBuilders(data);
    } catch (error) {
      console.error("Failed to fetch builders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBuilders();
  }, []);

  if (loading) return <div className="p-10 text-center">Loading builders...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Builders</h1>
      <ul>
        {builders.map(b => (
          <li key={b.id} className="p-2 border-b">{b.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BuildersPage;