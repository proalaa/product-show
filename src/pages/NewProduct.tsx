import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import NewProductHeader from "@/components/newProduct/NewProductHeader";
import ProductFormSection from "@/components/newProduct/ProductFormSection";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { DevTool } from "@hookform/devtools";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { CategoriesApiInterface } from "@/types";

const productSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  category: z.string().min(1, "Category is required"),
  price: z.number().positive("Price must be positive"),
  rating: z.number().min(0).max(5, "Rating must be between 0 and 5"),
  images: z
    .any()
    .refine(
      (files) => files && files.length > 0,
      "At least one image is required",
    ),
});

type ProductFormValues = z.infer<typeof productSchema>;

export default function NewProduct() {
  const { control, handleSubmit } = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
  });

  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();
  const onSubmit = async (data: ProductFormValues) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", data.price.toString());
    formData.append("rating", data.rating.toString());
    formData.append("images", data.images);

    try {
      const response = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        body: formData,
      });
      await response.json();
      toast("Product has been created.");
      navigate("/");
    } catch (error) {
      toast(`Error adding product: ${error}`);
    }
  };

  const fetchAllCategories = async () => {
    const response = await fetch("https://dummyjson.com/products/categories");
    const data = await response.json();
    setCategories(
      data.map((category: CategoriesApiInterface) => ({
        label: category.name,
        value: category.name,
      })),
    );
  };

  useEffect(() => {
    fetchAllCategories();
  }, []);

  const productFields = [
    {
      name: "title",
      label: "Title",
      placeholder: "Enter product title",
      type: "text",
    },
    {
      name: "description",
      label: "Description",
      placeholder: "Enter product description",
      type: "text",
    },
    {
      name: "category",
      label: "Category",
      placeholder: "Select category",
      type: "select",
      options: categories,
    },
    {
      name: "price",
      label: "Price",
      placeholder: "Enter product price",
      type: "number",
    },
    {
      name: "rating",
      label: "Rating",
      placeholder: "Enter from 1 to 5",
      type: "number",
    },
    { name: "images", label: "Images", type: "image" },
  ];

  return (
    <div className="gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <div className="grid gap-4 md:gap-10 items-start">
        <NewProductHeader />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 gap-3">
            {productFields.map((field, index) => (
              <ProductFormSection
                key={index}
                control={control}
                fields={[field]}
              />
            ))}
          </div>
          <DevTool control={control} />
          <div className="flex justify-end w-full">
            <Button size="lg" type="submit" className="w-full">
              Save Product
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
