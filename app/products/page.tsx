import Image from "next/image";
import { Header } from "../layouts/Header";
import { products } from "../constants";
import Link from "next/link";
import { AppRoutes } from "@/configs/Route";

export default function Products() {
  return (
    <div>
      <Header />
      products
      <ol>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Link href={AppRoutes.PRODUCTS + `/${product.id}`}>
                {product.id} : {product.name}
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
