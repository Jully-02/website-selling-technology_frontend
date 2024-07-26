import axios from "axios";

const axiosInstance = axios.create({
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": "en",
    },
  });

export async function getProvinceAndCity () {
    const response = await axiosInstance.get('https://esgoo.net/api-tinhthanh/1/0.htm');
    return response;
}

export async function getDistrict (id: string) {
    const response = await axiosInstance.get(`https://esgoo.net/api-tinhthanh/2/${id}.htm`);
    return response;
}

export async function getWardAndCommune (id: string) {
    const response = await axiosInstance.get(`https://esgoo.net/api-tinhthanh/3/${id}.htm`);
    return response;
}