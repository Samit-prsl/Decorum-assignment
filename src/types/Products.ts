import { Combination, Variant } from "./Forms";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface ProductItemProps {
  product: Product;
}

export interface Category {
  name: string;
  products: Product[];
}

export interface Discount {
  method: "pct" | "flat";
  value: string;
}

export interface errorType {
  [key: number]: string;
}

export interface ProductContextType {
  name: string;
  category: string;
  brand: string;
  img: File | null;
  variants: Variant[];
  combinations: Combination[];
  price: string;
  discount: {
    method: "pct" | "flat";
    value: string;
  };
  error: errorType;
  setName: (name: string) => void;
  setCategory: (category: string) => void;
  setBrand: (brand: string) => void;
  setImg: (img: File | null) => void;
  setVariants: (variants: Variant[]) => void;
  setCombinations: (combinations: Combination[]) => void;
  setPrice: (price: string) => void;
  setDiscount: (discount: Discount) => void;
  setError: (error: errorType) => void;
}

export interface ProductProviderProps {
  children: React.ReactNode;
}
