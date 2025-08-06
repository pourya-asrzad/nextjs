"use client";

import Link from "next/link";
import { AppRoutes } from "@/configs/Route";
import { useQuery } from "react-query";

import { Spinner } from "@heroui/react";
import { getAllProducts } from "@/app/queryhooks/products";

export default function Products() {
  const { data, isLoading, isError } = useQuery({
    queryFn: getAllProducts,
    queryKey: ["products"],
  });

  if (isError) {
    return <div>can not fetch </div>;
  }
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <ol>
          {data && data.length > 0 ? (
            data.map((product) => {
              return (
                <li key={product.id}>
                  <Link href={AppRoutes.PRODUCTS + `/${product.id}`}>
                    {product.id} : {product.title}
                  </Link>
                </li>
              );
            })
          ) : (
            <span>no data found</span>
          )}
        </ol>
      )}
    </div>
  );
}
