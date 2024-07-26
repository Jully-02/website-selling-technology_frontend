import axios from "axios";
import { environment } from "../environments/environment";
import { FeedbackDTO } from "../dtos/feedback.dto";

const API_BASE_URL = `${environment.apiBaseUrl}/feedbacks`;
const TOKEN = localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "en"
  },
});

export async function insertFeedback (feedbackDTO: FeedbackDTO) {
    try {
        const response = await axiosInstance.post("", feedbackDTO, {
            headers: {
                'Authorization': `Bearer ${TOKEN}`
            }
        });
        console.log(response);
        return response;
    } catch (error) {

    }
}

export async function getFeedbackByProductId (productId: number) {
    try {
        const response = await axiosInstance.get(`/product/${productId}`);
        console.log(response);
        return response;
    } catch (error) {

    }
}

export async function getFeedbackByUserId (userId: number) {
    try {
        const response = await axiosInstance.get(`/user/${userId}`, {
            headers: {
                'Authorization': `Bearer ${TOKEN}`
            }
        })
        console.log(response);
        return response;
    } catch (error) {

    }
}
