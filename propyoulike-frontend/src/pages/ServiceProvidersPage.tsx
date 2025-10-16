import React, { useEffect, useState } from "react";
import { getServiceProviders } from "@/services/serviceProviderService";

const ServiceProvidersPage: React.FC = () => {
  const [providers, setProviders] = useState<ServiceProvider[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProviders = async () => {
    try {
      const data = await getAllProviders();
      setProviders(data);
    } catch (error) {
      console.error("Failed to fetch service providers:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProviders();
  }, []);

  if (loading) return <div className="p-10 text-center">Loading service providers...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Service Providers</h1>
      <ul>
        {providers.map(p => (
          <li key={p.id} className="p-2 border-b">{p.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceProvidersPage;