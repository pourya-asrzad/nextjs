import Image from "next/image";
import { Counter } from "./_components/Counter";
import { products } from "@/app/constants";
import { ProductCounter } from "./_components/ProductCounter";

export default function Home() {
  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id} className="border p-4 rounded-lg mb-4">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-green-500 font-semibold">${product.amount}</p>
            <ProductCounter product={product} />
          </div>
        );
      })}
    </div>
  );
}
