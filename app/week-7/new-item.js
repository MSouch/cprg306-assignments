import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: uuidv4(),
      name,
      quantity,
      category,
    };
    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-4 rounded-lg space-y-4 mb-6">
      <input
        type="text"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full p-2 rounded text-black"
      />
      <div className="flex items-center space-x-2">
        <button
          type="button"
          onClick={() => setQuantity(q => Math.max(1, q - 1))}
          className="bg-gray-700 text-white p-2 rounded"
        >
          -
        </button>
        <span className="text-white">{quantity}</span>
        <button
          type="button"
          onClick={() => setQuantity(q => Math.min(20, q + 1))}
          className="bg-blue-500 text-white p-2 rounded"
        >
          +
        </button>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-white p-2 rounded text-black"
        >
          <option value="produce">Produce</option>
          <option value="bakery">Bakery</option>
          <option value="dairy">Dairy</option>
          <option value="meat">Meat</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="household">Household</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-600 w-full text-white p-2 rounded">+</button>
    </form>
  );
}
