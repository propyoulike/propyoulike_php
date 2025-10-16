import React, { useEffect, useState } from "react";
import { getAllProperties } from "@/services/propertiesService";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Property {
  id: number;
  name: string;
  location: string;
  price: string;
  image: string;
}

const PropertyList: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await getAllProperties();
        setProperties(data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  if (loading) return <p className="text-center py-8">Loading properties...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {properties.map((p) => (
        <Card key={p.id} className="rounded-2xl shadow-md overflow-hidden">
          <img src={p.image} alt={p.name} className="h-48 w-full object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="text-sm text-gray-500">{p.location}</p>
            <p className="text-base font-bold mt-2">₹ {p.price}</p>
            <Button className="mt-3 w-full">View Details</Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default PropertyList;