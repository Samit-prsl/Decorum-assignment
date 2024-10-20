import { Variant } from "@/types/Forms";
import { errorType } from "@/types/Products";

export const defaultVariants = [
  { option: "Size", values: ["M", "L"] },
  { option: "Color", values: ["Black", "Red"] },
];

export const addVariant = (
  setVariants: (variant: Variant[]) => void,
  variants: Variant[]
) => {
  setVariants([...variants, { option: "", values: [""] }]);
};

export const removeVariant = (
  index: number,
  variants: Variant[],
  setVariants: (variant: Variant[]) => void,
  errors: { [key: number]: string },
  setErrors: (error: { [key: number]: string }) => void
) => {
  const newVariants = variants.filter((_, i) => i !== index);
  setVariants(newVariants);
  const newErrors = { ...errors };
  delete newErrors[index];
  setErrors(newErrors);
};

export const updateOption = (
  index: number,
  option: string,
  variants: Variant[],
  setVariants: (variant: Variant[]) => void,
  errors: { [key: number]: string },
  setErrors: (error: { [key: number]: string }) => void
) => {
  const newVariants = [...variants];
  newVariants[index].option = option;
  setVariants(newVariants);
  validateVariant(index, newVariants[index], errors, setErrors);
};

export const updateValues = (
  index: number,
  valueString: string,
  variants: Variant[],
  setVariants: (variant: Variant[]) => void,
  errors: { [key: number]: string },
  setErrors: (error: { [key: number]: string }) => void
) => {
  const newVariants = [...variants];
  newVariants[index].values = valueString.split(/[,\s]+/).filter(Boolean);
  setVariants(newVariants);
  validateVariant(index, newVariants[index], errors, setErrors);
};

export const validateVariant = (
  index: number,
  variant: Variant,
  errors: { [key: number]: string },
  setErrors: (error: { [key: number]: string }) => void
) => {
  const newErrors = { ...errors };
  if (!variant.option) {
    newErrors[index] = "Option can't be empty";
  } else if (variant.values.length === 0) {
    newErrors[index] = "At least one value is required";
  } else {
    delete newErrors[index];
  }
  setErrors(newErrors);
};

export const variantValidation = (error: errorType): boolean => {
  if (error && Object.keys(error).length > 0) return false;
  else return true;
};
