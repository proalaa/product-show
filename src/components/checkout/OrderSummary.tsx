// components/OrderSummary.js
import { Separator } from "@/components/ui/separator";

const OrderSummary = () => (
  <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
    <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
    <div className="space-y-2">
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>$99.99</span>
      </div>
      <div className="flex justify-between">
        <span>Tax</span>
        <span>$8.00</span>
      </div>
      <Separator />
      <div className="flex justify-between font-bold">
        <span>Total</span>
        <span>$107.99</span>
      </div>
    </div>
    <div className="mt-6">
      <h3 className="text-xl font-bold mb-2">Items in Cart</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://placehold.co/64x64"
              alt="Product Image"
              width={64}
              height={64}
              className="rounded-md"
            />
            <div>
              <h4 className="font-medium">Acme T-Shirt</h4>
              <p className="text-gray-500 dark:text-gray-400">
                Size: M, Color: Black
              </p>
            </div>
          </div>
          <span className="font-bold">$19.99</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://placehold.co/64x64"
              alt="Product Image"
              width={64}
              height={64}
              className="rounded-md"
            />
            <div>
              <h4 className="font-medium">Acme Hoodie</h4>
              <p className="text-gray-500 dark:text-gray-400">
                Size: L, Color: Navy
              </p>
            </div>
          </div>
          <span className="font-bold">$49.99</span>
        </div>
      </div>
    </div>
  </div>
);

export default OrderSummary;
