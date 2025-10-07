import React, { useState } from "react";

function TextCard() {
  const [fontSize, setFontSize] = useState(14); 

  const incrementFont = () => setFontSize((value) => value + 2);
  const decrementFont = () => setFontSize((value) => (value > 8 ? value - 2 : value));

  return (
    <div className="bg-blue-950 rounded-xl shadow-lg p-6 w-[300px] text-center mx-auto mt-12">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Tamaño de Texto</h2>
      
      <p
        style={{ fontSize: `${fontSize}px` }}
        className="text-gray-700 dark:text-gray-300 mb-6 transition-all"
      >
        Puedes aumentar o disminuir el tamaño de este texto ¡Intentalo!
      </p>

      <div className="flex justify-center gap-4">
        <button
          onClick={decrementFont}
          className="bg-white text-blue-950 px-4 py-2 rounded-md font-semibold hover:bg-red-600 transition-colors"
        >
          Disminuir 
        </button>

        <button
          onClick={incrementFont}
          className="bg-white text-blue-950 px-4 py-2 rounded-md font-semibold hover:bg-green-600 transition-colors"
        >
          Aumentar
        </button>
      </div>
    </div>
  );
}

export default TextCard;
