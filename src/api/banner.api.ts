import { environment } from "../environments/environment";
import { Banner } from "../models/banner";
import { request } from "./request.api";

const API_BASE_URL = `${environment.apiBaseUrl}/banners`;

export async function getAllBanners ():Promise<Banner[]> {
    const data: Banner[] = [];

    const response = await request(`${API_BASE_URL}`);
    
    for (const key in response) {
        data.push({
            id: response[key].id,
            name: response[key].name,
            model_code: response[key].model_code,
            promotion_title: response[key].promotion_key,
            discount: response[key].discount,
            thumbnail: `${API_BASE_URL}/images/${response[key].thumbail}`
        })
    }
    return data;
}

export async function getBannerById (banner_id: number):Promise<Banner> {
    const endpoint = `/${banner_id}`;
    const response = await request(`${API_BASE_URL}${endpoint}`);

    const data: Banner = {
        id: response.id,
        name: response.name,
        model_code: response.model_code,
        promotion_title: response.promotion_title,
        discount: response.discount,
        thumbnail: `${API_BASE_URL}/images/${response.thumbnail}`
    }
    return data;
}