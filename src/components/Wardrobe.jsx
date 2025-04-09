import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Wardrobe = () => {
  const { clothes } = useContext(AuthContext);
  const [filter, setFilter] = useState("All");

  const filteredClothes =
    filter === "All" ? clothes : clothes.filter((c) => c.type === filter);

  const categories = [
    "All",
    "T-shirt",
    "Jeans",
    "Shoes",
    "Jacket",
    "Shorts",
    "Kurta",
  ];

  return (
    <div className="p-4 text-white">
      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1 rounded-full text-sm sm:text-base transition-colors duration-200 ${
              filter === cat
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredClothes.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow rounded-lg p-2 text-center"
          >
            <img
              src={item.image}
              alt={item.type}
              className="w-full h-32 object-cover rounded"
            />
            <p className="mt-2 font-medium">{item.type}</p>
            <p className="text-sm text-gray-400">{item.color}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wardrobe;
