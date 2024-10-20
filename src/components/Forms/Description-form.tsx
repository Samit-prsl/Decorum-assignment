import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";
import { useProductContext } from "@/context/product-context";
import { removeFile } from "@/utils/Description-form";

const DescriptionForm = () => {
  const { setName, setCategory, setBrand, setImg, img, name, category, brand } =
    useProductContext();
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImg(file);
    }
  };

  return (
    <div className="lg:w-full w-[360px] lg:max-w-[29rem] space-y-4 lg:p-6 p-4 bg-white rounded-lg shadow-xl lg:mx-5 mx-2 ">
      <div className="space-y-2">
        <h1 className="text-xl font-bold">Description</h1>
      </div>
      <div className="space-y-2">
        <Label htmlFor="productName">
          Product name <span className="text-red-500">*</span>
        </Label>
        <Input
          id="productName"
          placeholder="Enter product name"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="category">
          Category <span className="text-red-500">*</span>
        </Label>
        <Select
          onValueChange={(value: string) => setCategory(value)}
          value={category}
        >
          <SelectTrigger id="category">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="shoes">Shoes</SelectItem>
            <SelectItem value="clothing">Clothing</SelectItem>
            <SelectItem value="accessories">Accessories</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="brand">
          Brand <span className="text-red-500">*</span>
        </Label>
        <Input
          id="brand"
          placeholder="Enter brand"
          required
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </div>
      {img && (
        <div className="flex items-center justify-between bg-gray-100 p-2 rounded">
          <span className="text-sm text-gray-600">{img.name}</span>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            onClick={() => removeFile(setImg)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
      {!img && (
        <div className="space-y-2">
          <Button
            variant="outline"
            className="w-1/3 text-blue-600 border-blue-600 hover:bg-blue-50 px-8"
            onClick={() => document.getElementById("fileInput")?.click()}
          >
            Upload Image
          </Button>
          <input
            id="fileInput"
            type="file"
            className="hidden"
            onChange={handleFileUpload}
            accept="image/*"
          />
        </div>
      )}
    </div>
  );
};

export default DescriptionForm;
