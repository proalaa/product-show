import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "@/pages/AppLayout.tsx";
import { Home } from "@/pages/Home.tsx";
import Cart from "@/pages/Cart.tsx";
import ProductDetails from "@/pages/ProductDetails.tsx";
import Checkout from "@/pages/Checkout.tsx";
import Congrats from "@/pages/Congrats.tsx";
import NewProduct from "@/pages/NewProduct.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path={"cart"} element={<Cart />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="congrats" element={<Congrats />} />
          <Route path={"new-product"} element={<NewProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
