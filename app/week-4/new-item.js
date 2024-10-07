"use client";

import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => Math.min(prev + 1, 20));
  const decrement = () => setQuantity((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Selected Quantity: ${quantity}`);
    setQuantity(1);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-black shadow-lg rounded-lg w-64 text-center">
      <h1 className="text-lg font-semibold mb-4">Select Quantity</h1>
      <div className="flex items-center justify-center space-x-4">
        <button
          type="button"
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-3 py-1 rounded bg-red-500 text-white ${quantity === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
         - 
        </button>
        <span className="text-xl font-bold">{quantity}</span>
        <button
          type="button"
          onClick={increment}
          disabled={quantity === 20}
          className={`px-3 py-1 rounded bg-green-500 text-white ${quantity === 20 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          +
          </button>
      </div>
      <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
        Submit
      </button>
    </form>
  );
}
