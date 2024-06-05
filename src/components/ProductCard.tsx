import { ProductApiInterface } from "@/types";
import { useNavigate } from "react-router-dom";
import { StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

interface ProductCardProps {
  product: ProductApiInterface;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      key={product.id}
      className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden w-full max-w-xs rounded-xl border width cursor-pointer"
      onClick={handleCardClick}
    >
      <img
        src={product?.images?.[0]}
        alt={product.title}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-medium">{product.title}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <span>{product.category}</span>
          <span>·</span>
          <span>${product.price.toFixed(2)}</span>
        </div>
        <div className="flex items-center gap-1 mt-2">
          {[...Array(Math.floor(product.rating ?? 0))]?.map((_, i) => (
            <StarIcon key={i} className="w-4 h-4 fill-primary" />
          ))}
          {(product.rating ?? 0) % 1 !== 0 && (
            <StarIcon className="w-4 h-4 fill-primary" />
          )}
          {[...Array(5 - Math.ceil(product?.rating ?? 0))].map((_, i) => (
            <StarIcon
              key={i}
              className="w-4 h-4 fill-muted stroke-muted-foreground"
            />
          ))}
          <span className="text-sm text-gray-500 dark:text-gray-400">
            ({product?.rating?.toFixed(1)})
          </span>
        </div>

        <Button className={"w-full mt-3"}>Add To Cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;
