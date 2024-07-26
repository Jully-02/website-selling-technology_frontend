import axios from "axios";
import { environment } from "../environments/environment";

const  API_BASE_URL = `${environment.apiBaseUrl}/payment-methods`;

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": "en",
    },
});

export async function getPaymentMethods () {
    const response = await axiosInstance.get(`${API_BASE_URL}`);
    return response;
}

export async function getPaymentMethodById (id: number) {
  const response = await axiosInstance.get(`${API_BASE_URL}/${id}`);
  return response;
}