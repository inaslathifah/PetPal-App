import {
  ProductFormValues,
  ProductFormProps,
  IProductListData,
} from "./interfaces";
import { productSchema } from "./scheme";
import { getProducts } from "./api";

export { productSchema, getProducts };
export type { ProductFormValues, ProductFormProps, IProductListData };
