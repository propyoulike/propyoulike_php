import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
      {image && <img src={image} alt={title} className="w-full h-48 object-cover rounded" />}
      <h2 className="mt-4 text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default Card;