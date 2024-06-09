import React from "react";

const NewProductHeader: React.FC = () => (
  <div className="grid gap-4">
    <h1 className="font-bold text-3xl lg:text-4xl">Add New Product</h1>
    <p className="text-gray-500 dark:text-gray-400">
      Fill out the form to add a new product to your catalog.
    </p>
  </div>
);

export default NewProductHeader;
