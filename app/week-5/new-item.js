// app/week-5/new-item.js
"use client";

import { useState } from 'react';

export default function NewItem() {
  // Initialize state variables
  const [name, setName] = useState(""); // name field
  const [quantity, setQuantity] = useState(1); // quantity field (from Week 4)
  const [category, setCategory] = useState("Produce"); // category field

  // Increment and Decrement functions for quantity
  const increment = () => setQuantity((prev) => Math.min(prev + 1, 20));
  const decrement = () => setQuantity((prev) => Math.max(prev - 1, 1));

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      name,
      quantity,
      category,
    };

    console.log(item); // Log the item object
    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

    // Reset the form fields
    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white shadow-lg rounded-lg w-64 text-center"
    >
      <h1 className="text-lg text-black font-semibold mb-4">Add Item</h1>
      
      {/* Name Field */}
      <div className="mb-4">
        <label className="block text-left text-black mb-1">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full text-black px-3 py-2 border rounded"
          placeholder="Enter item name"
        />
      </div>

      {/* Quantity Field (from Week 4) */}
      <div className="mb-4 flex items-center text-black justify-center space-x-4">
        <button
          type="button"
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-3 py-1 rounded bg-red-500 text-black ${quantity === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          -
        </button>
        <span className="text-xl font-bold">{quantity}</span>
        <button
          type="button"
          onClick={increment}
          disabled={quantity === 20}
          className={`px-3 py-1 rounded bg-green-500 text-black ${quantity === 20 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          +
        </button>
      </div>

      {/* Category Field */}
      <div className="mb-4">
        <label className="block text-left text-black mb-1">Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full text-black px-3 py-2 border rounded"
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-black rounded-lg"
      >
        Submit
      </button>
    </form>
  );
}
