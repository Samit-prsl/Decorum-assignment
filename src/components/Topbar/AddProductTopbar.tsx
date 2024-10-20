import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { moveBackward, moveForward, tabs } from "@/utils/Tabs";
import { addProductProps } from "@/types/AddProduct";
import { useTabContext } from "@/context/tab-context";
import { useProductContext } from "@/context/product-context";
import { toast } from "@/hooks/use-toast";
import { descriptionValidation } from "@/utils/Description-form";
import { variantValidation } from "@/utils/Variant-Form";
import { combinationValidation } from "@/utils/Combination-form";
import { discountValidation } from "@/utils/Discount-form";

const AddProductTopBar: React.FC<addProductProps> = ({
  currentTab,
  setCurrentTab,
}) => {
  const { current, setCurrent } = useTabContext();
  const { name, category, brand, img, error, discount, price } =
    useProductContext();

  const validation = () => {
    if (current === 0) {
      return descriptionValidation(name, category, brand, img);
    }
    if (current === 1) {
      return variantValidation(error);
    }
    if (current === 2) {
      return combinationValidation(error);
    }
    if (current === 3) {
      return discountValidation(discount, price);
    }
  };
  useEffect(() => {
    setCurrent(currentTab);
  }, [currentTab, setCurrentTab]);
  return (
    <div className="flex justify-between items-center lg:p-4 md:p-4 p-2 bg-gray-100 mx-2">
      <h1 className="text-2xl font-bold md:mr-36">Add Products</h1>
      {current < 3 && (
        <div className="space-x-2">
          <Button
            onClick={() => moveBackward(currentTab, setCurrentTab)}
            className="bg-[#E1E7EB] text-[#1F8CD0] lg:px-8 md:px-6 px-4 hover:bg-gray-400"
          >
            {current === 0 ? "Cancel" : "Previous"}
          </Button>
          <Button
            onClick={() =>
              validation()
                ? moveForward(currentTab, setCurrentTab)
                : toast({
                    title: "Error submitting form",
                    description: "Please provide all the values!",
                    className:
                      "border-[1px] border-red-700 bg-red-400 text-black",
                  })
            }
            disabled={currentTab === tabs.length - 1}
            className="bg-[#1F8CD0] text-white lg:px-8 md:px-6 px-4 hover:bg-[#1F8CD0]/50"
          >
            Next
          </Button>
        </div>
      )}
      {current === 3 && (
        <div className=" space-x-2">
          <Button
            onClick={() => moveBackward(currentTab, setCurrentTab)}
            className="bg-[#E1E7EB] text-[#1F8CD0] lg:px-8 md:px-6 px-4 hover:bg-gray-400"
          >
            Previous
          </Button>
          <Button
            className="bg-[#1F8CD0] text-white lg:px-8 md:px-6 px-4 hover:bg-gray-400"
            onClick={() =>
              validation()
                ? toast({
                    title: "Successfully added the form",
                    description: "Thank you so much!",
                    className:
                      "border-[1px] border-green-700 bg-green-400 text-black",
                  })
                : toast({
                    title: "Error submitting form",
                    description: "Please provide all the values!",
                    className:
                      "border-[1px] border-red-700 bg-red-400 text-black",
                  })
            }
          >
            Complete
          </Button>
        </div>
      )}
    </div>
  );
};

export default AddProductTopBar;
