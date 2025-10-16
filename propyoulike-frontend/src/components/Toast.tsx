import React from "react";

const Toast = ({ message, type }) => {
  if (!message) return null;

  const colors = {
    success: "bg-green-500",
    error: "bg-red-500",
  };

  return (
    <div
      className={`fixed top-5 right-5 px-4 py-2 rounded-lg text-white shadow-lg ${colors[type]}`}
    >
      {message}
    </div>
  );
};

export default Toast;