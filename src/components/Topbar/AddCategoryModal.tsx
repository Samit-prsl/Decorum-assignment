import React, { useState } from "react";
import {
  DialogClose,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useCategoryContext } from "@/context/category-context";
import { toast } from "@/hooks/use-toast";

const AddCategoryModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [categoryName, setCategoryName] = useState("");
  const { category } = useCategoryContext();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    category.push({ name: categoryName, products: [] });
    setCategoryName("");
    toast({
      description: "Added new Category!",
      className: "border-[1px] border-green-700 bg-green-400 text-black",
    });
    onClose();
  };

  return (
    <DialogHeader>
      <DialogTitle className="text-2xl mb-6">Add category</DialogTitle>
      <DialogDescription>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label
              htmlFor="categoryName"
              className="block text-sm font-medium text-gray-500 mb-1 text-start"
            >
              Category name <span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              id="categoryName"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              required
              className="w-full outline-none placeholder:text-gray-400 text-black"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <DialogClose>
              <Button
                type="button"
                variant="outline"
                onClick={() => setCategoryName("")}
                className="bg-[#E1E7EB] text-[#1F8CD0] px-8"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" className="bg-[#1F8CD0] text-white px-8">
              Save
            </Button>
          </div>
        </form>
      </DialogDescription>
    </DialogHeader>
  );
};

export default AddCategoryModal;
