import { ProductType } from "@/types/types";

export type State = {
  cart: ProductType[];
  totalPrice: number;
};

export const state: State = {
  cart: [],
  totalPrice: 0,
};
