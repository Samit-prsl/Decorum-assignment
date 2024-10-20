import { categoryContextType, categoryProviderProps } from "@/types/Category";
import { categories } from "@/utils/Categories";
import { createContext, useContext, useState } from "react";

const defaultCategoryContext: categoryContextType = {
  category: categories,
  setCategory: () => {},
};

export const CategoryContext = createContext<categoryContextType>(
  defaultCategoryContext
);

export const useCategoryContext = () => useContext(CategoryContext);

export const CategoryProvider = ({ children }: categoryProviderProps) => {
  const [category, setCategory] = useState(defaultCategoryContext.category);

  return (
    <CategoryContext.Provider
      value={{
        category,
        setCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
