import React from "react";

interface ProductImageGalleryProps {
  images?: string[];
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  images,
}) => {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex flex-row sm:flex-col">
        {images?.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product image ${index + 1}`}
            className="w-20 h-20 sm:w-auto sm:h-20 cursor-pointer mb-2 sm:mb-0 sm:mr-2"
          />
        ))}
      </div>
      <div className="flex-1">
        <img src={images?.[0]} alt="Main product" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default ProductImageGallery;
