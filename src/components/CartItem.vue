<template>
  <div class="food-row">
    <span class="food-name">{{ product?.name }}</span>
    <strong class="food-price">{{ product?.price }} ₽</strong>
    <div class="food-counter">
      <button class="counter-button" @click="decrement(product!)">-</button>
      <span class="counter">{{ product?.quantity }}</span>
      <button class="counter-button" @click="increment(product!)">+</button>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { MutationType } from "@/store/mutations";
import { ProductType } from "@/types/types";
import { PropType, defineComponent } from "vue";

export default defineComponent({
  name: "CartItem",
  props: {
    product: Object as PropType<ProductType>,
  },
  setup() {
    const store = useStore();

    const increment = (product: ProductType) => {
      store.commit(MutationType.HandleItemQuantity, {
        product,
        operator: "INCREMENT",
      });
    };
    const decrement = (product: ProductType) => {
      store.commit(MutationType.HandleItemQuantity, {
        product,
        operator: "DECREMENT",
      });
    };
    return { increment, decrement };
  },
});
</script>
