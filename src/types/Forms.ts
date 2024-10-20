export interface Variant {
  option: string;
  values: string[];
}

export interface Combination {
  id: number;
  variant: string;
  sku: string;
  inStock: boolean;
  quantity: string;
}
