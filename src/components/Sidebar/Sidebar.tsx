import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { linkItems } from "../../utils/LinkItems";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const handleCheckboxChange = (itemId: string) => {
    setSelectedItem(itemId === selectedItem ? null : itemId);
    window.location.replace(itemId);
  };

  return (
    <aside className="lg:w-64 md:w-64 w-full lg:bg-gray-100 md:bg-gray-100 bg-white lg:shadow-md md:shadow-md lg:min-h-[91vh] md:min-h-[91vh] min-h-[75vh]">
      <div className="p-4 ">
        <ul className="space-y-2">
          {linkItems.map((item) => (
            <li key={item.id}>
              <label
                htmlFor={item.id}
                className={`flex items-center space-x-3 p-2 rounded-md cursor-pointer transition-colors ${
                  selectedItem === item.id ? "bg-blue-50" : "hover:bg-gray-100"
                }`}
              >
                <Checkbox
                  id={item.id}
                  checked={selectedItem === item.id}
                  onCheckedChange={() => handleCheckboxChange(item.id)}
                />
                <Link
                  className="text-sm font-medium text-gray-700"
                  to={item.id}
                  onClick={(e) => {
                    e.preventDefault();
                    handleCheckboxChange(item.id);
                  }}
                >
                  {item.label}
                </Link>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
export default Sidebar;
