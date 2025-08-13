import { productAction } from "@/app/lib/features/editProductSlice";
import { useAppDispatch } from "@/app/lib/hooks";
import { getAllProducts } from "@/app/queryhooks/products";
import { AppRoutes } from "@/configs/Route";
import { Button, Spinner } from "@heroui/react";
import Link from "next/link";
import { useEffect } from "react";
import { useQuery } from "react-query";

export function GetProducts() {
  const dispatch = useAppDispatch();

  const { data, isLoading, isError, refetch } = useQuery({
    queryFn: getAllProducts,
    queryKey: ["products"],
  });

  if (isError) {
    return <div>can not fetch </div>;
  }
  return (
    <div className="flex justify-center items-center w-full">
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
                  <Button
                    onPress={() =>
                      dispatch(productAction.setProductId(product))
                    }
                  >
                    Edit
                  </Button>
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
