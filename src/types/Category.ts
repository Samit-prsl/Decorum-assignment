import { Category } from "./Products";

export interface categoryContextType {
  category: Category[];
  setCategory: (categoty: Category[]) => void;
}
export interface categoryProviderProps {
  children: React.ReactNode;
}
