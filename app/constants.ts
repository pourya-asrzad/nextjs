import { TProductWithAmount } from "@/types/products";

export const products: TProductWithAmount[] = [
  {
    id: 1,
    name: "Shoes 👞",
    amount: 100,
    description: "Comfortable shoes for everyday wear.",
    image: "https://example.com/shoes.jpg",
    category: "Footwear",
  },
  {
    id: 2,
    name: "pants 👖",
    amount: 50,
    description: "Stylish pants for all occasions.",
    image: "https://example.com/pants.jpg",
    category: "Clothing",
  },
  {
    id: 3,
    name: "Hat 🧢",
    amount: 20,
    description: "A trendy hat to complete your look.",
    image: "https://example.com/hat.jpg",
    category: "Accessories",
  },
];
