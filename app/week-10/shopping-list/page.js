"use client";

import { useUserAuth } from "./_utils/auth-context";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ItemList from "./components/item-list";
import NewItemForm from "./components/new-item";
import { getItems, addItem } from "./_services/shopping-list-service";

const ShoppingListPage = () => {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState([]);

  async function loadItems() {
    if (user) {
      const items = await getItems(user.uid);
      setItems(items);
    }
  }

  useEffect(() => {
    loadItems();
  }, [user]);

  const handleAddItem = async (newItem) => {
    if (user) {
      const id = await addItem(user.uid, newItem);
      setItems([...items, { ...newItem, id }]);
    }
  };

  useEffect(() => {
    if (!user) {
      router.push("/week-10");
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