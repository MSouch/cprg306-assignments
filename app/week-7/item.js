export default function Item({ name, quantity, category }) {
    return (
      <li className="bg-gray-800 p-4 rounded-lg">
        <div className="font-bold text-white">{name}</div>
        <div className="text-gray-300">Buy {quantity} in {category}</div>
      </li>
    );
  }
  