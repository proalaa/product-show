import React, { useEffect, useState } from "react";

import { ProductApiInterface } from "@/types";
import ProductImageGallery from "@/components/productDetails/ProductImageGallery.tsx";
import ProductInformation from "@/components/productDetails/ProductInformation.tsx";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";

const ProductDetails: React.FC = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const handleAddToBag = () => {
    navigate("/cart");
  };

  const [productData, setProductData] = useState<ProductApiInterface>(
    {} as ProductApiInterface,
  );

  const fetchProduct = async () => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);

    const data = await response.json();

    console.log(data);
    setProductData(data);
  };

  useEffect(() => {
    console.log(id);
    fetchProduct();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-4">
          <ProductImageGallery images={productData.images} />
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <ProductInformation
            name={productData.title}
            price={productData.price}
            description={productData.description}
          />
          <Button className={"w-full mt-3"} onClick={handleAddToBag}>
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
