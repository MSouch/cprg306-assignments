// app/week-9/shopping-list/page.js

"use client";

import { useUserAuth } from "./_utils/auth-context";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ItemList from "./components/item-list";
import NewItemForm from "./components/new-item";
import itemsData from "./items.json";

const ShoppingListPage = () => {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  useEffect(() => {
    if (!user) {
      router.push("/week-9");
    }
  }, [user, router]);

  if (!user) {
    return <p>Redirecting...</p>;
  }

  return (
    <div className="shopping-list-container">
      <h1>Welcome to Your Shopping List</h1>
      <NewItemForm onAddItem={handleAddItem} />
      <ItemList items={items} />
    </div>
  );
};

export default ShoppingListPage;