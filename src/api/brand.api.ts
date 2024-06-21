import { Brand } from '../models/brand';
import { request } from './request.api';
import { environment } from '../environments/environment';

const API_BASE_URL = `${environment.apiBaseUrl}/brands`;

export async function getAllBrands (page: number = 0, limit: number = 10): Promise<Brand[]> {
    const data: Brand [] = [];

    const endpoint = `?page=${page}&limit=${limit}`;
    const response = await request(`${API_BASE_URL}${endpoint}`);

    const responseData = response.brand_responses;

    for (const key in responseData) {
        data.push({
            id: responseData[key].id,
            name: responseData[key].name,
            total_products: responseData[key].total_products
        });
    }

    return data;
}