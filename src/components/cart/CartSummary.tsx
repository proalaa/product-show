import React from "react";
import { Button } from "@/components/ui/button.tsx";
import { Card } from "@/components/ui/card.tsx";
import { useNavigate } from "react-router-dom";

interface CartTotalsProps {
  subtotal?: number;
}

const CartSummary: React.FC<CartTotalsProps> = ({ subtotal }) => {
  const navigate = useNavigate();

  const proceedToCheckout = () => {
    navigate("/checkout");
  };
  return (
    <div className="w-full md:w-1/3 md:ml-4">
      <h2 className="text-2xl font-bold mb-4">Cart Totals</h2>
      <Card className="p-4">
        <div className="flex justify-between mb-4">
          <span>Subtotal</span>
          <span>€{subtotal?.toFixed(2)}</span>
        </div>
        <div className="mb-4">
          <span className="block mb-2">Shipping</span>
          <div className="flex flex-col">
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="shipping"
                className="mr-2"
                defaultChecked
              />{" "}
              Free Shipping
            </label>
            <label className="flex items-center mb-2">
              <input type="radio" name="shipping" className="mr-2" /> Flat Rate:
              €10.00
            </label>
            <label className="flex items-center">
              <input type="radio" name="shipping" className="mr-2" /> Pickup:
              €15.00
            </label>
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <span>Total</span>
          <span>€{subtotal?.toFixed(2)}</span>
        </div>
        <Button className="w-full" onClick={proceedToCheckout}>
          Proceed to Checkout
        </Button>
      </Card>
    </div>
  );
};

export default CartSummary;
