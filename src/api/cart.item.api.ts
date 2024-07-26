import { environment } from "../environments/environment";
import { Product } from "../models/product";
import { request } from "./request.api";
import { ProductImage } from "../models/product.image";
import { CartItemDTO } from "../dtos/cart.item.dto";
import axios, { AxiosError } from "axios";

const API_BASE_URL = `${environment.apiBaseUrl}/cart-items`;
const TOKEN = localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "en",
    "Authorization": `Bearer ${TOKEN}`,
  },
});

let cart: Map<number, number> = new Map();

export async function getCartFromLocalStorage(): Promise<Map<number, number>> {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    const parsedCart = JSON.parse(storedCart);
    parsedCart.forEach(([key, value]: [number, number]) => {
      cart.set(key, value);
    });
  }
  return cart;
}

export async function addToCart(
  productId: number,
  quantity: number = 1
): Promise<void> {
  if (cart.has(productId)) {
    cart.set(productId, cart.get(productId)! + quantity);
  } else {
    cart.set(productId, quantity);
  }
  saveCartToLocalStorage();
}

export async function removeFromCart(productId: number) {
  cart.delete(productId);
  saveCartToLocalStorage();
}

function saveCartToLocalStorage(): void {
  localStorage.setItem("cart", JSON.stringify(Array.from(cart.entries())));
}

export async function insertCartItem(cartItemDTO: CartItemDTO) {
  try {
    const response = await axiosInstance.post("", cartItemDTO);
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

export async function getCartItemByUserId(userId: number) {
  try {
    const response = await axiosInstance.get(`/users/${userId}`);
    return response;
  } catch (error) {}
}

export async function deleteCartItemByUserIdAndProductId(
  userId: number,
  productId: number
) {
  try {
    const response = await axiosInstance.delete(
      `/user-product?user-id=${userId}&product-id=${productId}`
    );
    return response;
  } catch (error) {}
}

export async function deleteCartItemByUserId(userId: number) {
  try {
    const response = await axiosInstance.delete(`/user/${userId}`);
    return response;
  } catch (error) {
    
  }
}

export async function updateCartItemById (id: number, cartItemDTO: CartItemDTO) {
    try {
        const response = await axiosInstance.put(`/${id}`, cartItemDTO);
        return response;
    } catch (error) {

    }
}
