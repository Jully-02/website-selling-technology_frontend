import { LoginDTO } from "../dtos/login.dto";
import { RegisterDTO } from "../dtos/register.dto";
import { environment } from "../environments/environment";
import { User } from "../models/user";
import { request } from "./request.api";
import axios, { AxiosError } from "axios";

const API_BASE_URL = `${environment.apiBaseUrl}/users`;
const TOKEN = localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "en",
  },
});

export async function emailUnique(email: string): Promise<boolean> {
  const endpoint = `/email-unique?email=${email}`;
  const response = await request(`${API_BASE_URL}${endpoint}`);

  return response;
}

export async function register(registerDTO: RegisterDTO) {
  try {
    const response = await axiosInstance.post("/register", registerDTO);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 400) {
        console.log(axiosError.response?.data);
        return axiosError.response?.data;
      } else {
        console.error("Error registering user:", axiosError);
        throw axiosError;
      }
    }
  }
}

export async function login (loginDTO: LoginDTO) {
  try {
    const response = await axiosInstance.post("/login", loginDTO);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 400) {
        console.log(axiosError.response?.data);
        return axiosError.response?.data;
      } else {
        console.error("Error login:", axiosError);
        throw axiosError;
      }
    }
  }
}

export async function activeAccount (email: string, activeCode: string) {
  const endpoint = `/active-account?email=${email}&active-code=${activeCode}`;
  const response = await axiosInstance.get(`${API_BASE_URL}${endpoint}`);
  return response;
}

export async function getUserDetail () {
  const response = await axios.get(`${API_BASE_URL}/details`, {
    headers: {
      "Authorization": `Bearer ${TOKEN}`
    }
  });
  return response;
}

export async function updateUser (user: User, id: number) {
  const response = await axiosInstance.put(`${API_BASE_URL}/${id}`, user, {
      headers: {
        "Authorization": `Bearer ${TOKEN}`
      }
  });
  console.log(response);
  return response;
}
