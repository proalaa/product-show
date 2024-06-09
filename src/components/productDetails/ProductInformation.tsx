import React from "react";

interface ProductDetailsProps {
  name: string;
  price: number;
  description: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  name,
  price,
  description,
}) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-xl text-gray-600 mb-4">{price} €</p>
      <p className="text-gray-800">{description}</p>
    </div>
  );
};

export default ProductDetails;
