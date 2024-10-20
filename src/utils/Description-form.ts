export const removeFile = (setImg: (img: File | null) => void) => {
  setImg(null);
};
export const descriptionValidation = (
  name: string,
  category: string,
  brand: string,
  img: File | null
): boolean => {
  if (name.length && category.length && brand.length && img) return true;
  else return false;
};
