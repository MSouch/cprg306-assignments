import { useState } from "react";
import Item from "./item";
import "../styles.css";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div>
      <div className="sort-buttons">
        <button onClick={() => setSortBy("name")} className="sort-button name-button">Name</button>
        <button onClick={() => setSortBy("category")} className="sort-button category-button">Category</button>
      </div>
      {sortedItems.map((item) => (
        <Item key={item.id} item={item} onSelect={onItemSelect} />
      ))}
    </div>
  );
}
