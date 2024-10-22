import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="flex flex-col justify-center p-4 bg-gray-800 text-white rounded-lg mb-4">
      <span className="text-xl font-bold">{name}</span>
      <span className="text-sm text-gray-300">Buy {quantity} in {category}</span>
    </li>
  );
};

export default Item;
