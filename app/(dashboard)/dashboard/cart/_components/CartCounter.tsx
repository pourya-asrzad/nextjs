"use client";
import { Button } from "@heroui/react";
import { counterAction } from "@/app/lib/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { FC } from "react";
import { cartAction, CartItem } from "@/app/lib/features/cartSlice";

type Props = {
  product: CartItem;
};
export const CartCounter: FC<Props> = (props) => {
  const { product } = props;
  const dispatch = useAppDispatch();
  return (
    <div className="flex gap-2">
      <Button
        type="button"
        onPress={() => {
          dispatch(
            cartAction.addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              quantity: 1,
            })
          );
        }}
      >
        +
      </Button>
      <div>
        <span>{product.quantity}</span>
      </div>
      <Button  type="button"
        onPress={() => {
          dispatch(
            cartAction.decrementCart({
              id: product.id,
              quantity:1,
              price: product.price,
            })
          );
        }}>-</Button>
      <Button type="button"
        onPress={() => {
          dispatch(
            cartAction.deleteCart({
              id: product.id,
            })
          );
        }}>remove from cart</Button>
    </div>
  );
};
