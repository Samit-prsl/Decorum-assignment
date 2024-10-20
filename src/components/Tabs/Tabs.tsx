import React from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { tabs } from "@/utils/Tabs";
import { useTabContext } from "@/context/tab-context";

const TabbedNavigation: React.FC = () => {
  const { current } = useTabContext();
  return (
    <div className="w-full lg:max-w-3xl max-w-md lg:mx-5 mx-2 my-5 lg:my-0">
      <div className="flex items-center lg:space-x-1">
        {tabs.map((tab, index) => (
          <React.Fragment key={tab}>
            <Button
              variant={current === index ? "secondary" : "ghost"}
              className={`lg:px-4 px-1 py-2 text-sm lg:font-medium ${
                current >= index
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </Button>
            {index < tabs.length - 1 && (
              <ChevronRight className="w-4 h-4 text-gray-400" />
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="mt-4 flex justify-between"></div>
    </div>
  );
};
export default TabbedNavigation;
