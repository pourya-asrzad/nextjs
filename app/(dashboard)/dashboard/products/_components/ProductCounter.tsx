"use client";
import { Button } from "@heroui/react";
import { counterAction } from "@/app/lib/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { FC, useState } from "react";
import { TProductWithAmount } from "@/types/products";
import { cartAction } from "@/app/lib/features/cartSlice";
import { toast } from "sonner";
type Props = {
  product: TProductWithAmount;
};
export const ProductCounter: FC<Props> = (props) => {
  const { product } = props;
  const [count, setCount] = useState(1);
  const dispatch = useAppDispatch();

  return (
    <div className="flex gap-2">
      <Button type="button" onPress={() => setCount((prev) => prev + 1)}>
        +
      </Button>
      <div>
        <span>{count}</span>
      </div>
      <Button
        isDisabled={count <= 1}
        type="button"
        onPress={() => setCount((prev) => (prev > 1 ? prev - 1 : 1))}
      >
        -
      </Button>
      <Button
        onPress={() => {
          dispatch(
            cartAction.addToCart({
              id: product.id,
              name: product.name,
              price: product.amount,
              quantity: count,
            })
          );
          toast.success(`${product.name} has been added to the cart!`);
        }}
      >
        Add to Cart
      </Button>
    </div>
  );
};
