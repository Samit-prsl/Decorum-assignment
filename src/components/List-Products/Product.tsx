import { Button } from "@/components/ui/button";
import { ProductItemProps } from "@/types/Products";

const Product = ({ product }: ProductItemProps) => {
  return (
    <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
      <img
        src={product.image}
        alt={product.name}
        width={100}
        height={100}
        className="rounded-md"
      />
      <div className="flex-col justify-center items-center gap-2">
        <div className="">
          <h3 className="font-semibold">{product.name}</h3>
          <p className="text-sm text-gray-600">${product.price.toFixed(2)}</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          className=" bg-[#E1E7EB] text-[#1F8CD0] mt-5"
        >
          Nike
        </Button>
      </div>
    </div>
  );
};

export default Product;
