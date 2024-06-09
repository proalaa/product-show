export interface ProductApiInterface {
  id: string | number;
  title: string;
  description: string;
  category?: string;
  price: number;
  discountPercentage?: number | string;
  rating?: number;
  stock?: string;
  tags?: string;
  brand?: string;
  dimensions?: [];
  thumbnail?: string;
  images?: Array<string>;
}

export interface CategoriesApiInterface {
  name: string;
  slug: string;
  url: URL;
}
