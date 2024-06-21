import { environment } from "../environments/environment";
import { Category } from "../models/category";
import { request } from "./request.api";

const API_BASE_URL = `${environment.apiBaseUrl}/categories`;

export async function getAllCategories (page: number = 0, limit: number = 10):Promise<Category[]> {
    const data: Category [] = [];

    const endpoint = `?page=${page}&limit=${limit}`;
    const response = await request(`${API_BASE_URL}${endpoint}`);

    const responseData = response.category_responses;

    for (const key in responseData) {
        data.push({
            id: responseData[key].id,
            name: responseData[key].name,
            total_products: responseData[key].total_products
        });
    }
    return data;
}

export async function getCategoryById (category_id: number):Promise<Category> {
    const endpoint = `/${category_id}`;
    const data = await request (`${API_BASE_URL}${endpoint}`);

    return data;
}