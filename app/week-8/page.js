"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import "./styles.css";

export default function Page() {
  const [items, setItems] = useState([
    // Sample items
    { id: "1", name: "bananas 🍌", quantity: 6, category: "produce" },
    { id: "2", name: "bread 🍞", quantity: 2, category: "bakery" },
    { id: "3", name: "broccoli 🥦", quantity: 3, category: "produce" },
  ]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleItemSelect = (item) => {
    // Clean up item name for API
    const cleanName = item.name.replace(/[\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF]/g, '').trim().split(",")[0];
    setSelectedItemName(cleanName);
  };

  return (
    <div className="page-container">
      <div className="shopping-list">
        <NewItem onAddItem={(newItem) => setItems([...items, newItem])} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <MealIdeas ingredient={selectedItemName} />
    </div>
  );
}
