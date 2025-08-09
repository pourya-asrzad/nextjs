"use client";

import { CartCounter } from "./_components/CartCounter";
import { useAppSelector } from "@/app/lib/hooks";
import Link from "next/link";
import { AppRoutes } from "@/configs/Route";

export default function Home() {
  const { items, totalPrice } = useAppSelector((state) => state.cart);

  return (
    <div>
      Cart
      <br />
      {items.length > 0 ? (
        items.map((product) => {
          return (
            <div key={product.id} className="border p-4 rounded-lg mb-4">
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-green-500 font-semibold">
                ${product.price * product.quantity}
              </p>
              <CartCounter product={product} />
            </div>
          );
        })
      ) : (
        <span>
          theres no item in your cart please buy{" "}
          <Link
            className="text-blue-500"
            href={AppRoutes.DASHBOARD + AppRoutes.PRODUCTS}
          >
            something
          </Link>
        </span>
      )}
      <br />
      <br />
      totalPrice = {totalPrice}
    </div>
  );
}
