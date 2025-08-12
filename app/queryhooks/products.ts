import { baseApi } from "@/services/api";
import { TProduct } from "@/types/products";

export const getAllProducts = async (): Promise<TProduct[]> => {
  const res = await baseApi.get("/todos");
  return res.data;
};

export interface IPostProductsParameter {
  title: string;
  description: string;
}
export const postProducts = async (
  body: IPostProductsParameter
): Promise<TProduct[]> => {
  const res = await baseApi.post("/todos", body);
  return res.data;
};

export const patchProducts = async (
  body: IPostProductsParameter,
  id: string
): Promise<TProduct[]> => {
  const res = await baseApi.patch("/todos/" + id, body);
  return res.data;
};

export const getOneProduct = async (id: string): Promise<TProduct> => {
  const res = await baseApi.get("/todos/" + id);
  return res.data;
};
