import CartItem from "@/components/cart/CartItem.tsx";
import CartSummary from "@/components/cart/CartSummary.tsx";
import { useEffect, useState } from "react";
import { CartApiInterface } from "@/types";

const Cart = () => {
  const [cartData, setCartData] = useState<CartApiInterface | null>(null);
  const fetchCart = async () => {
    const response = await fetch("https://dummyjson.com/carts/1");

    const data = await response.json();

    setCartData(data);
  };

  const updateQuantity = async (id: number, quantity: number) => {
    try {
      const response = await fetch("https://dummyjson.com/carts/1", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          merge: true,
          products: [{ id, quantity }],
        }),
      });

      const data = await response.json();
      console.log("fetch after update");
      setCartData(data);
    } catch (e) {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const subtotal = cartData?.products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
          {cartData?.products?.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              handleQuantityChange={updateQuantity}
            />
          ))}
        </div>
        <CartSummary subtotal={subtotal} />
      </div>
    </div>
  );
};

export default Cart;
