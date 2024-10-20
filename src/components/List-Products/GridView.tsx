import React from "react";
import Product from "./Product";
import { Product as ProductTypes } from "@/types/Products";
import { useCategoryContext } from "@/context/category-context";

const GridView: React.FC = () => {
  const { category } = useCategoryContext();
  return (
    <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-4 p-4 flex-col justify-between items-center">
      {category.map((category) => (
        <div
          key={category.name}
          className="bg-gray-300 p-4 rounded-lg min-h-screen my-3 lg:my-0"
        >
          <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
          <div className="space-y-4">
            {category.products.map((product: ProductTypes) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridView;
