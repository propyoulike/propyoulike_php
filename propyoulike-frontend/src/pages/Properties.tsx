import React from "react";
import PropertyList from "@/components/PropertiesList";

const Properties: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center py-8">Available Properties</h1>
      <PropertyList />
    </div>
  );
};

export default Properties;