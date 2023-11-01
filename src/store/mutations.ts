import { MutationTree } from "vuex";
import { State } from "./state";
import { ProductType } from "@/types/types";

export enum MutationType {
  CreateItem = "CREATE_ITEM",
  HandleItemQuantity = "INCREASE_ITEM_QUANTINTY",
}

export type Mutations = {
  [MutationType.CreateItem](state: State, item: ProductType): void;
  [MutationType.HandleItemQuantity](
    state: State,
    payload: {
      product: ProductType;
      operator: "INCREMENT" | "DECREMENT";
    }
  ): void;
};

const setTotalPrice = (state: State) => {
  state.totalPrice = +state.cart
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.CreateItem](state, product) {
    const existItem = state.cart.find((x) => x.id === product.id);
    if (existItem) {
      product.quantity++;
      state.cart = state.cart.map((stateItem) =>
        stateItem.id === existItem.id ? product : stateItem
      );
      setTotalPrice(state);
    } else {
      product.quantity = 1;
      state.cart.unshift(product);
      setTotalPrice(state);
    }
  },
  [MutationType.HandleItemQuantity](state, payload) {
    const existItem = state.cart.find((x) => x.id === payload.product.id);
    if (existItem) {
      if (payload.operator === "INCREMENT") {
        payload.product.quantity++;
      } else {
        payload.product.quantity--;
      }

      if (payload.product.quantity === 0) {
        state.cart = state.cart.filter(
          (stateItem) => stateItem.id !== existItem.id
        );
        setTotalPrice(state);
      } else {
        state.cart = state.cart.map((stateItem) =>
          stateItem.id === existItem.id ? payload.product : stateItem
        );
        setTotalPrice(state);
      }
    }
  },
};
