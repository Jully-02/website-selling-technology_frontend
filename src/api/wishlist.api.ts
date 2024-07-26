import axios, { AxiosError } from "axios";
import { environment } from "../environments/environment";
import { FavoriteProductDTO } from "../dtos/favorite.product.dto";

const API_BASE_URL = `${environment.apiBaseUrl}/favorites`;
const TOKEN = localStorage.getItem('token')

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
        "Accept-Language": "en",
        "Authorization": `Bearer ${TOKEN}`,
    }
});

let wishlist: number[] = [];

export async function getWishlistFromLocalStorage(): Promise<number[]> {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
        const parsedWishlist = JSON.parse(storedWishlist);
        wishlist = parsedWishlist;
    }
    return wishlist;
}
async function saveWishlistToLocalStorage(): Promise<void> {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

export async function addToWishlist(productId: number): Promise<void> {
    await getWishlistFromLocalStorage();
    if (!wishlist.includes(productId)) {
        wishlist.push(productId);
        await saveWishlistToLocalStorage();
    }
}

export async function removeFromWishlist(productId: number): Promise<void> {
    const index = wishlist.indexOf(productId);
    if (index !== -1) {
        wishlist.splice(index, 1);
        saveWishlistToLocalStorage();
    }
}

export async function insertFavoriteProduct (favoriteProductDTO: FavoriteProductDTO) {
    try {
        const response = await axiosInstance.post("", favoriteProductDTO);
        console.log(response);
        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            if (axiosError.response?.status === 400) {
              console.log(axiosError.response?.data);
              return axiosError.response?.data;
            } else {
              console.error("Insert failed:", axiosError);
              throw axiosError;
            }
          }
    }
}

export async function getFavoriteProductByUserId (userId: number) {
    try {
        const response = await axiosInstance.get(`/users/${userId}`);
        return response;
    } catch (error) {

    }
}

export async function deleteFavoriteProductByUserIdAndProductId (userId: number, productId: number) {
    try {
        const response = await axiosInstance.delete(`/user-product?user-id=${userId}&product-id=${productId}`);
        return response;
    } catch (error) {

    }
}
