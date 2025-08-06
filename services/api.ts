import axios from "axios";

export const baseURL = process.env.API_BASE_URL as string;
export const baseApi = axios.create({ baseURL });
