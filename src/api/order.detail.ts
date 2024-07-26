import axios from "axios";
import { environment } from "../environments/environment";

const API_BASE_URL = `${environment.apiBaseUrl}/order_details`;
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

export async function getDetailOrderDetailByOrderId (id: number) {
  try {
      const response = await axiosInstance.get(`/order/${id}`);
      return response;
  } catch (error) {

  }
}

