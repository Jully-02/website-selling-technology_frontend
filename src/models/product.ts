import { Category } from "./category";
import { ProductImage } from "./product.image";

export interface Product {
    id: number;
    title?: string;
    price?: number;
    discount?: number;
    average_rate?: number,
    specification_id?: number,
    thumbnail?: string;
    description?: string;
    categories?: Category[];
    brand_id?: number,
    url?: string;
    feedbacks?: number[],
    favorites?: number[],
    product_images?: ProductImage[];
  }