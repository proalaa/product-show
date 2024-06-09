import { CheckoutForm } from "@/components/checkout/CheckoutForm.tsx";
import OrderSummary from "@/components/checkout/OrderSummary.tsx";

export default function Checkout() {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-12 px-4">
      <div>
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>
        <CheckoutForm />
      </div>
      <OrderSummary />
    </div>
  );
}
