<template>
  <div class="card">
    <img
      :src="require('@/assets/' + product?.image)"
      alt="image"
      class="card-image"
    />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title card-title-reg">{{ product?.name }}</h3>
      </div>
      <!-- /.card-heading -->
      <div class="card-info">
        <div class="ingredients">
          {{ product?.description }}
        </div>
      </div>
      <!-- /.card-info -->
      <div class="card-buttons">
        <button
          class="button button-primary button-add-cart"
          @click="addToCart(product!)"
        >
          <span class="button-card-text">В корзину</span>
          <span class="button-cart-svg"></span>
        </button>
        <strong class="card-price-bold">{{ product?.price }} ₽</strong>
      </div>
    </div>
    <!-- /.card-text -->
  </div>
  <!-- /.card -->
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { ProductType } from "@/types/types";
import { useStore } from "@/store";
import { MutationType } from "@/store/mutations";

export default defineComponent({
  name: "ProductCard",
  props: {
    product: Object as PropType<ProductType>,
  },
  setup() {
    const store = useStore();

    const addToCart = (product: ProductType) => {
      store.commit(MutationType.CreateItem, product);
    };
    return { addToCart };
  },
});
</script>

<style lang="scss" scoped></style>
