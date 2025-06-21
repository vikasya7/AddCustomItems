import React, { createContext, useContext, useEffect, useState } from "react";

const ItemContext = createContext();

export const useItemContext = () => useContext(ItemContext);

export const ItemProvider = ({ children }) => {
  const [customItems, setCustomItems] = useState([]);

  // Load from localStorage on first render
  useEffect(() => {
    const stored = localStorage.getItem("customItems");
    if (stored) {
      setCustomItems(JSON.parse(stored));
    }
  }, []);

  const addItem = (item) => {
    const updatedItems = [item, ...customItems];
    setCustomItems(updatedItems);
    localStorage.setItem("customItems", JSON.stringify(updatedItems));
  };

  return (
    <ItemContext.Provider value={{ customItems, addItem }}>
      {children}
    </ItemContext.Provider>
  );
};

