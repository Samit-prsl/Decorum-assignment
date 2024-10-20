import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useProductContext } from "@/context/product-context";

const PriceInfo = () => {
  const { setPrice, setDiscount, price, discount } = useProductContext();
  const [isPercentage, setIsPercentage] = useState(true);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const handleDiscountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscount({
      method: isPercentage ? "pct" : "flat",
      value: e.target.value,
    });
  };

  const toggleDiscountType = () => {
    setIsPercentage(!isPercentage);
    setDiscount({
      method: isPercentage ? "pct" : "flat",
      value: "",
    });
  };

  console.log(discount);

  return (
    <div className="lg:w-full w-[360px] lg:max-w-[29rem] space-y-4 lg:p-6 p-4 bg-white rounded-lg shadow-xl lg:mx-5 mx-2 ">
      <h2 className="text-lg font-semibold">Price Info</h2>
      <div className="space-y-2">
        <Label htmlFor="price">Price *</Label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            ₹
          </span>
          <Input
            id="price"
            type="number"
            value={price}
            onChange={handlePriceChange}
            className="pl-7"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="discount">Discount</Label>
        <div className="flex space-x-2">
          <div className="relative flex-1">
            <Input
              id="discount"
              type="number"
              value={discount.value}
              onChange={handleDiscountChange}
              className={isPercentage ? "pr-7" : "pl-7"}
              placeholder="0"
            />
            <span
              className={`absolute ${
                isPercentage ? "right-3" : "left-3"
              } top-1/2 transform -translate-y-1/2 text-gray-500`}
            >
              {isPercentage ? "%" : "₹"}
            </span>
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={toggleDiscountType}
            className="w-14"
            title="Click to change discount type"
          >
            {isPercentage ? "₹" : "%"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PriceInfo;
