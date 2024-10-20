import GridView from "@/components/List-Products/GridView";
import TopBar from "@/components/Topbar/Topbar";
import React from "react";

const Products: React.FC = () => {
  return (
    <>
      <TopBar />
      <GridView />
    </>
  );
};

export default Products;
