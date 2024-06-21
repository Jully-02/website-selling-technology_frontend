import { environment } from "../environments/environment";
import { Product } from "../models/product";
import { request } from "./request.api";
import { ProductImage } from '../models/product.image';

const API_BASE_URL = `${environment.apiBaseUrl}/products`;

interface ProductInterface {
    products: Product[];
    totalPages: number;
}

export async function getAllProducts(page: number = 0, limit: number = 16, keyword: string = '', category_ids: number[] = [], brand_ids: number[] = [], sort_option: string = 'default'):Promise<ProductInterface> {
    const data: Product [] = [];

    const endpoint = `?page=${page}&limit=${limit}&keyword=${keyword}&category-ids=${category_ids.join(',')}&brand-ids=${brand_ids.join(',')}&sort=${sort_option}`;
    const response = await request(`${API_BASE_URL}${endpoint}`);
    const totalPages: number = response.totalPages;
    
    const reponseData = response.productResponses;
    for (const key in reponseData) {
        data.push({
            id: reponseData[key].id,
            title: reponseData[key].title,
            price: reponseData[key].price,
            discount: reponseData[key].discount,
            description: reponseData[key].description,
            average_rate: reponseData[key].average_rate,
            brand_id: reponseData[key].brand_id,
            specification_id: reponseData[key].specification_id,
            categories: reponseData[key].categories,
            thumbnail: `${API_BASE_URL}/images/${reponseData[key].thumbnail}`,
            product_images: reponseData[key].product_images
        });
    }

    return {products: data, totalPages: totalPages};
}

export async function getProductById (product_id: number): Promise<Product> {
    const endpoint = `/${product_id}`;
    const response = await request(`${API_BASE_URL}${endpoint}`);
    
    const data: Product = {
        id: response.id,
        title: response.title,
        price: response.price,
        discount: response.discount,
        description: response.description,
        average_rate: response.average_rate,
        brand_id: response.brand_id,
        specification_id: response.specification_id,
        categories: response.categories,
        thumbnail: `${API_BASE_URL}/images/${response.thumbnail}`,
        product_images: response.product_images
    }

    data.product_images?.map(product_image => {
        product_image.image_url =  `${API_BASE_URL}/images/${product_image.image_url}`;
    })
    return data;
}