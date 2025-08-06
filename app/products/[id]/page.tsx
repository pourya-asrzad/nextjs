import { products } from "@/app/constants";
import { Header } from "@/app/layouts/Header";

export default async function Products({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log(id);
  return (
    <div>
      <Header />
      products detail :
      {products.filter((product) => product.id === Number(id))[0].name}
    </div>
  );
}
