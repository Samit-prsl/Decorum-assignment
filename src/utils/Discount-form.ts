import { Discount } from "@/types/Products";

export const discountValidation = (
  discount: Discount,
  price: string
): boolean => {
  if (price?.length && discount?.method?.length && discount.value.length)
    return true;
  else return false;
};
