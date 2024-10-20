import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import AddCategoryModal from "./AddCategoryModal";

const TopBar: React.FC = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  return (
    <div className="flex justify-between items-center gap-2 bg-gray-100 lg:m-5 m-2">
      <h1 className="text-2xl font-bold">Products</h1>
      <div className="space-x-2">
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogTrigger onClick={() => setOpenDialog(true)}>
            <Button
              variant="outline"
              className="bg-[#E1E7EB] text-[#1F8CD0] lg:px-8 px-2 hover:bg-gray-400"
            >
              Add Category
            </Button>
          </DialogTrigger>
          <DialogContent className="lg:w-full md:w-full w-[350px]">
            <AddCategoryModal onClose={() => setOpenDialog(false)} />
          </DialogContent>
        </Dialog>
        <a href="/addproduct">
          <Button className=" bg-[#1F8CD0] text-white lg:px-8 px-2 hover:bg-[#1F8CD0]/50">
            Add Product
          </Button>
        </a>
      </div>
    </div>
  );
};

export default TopBar;
