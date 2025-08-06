"use client";
import { Header } from "@/app/layouts/Header";
import { getOneProduct } from "@/app/queryhooks/products";
import { Spinner } from "@heroui/react";
import { useParams } from "next/navigation";
import { useQuery } from "react-query";

export default function Products() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getOneProduct(id as string),
    queryKey: ["products"],
  });

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      products detail : <h1 className="font-bold text-2xl">{data?.title}</h1>
      <p>{data?.description}</p>
    </div>
  );
}
