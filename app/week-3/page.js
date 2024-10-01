"use client";

import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <main className="p-6 bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-left">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;
