import React from "react";

const CardData = ({ el }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-lg font-bold text-gray-800">{el?.title}</h2>
      <p className="text-gray-600">{el?.desc}</p>
    </div>
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-lg font-bold text-gray-800">{el?.title}</h2>
      <p className="text-gray-600">{el?.desc}</p>
    </div>
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-lg font-bold text-gray-800">{el?.title}</h2>
      <p className="text-gray-600">{el?.desc}</p>
    </div>
  </div>
);

export default CardData;
