import { ProductApiInterface } from "@/types";
import ProductCard from "@/components/ProductCard.tsx";

interface ProductsGridPropType {
  products: Array<ProductApiInterface>;
}

const ProductsGrid: React.FC<ProductsGridPropType> = ({ products }) => {
  return (
    <div className={""}>
      <div
        className={
          "grid grid-cols-2 xl:grid-cols-3 gap-4 flex-wrap items-center"
        }
      >
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
