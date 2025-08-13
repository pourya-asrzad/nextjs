"use client";

import DeleteProductModal from "@/app/(website)/products/_components/DeleteProductSlice";
import { GetProducts } from "@/app/(website)/products/_components/GetProducts";
import { AddTodoModal } from "@/app/components/AddTodoModal";


export default function App() {
  return (
    <div className="flex flex-col w-fit">
      <AddTodoModal />
      <GetProducts />
      <DeleteProductModal/>
    </div>

  );
}
