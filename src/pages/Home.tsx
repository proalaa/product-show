import { useEffect, useState } from "react";
import ProductsList from "@/components/ProductsList.tsx";
import Container from "@/components/common/Container.tsx";

export const Home = () => {
  const [productsState, setProductsState] = useState([]);
  const [categoriesState, setCategoriesState] = useState([]);
  const fetchProducts = async ({ search = "" }: { search?: string } = {}) => {
    const response = await fetch(
      `https://dummyjson.com/products${search ? "/search?q=" + search : ""}`,
    );
    const { products } = await response.json();

    setProductsState(products);
  };

  const fetchCategories = async () => {
    const response = await fetch(`https://dummyjson.com/products/categories`);

    const categories = await response.json();

    setCategoriesState(categories);
  };

  useEffect(() => {
    Promise.allSettled([fetchCategories(), fetchProducts()]);
  }, []);

  return (
    <>
      <Container>
        <ProductsList
          products={productsState}
          categories={categoriesState}
          fetchProduct={fetchProducts}
        />
      </Container>
    </>
  );
};
