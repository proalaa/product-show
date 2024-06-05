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
  thumbnail?: URL;
  images?: Array<URL>;
}

export interface CategoriesApiInterface {
  name: string;
  slug: string;
  url: URL;
}
