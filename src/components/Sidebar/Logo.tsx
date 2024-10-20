import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="bg-teal-600 p-4 inline-block rounded-md">
      <div className="lg:w-56 w-40 h-[48px] flex items-center justify-center bg-white rounded">
        <span className="text-teal-600 font-bold text-lg">Logo Space</span>
      </div>
    </div>
  );
};

export default Logo;
