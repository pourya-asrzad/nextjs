import { baseApi } from "@/services/api";
import { TProduct } from "@/types/products";

export const getAllProducts = async (): Promise<TProduct[]> => {
  const res = await baseApi.get("/todos");
  return res.data;
};

export const getOneProduct = async (id: string): Promise<TProduct> => {
  const res = await baseApi.get("/todos/" + id);
  return res.data;
};
