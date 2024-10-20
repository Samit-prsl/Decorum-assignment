import { Combination } from "@/types/Forms";
import { errorType } from "@/types/Products";

export const defaultCombinations = [
  {
    id: 1,
    variant: "M/Black",
    sku: "ABC12",
    inStock: true,
    quantity: "10",
  },
  {
    id: 2,
    variant: "M/Red",
    sku: "SDF3",
    inStock: true,
    quantity: "5",
  },
  {
    id: 3,
    variant: "L/Black",
    sku: "HWE3",
    inStock: true,
    quantity: "5",
  },
  {
    id: 4,
    variant: "L/Red",
    sku: "HWE5",
    inStock: true,
    quantity: "5",
  },
];

export const addCombination = (
  combinations: Combination[],
  setCombinations: (combination: Combination[]) => void
) => {
  const newId = Math.max(...combinations.map((c) => c.id), 0) + 1;
  setCombinations([
    ...combinations,
    { id: newId, variant: "", sku: "", inStock: false, quantity: "" },
  ]);
};

export const updateCombination = (
  id: number,
  field: keyof Combination,
  value: string | boolean,
  combinations: Combination[],
  setCombinations: (combination: Combination[]) => void,
  setErrors: (error: { [key: number]: string }) => void
) => {
  const newCombinations = combinations.map((c) =>
    c.id === id ? { ...c, [field]: value } : c
  );
  setCombinations(newCombinations);
  validateCombinations(newCombinations, setErrors);
};

const validateCombinations = (
  combs: Combination[],
  setErrors: (error: { [key: number]: string }) => void
) => {
  const newErrors: { [key: number]: string } = {};
  const skus = new Set<string>();

  combs.forEach((comb) => {
    if (comb.sku && skus.has(comb.sku)) {
      newErrors[comb.id] = "Duplicate SKU";
    } else if (comb.sku) {
      skus.add(comb.sku);
    }

    if (comb.inStock && !comb.quantity) {
      newErrors[comb.id] = "Quantity required when in stock";
    }
  });

  setErrors(newErrors);
};

export const combinationValidation = (error: errorType): boolean => {
  if (error && Object.keys(error).length > 0) return false;
  else return true;
};
