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

export interface CartApiInterface {
  id: number;
  products: CartProductApiInterface[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

export interface CartProductApiInterface {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
}
