import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import "./Cart.css";

const items1 = [
  { id: 1, name: "Taco Seasoning", price: 30.25, qty: 2 },
  { id: 2, name: "Pinto Beans", price: 18.75, qty: 3 },
  { id: 3, name: "Sour Cream", price: 43.5, qty: 1 },
];

const Cart = () => {
//   const initialState = JSON.parse(window.localStorage.getItem("items"));
  const [items, setItems] = useState(items1);

  useEffect(() => {
    // window.localStorage.setItem("items", JSON.stringify(items));
    
  }, [items]);

  const updateQty = (id, newQty) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, qty: newQty };
      }
      return item;
    });
    setItems(newItems);
  };

  const grandtotal = items
    .reduce((total, item) => total + item.qty * item.price, 0)
    .toFixed(2);
  return (
    <div className="Cart">
      <h4>Shoping Cart</h4>
      {items.map((item) => (
        <CartItem key={item.id} updateQty={updateQty} {...item} />
      ))}
      <h4 className="text-right mt-4">Grand Total : {grandtotal} ฿</h4>
    </div>
  );
};

export default Cart;
