import { ProductContextType, ProductProviderProps } from "@/types/Products";
import { defaultCombinations } from "@/utils/Combination-form";
import { defaultVariants } from "@/utils/Variant-Form";
import { createContext, useContext, useState } from "react";

const defaultProductContext: ProductContextType = {
  name: "",
  category: "",
  brand: "",
  img: null,
  variants: defaultVariants,
  combinations: defaultCombinations,
  price: "",
  discount: {
    method: "pct",
    value: "",
  },
  error: {},
  setName: () => {},
  setCategory: () => {},
  setBrand: () => {},
  setImg: () => {},
  setVariants: () => {},
  setCombinations: () => {},
  setPrice: () => {},
  setDiscount: () => {},
  setError: () => {},
};

export const ProductContext = createContext<ProductContextType>(
  defaultProductContext
);

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [name, setName] = useState(defaultProductContext.name);
  const [category, setCategory] = useState(defaultProductContext.category);
  const [brand, setBrand] = useState(defaultProductContext.brand);
  const [img, setImg] = useState(defaultProductContext.img);
  const [variants, setVariants] = useState(defaultProductContext.variants);
  const [combinations, setCombinations] = useState(
    defaultProductContext.combinations
  );
  const [price, setPrice] = useState(defaultProductContext.price);
  const [discount, setDiscount] = useState(defaultProductContext.discount);
  const [error, setError] = useState(defaultProductContext.error);

  return (
    <ProductContext.Provider
      value={{
        name,
        setName,
        category,
        setCategory,
        brand,
        setBrand,
        img,
        setImg,
        variants,
        error,
        setVariants,
        combinations,
        setCombinations,
        price,
        setPrice,
        discount,
        setDiscount,
        setError,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
