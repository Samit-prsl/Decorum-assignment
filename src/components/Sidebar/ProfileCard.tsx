import React from "react";
import { ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileCard: React.FC = () => {
  return (
    <div className="lg:w-64 md:w-64 w-64 max-w-md bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ease-in-out hover:shadow-lg">
      <div className="border-t-[1px] border-primary" />
      <div className="p-2 flex items-center space-x-4">
        <Avatar className="h-10 w-10">
          <AvatarImage
            src="/placeholder.svg?height=48&width=48"
            alt="John Doe"
          />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="flex-grow">
          <h2 className="text-lg font-semibold text-gray-800">John Doe</h2>
          <p className="text-sm text-gray-600">john.doe@example.com</p>
        </div>
        <ChevronRight className="text-gray-400" />
      </div>
    </div>
  );
};

export default ProfileCard;
