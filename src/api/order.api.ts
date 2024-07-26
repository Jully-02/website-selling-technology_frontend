import axios from "axios";
import { environment } from "../environments/environment";
import { OrderDTO } from "../dtos/order.dto";

const API_BASE_URL = `${environment.apiBaseUrl}/orders`;
const TOKEN = localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "en",
    Authorization: `Bearer ${TOKEN}`,
  },
});

export async function insertOrder(orderDTO: OrderDTO) {
  try {
    const response = await axiosInstance.post("", orderDTO);
    console.log(response);
    return response;
  } catch (error) {}
}

export async function getOrders() {
  try {
    const response = await axiosInstance.get("");
    console.log(response);
    return response;
  } catch (error) {}
}

export async function getDetailOrder(id: number) {
  try {
    const response = await axiosInstance.get(`/${id}`);
    return response;
  } catch (error) {}
}

export async function getOrderByUserId(userId: number) {
  try {
    const response = await axiosInstance.get(`/user/${userId}`);
    console.log(response);
    return response;
  } catch (error) {}
}

export function formatTime(date: Date): string {
  let hours: number = date.getHours();
  let minutes: number = date.getMinutes();

  const ampm: string = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  const minutesString: string = minutes.toString().padStart(2, "0");

  return `${hours}:${minutesString} ${ampm}`;
}

export function formatDate(dateISOString: Date) {
  if (!dateISOString) return "";

  const date = new Date(dateISOString);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  const formattedDate = `${months[monthIndex]} ${day}, ${year}`;

  return formattedDate;
}

export function formatDateTable(dateISOString: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  return new Intl.DateTimeFormat("en-US", options).format(dateISOString);
}

export function formatCurrency(
  amount: number,
  locale = "en-US",
  currency = "USD"
) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}
