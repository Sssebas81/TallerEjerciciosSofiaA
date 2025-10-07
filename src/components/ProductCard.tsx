import React, { useState } from "react";

function ProductCard() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <div className="bg-blue-950 rounded-xl shadow-lg p-6 w-72 text-center mx-auto mt-12 text-white">
      {/* Imagen del producto */}
      <img
        src="https://akamai.sscdn.co/letras/360x360/albuns/8/0/0/d/2167111711384431.jpg"
        alt="Producto"
        className="w-64 h-64 mx-auto mb-4 rounded-lg object-cover"
      />

      {/* Nombre del producto */}
      <h2 className="text-xl font-bold mb-2 text-white">Álbum NCT</h2>

      {/* Precio */}
      <p className="text-lg mb-4 text-gray-300">$1000</p>

      {/* Contador de cantidad */}
      <div className="flex justify-center items-center gap-4 mb-2">
        <button
          onClick={decreaseQuantity}
          className="bg-white text-black px-4 py-2 rounded-md font-bold hover:bg-red-600 transition-colors"
        >
          -
        </button>
        <span className="text-xl font-semibold">{quantity}</span>
        <button
          onClick={increaseQuantity}
          className="bg-white text-black px-4 py-2 rounded-md font-bold hover:bg-green-600 transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
