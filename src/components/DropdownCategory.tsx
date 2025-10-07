import React, { useState } from "react";

function DropdownCategory() {
  const categories = ["Regueton", "Pop", "Kpop", "Salsa", "Rap"];
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="w-[300px] mx-auto mt-12 bg-blue-950 p-8 rounded-md">
      <label className="block mb-2 text-white font-semibold">
        Selecciona un tipo de musica:
      </label>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-full p-2.5 border border-gray-300 rounded-md bg-white text-gray-800 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
      >
        <option value="" disabled>
          Elige un tipo de musica 
        </option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>

      {selectedCategory && (
        <p className="mt-4 text-white">
          Has seleccionado: <span className="font-semibold">{selectedCategory}</span>
        </p>
      )}
    </div>
  );
}

export default DropdownCategory;
