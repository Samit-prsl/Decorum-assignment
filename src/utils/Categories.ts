import { Category } from "@/types/Products";

export const categories: Category[] = [
  {
    name: "Shoes",
    products: [
      {
        id: "1",
        name: "Nike Air Jordan",
        price: 120,
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: "2",
        name: "Nike Dunk Low",
        price: 95,
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
  },
  {
    name: "T-shirt",
    products: [],
  },
];
