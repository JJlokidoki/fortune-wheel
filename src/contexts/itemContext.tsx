// @ts-nocheck
import React, { createContext, useState, useEffect, Children } from "react";
import uuid from "react-uuid";

export const ItemContext = createContext();

type Props = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element)
}

const ItemContextProvider = ({ children }) => {
  // COLOR STATE
  const [color, setColor] = useState("#f44336");
  const handleColorChange = (color: any) => {
    setColor(color.hex);
  };

  // ITEM STATE
  const [item, setItem] = useState(
    JSON.parse(localStorage.getItem("ItemsInLocalStorage")) || []
  );

  const addItem = (e: any) => {
    e.preventDefault();

    let newItem = {
      id: uuid(),
      item: e.target[0].value,
      times: parseInt(e.target[1].value),
      background: color
    };
    setItem((prev: any) => [...prev, newItem]);
    e.target.reset();
  };

  const removeItem = (key: any) => {
    let filteredItems = item.filter((el: any) => el.id !== key);
    setItem(filteredItems);
  };

  // UPDATE LOCAL STORAGE WHEN ITEM CHANGED
  useEffect(() => {
    localStorage.setItem("ItemsInLocalStorage", JSON.stringify(item));
  }, [item]);

  // transfer combined context to provider
  const contextValue = {
    color,
    handleColorChange,
    item,
    addItem,
    removeItem
  };

  return (
    <ItemContext.Provider value={contextValue}>{children}</ItemContext.Provider>
  );
};

export default ItemContextProvider;