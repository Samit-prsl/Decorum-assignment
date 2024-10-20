import CombinationsForm from "@/components/Forms/Combination-form";
import DescriptionForm from "@/components/Forms/Description-form";
import PriceInfo from "@/components/Forms/Price-form";
import VariantForm from "@/components/Forms/Variant-form";
import TabbedNavigation from "@/components/Tabs/Tabs";
import AddProductTopBar from "@/components/Topbar/AddProductTopbar";
import { ProductProvider } from "@/context/product-context";
import { TabProvider } from "@/context/tab-context";
import React, { useState } from "react";

const AddProduct: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);

  return (
    <>
      <ProductProvider>
        <TabProvider>
          <div className=" overflow-x-hidden">
            <AddProductTopBar
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
            />
            <TabbedNavigation />
            {currentTab === 0 && <DescriptionForm />}
            {currentTab === 1 && <VariantForm />}
            {currentTab === 2 && <CombinationsForm />}
            {currentTab === 3 && <PriceInfo />}
          </div>
        </TabProvider>
      </ProductProvider>
    </>
  );
};

export default AddProduct;
