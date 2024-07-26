import axios from "axios";
import { environment } from "../environments/environment";

const  API_BASE_URL = `${environment.apiBaseUrl}/payments`;
const TOKEN = localStorage.getItem('token');

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": "en",
      "Authorization": `Bearer ${TOKEN}`
    },
});

export async function createPayment (amount: number, bankCode: string) {
    try {
        const response = await axiosInstance.get(`/create-payment?amount=${amount}&bankCode=${bankCode}`);
        console.log(response)
        return response;
    } catch (error) {

    }
}

export async function callbackHandler () {
    try {
        const response = await axiosInstance.get(`/vn-pay-callback`);
        console.log(response)
        return response;
    } catch (error) {

    }
}