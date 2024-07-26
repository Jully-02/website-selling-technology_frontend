import { environment } from "../environments/environment";
import { Product } from "../models/product";
import { request } from "./request.api";

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
    
    const responseData = response.productResponses;
    for (const key in responseData) {
        data.push({
            id: responseData[key].id,
            title: responseData[key].title,
            price: responseData[key].price,
            discount: responseData[key].discount,
            description: responseData[key].description,
            average_rate: responseData[key].average_rate,
            brand_id: responseData[key].brand_id,
            specification_id: responseData[key].specification_id,
            categories: responseData[key].categories,
            thumbnail: `${API_BASE_URL}/images/${responseData[key].thumbnail}`,
            product_images: responseData[key].product_images,
            brand_name: responseData[key].brand_name,
            category_names: responseData[key].category_names
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
        product_images: response.product_images,
        category_names: response.category_names,
        brand_name: response.brand_name
    }

    data.product_images?.map(product_image => {
        product_image.image_url =  `${API_BASE_URL}/images/${product_image.image_url}`;
    })
    return data;
}

export async function getProductsByIds (product_ids: number[]): Promise<Product[]> {
    const endpoint = `/get-products?product-ids=${product_ids.length === 1 ? product_ids[0] : product_ids.join(',')}`;
    const response = await request(`${API_BASE_URL}${endpoint}`);
    const data: Product [] = [];
    const responseData = response.productResponses;
    for (const key in responseData) {
        data.push({
            id: responseData[key].id,
            title: responseData[key].title,
            price: responseData[key].price,
            discount: responseData[key].discount,
            description: responseData[key].description,
            average_rate: responseData[key].average_rate,
            brand_id: responseData[key].brand_id,
            specification_id: responseData[key].specification_id,
            categories: responseData[key].categories,
            thumbnail: `${API_BASE_URL}/images/${responseData[key].thumbnail}`,
            product_images: responseData[key].product_images,
            category_names: responseData[key].category_names,
            brand_name: responseData[key].brand_name
        });
    }
    return data;
}