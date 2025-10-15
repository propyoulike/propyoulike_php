import React, { useEffect, useState } from "react";
import { getBuilders } from "../services";
import Card from "../components/Card";

const BuildersPage = () => {
  const [builders, setBuilders] = useState([]);

  useEffect(() => {
    async function fetchBuilders() {
      const data = await getBuilders();
      if (data) setBuilders(data);
    }
    fetchBuilders();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Builders</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {builders.map((b) => (
          <Card key={b.id} title={b.name} description={b.description} image={b.logo_url} />
        ))}
      </div>
    </div>
  );
};

export default BuildersPage;