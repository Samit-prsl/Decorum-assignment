import React from "react";
import Logo from "./Logo";
import Sidebar from "./Sidebar";
import ProfileCard from "./ProfileCard";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useMediaQuery } from "usehooks-ts";
import { Menu } from "lucide-react";
const index: React.FC = () => {
  const phone = useMediaQuery("(min-width:768px)");

  return (
    <>
      {!phone && (
        <Sheet>
          <SheetTrigger className="p-2">
            <Menu />
          </SheetTrigger>
          <SheetContent side={"left"} className="">
            <SheetHeader>
              <SheetDescription className="m-0 p-0">
                <Logo />
                <Sidebar />
                <ProfileCard />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      )}
      {phone && (
        <div className=" flex-col">
          <Logo />
          <Sidebar />
          <ProfileCard />
        </div>
      )}
    </>
  );
};

export default index;
