import { AppRoutes } from "@/configs/Route";
import Link from "next/link";
import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Link href={AppRoutes.CART} className="text-blue-500 hover:underline">
        Cart
      </Link>
      <Link
        href={AppRoutes.DASHBOARD + AppRoutes.PRODUCTS}
        className="text-blue-500 hover:underline"
      >
        Products
      </Link>
      {children}
      dashboard footer
    </div>
  );
}
