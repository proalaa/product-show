import { CategoriesApiInterface, ProductApiInterface } from "@/types";
import ProductsGrid from "@/components/ProductsGrid.tsx";
import SearchInput from "@/components/SearchInput.tsx";

import { useState, useMemo, useEffect } from "react";
import ProductsFilter from "@/components/ProductsFilter.tsx";

export default function ProductsList({
  products,
  categories,
  fetchProduct,
}: {
  products: Array<ProductApiInterface>;
  categories: Array<CategoriesApiInterface>;
  fetchProduct: (args: { search: string }) => void;
}) {
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    priceRange: { min: 0, max: 1000 },
    rating: 0,
  });

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchProduct({ search: searchTerm });
  }, [searchTerm]);

  const handleFilterChange = (type: string, value: any) => {
    switch (type) {
      case "category":
        setSelectedFilters({
          ...selectedFilters,
          category: selectedFilters.category.includes(value)
            ? selectedFilters.category.filter((item) => item !== value)
            : [...selectedFilters.category, value],
        });
        break;
      case "priceRange":
        setSelectedFilters({
          ...selectedFilters,
          priceRange: value,
        });
        break;
      case "rating":
        setSelectedFilters({
          ...selectedFilters,
          rating: value,
        });
        break;
      default:
        break;
    }
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      return (
        (selectedFilters.category.length === 0 ||
          selectedFilters.category.includes(product.category)) &&
        product.price >= selectedFilters.priceRange.min &&
        product.price <= selectedFilters.priceRange.max &&
        product.rating >= selectedFilters.rating
      );
    });
  }, [selectedFilters, products]);

  return (
    <section className="py-8 flex flex-col gap-10">
      <SearchInput setModel={setSearchTerm} model={searchTerm} />
      <div className="flex flex-col md:flex-row justify-between">
        <ProductsFilter
          categories={categories}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          handleFilterChange={handleFilterChange}
        />
        <ProductsGrid products={filteredProducts} />
      </div>
    </section>
  );
}
