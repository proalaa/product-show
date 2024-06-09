import React, { useState } from "react";
import { CartProductApiInterface } from "@/types";

interface CartItemProps {
  item: CartProductApiInterface;
  handleQuantityChange: (id: number, quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, handleQuantityChange }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const onQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(e.target.value);
    setQuantity(newQuantity);
    handleQuantityChange(item.id, newQuantity);
  };
  return (
    <div className="mb-4 flex flex-col md:flex-row items-center p-4 border rounded-lg shadow-sm">
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-24 h-24 object-cover md:mr-4 mb-2 md:mb-0"
      />
      <div className="flex flex-col md:flex-row justify-between w-full items-center">
        <span className="font-semibold text-lg mb-2 md:mb-0 md:flex-1 text-center md:text-left">
          {item.title}
        </span>
        <span className="text-lg font-medium md:flex-1 text-center md:text-right">
          €{item.price.toFixed(2)}
        </span>
        <input
          type="number"
          min="1"
          value={quantity}
          className="border p-2 w-16 text-center rounded-lg md:ml-4 mb-2 md:mb-0"
          onChange={onQuantityChange}
        />
        <span className="text-lg font-medium md:flex-1 text-center md:text-right">
          €{(item.price * item.quantity).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
