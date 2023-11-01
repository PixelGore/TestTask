<template>
  <main class="main">
    <div class="container">
      <section class="menu">
        <div class="section-heading">
          <h2 class="section-title restaurant-title">{{ restaurant?.name }}</h2>
          <div class="card-info">
            <div class="rating">{{ restaurant?.stars }}</div>
            <div class="price">{{ restaurant?.price }} ₽</div>
            <div class="category">{{ restaurant?.kitchen }}</div>
          </div>
          <div class="card-sorting-container">
            <div @click="sortMaxPrice">Сначала дорогие</div>
            <div @click="sortMinPrice">Сначала дешевые</div>
          </div>
          <!-- /.card-info -->
        </div>
        <div class="cards cards-menu">
          <ProductCard
            v-for="(product, index) in products"
            :product="product"
            :key="index"
            :value="product.name"
          />
        </div>
        <!-- /.cards -->
      </section>
    </div>
    <!-- /.container -->
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import json from "@/assets/db/db.json";
import { ProductType } from "@/types/types";
import ProductCard from "@/components/ProductCard.vue";

export default defineComponent({
  name: "RestaurantView",
  props: {
    name: { type: String, required: true },
  },
  data() {
    const restaurant = json.db.partners.find(
      (restaurant) => restaurant.name === this.name
    );
    const products = require("@/assets/db/" + restaurant?.products);
    return {
      restaurant: restaurant,
      products: products as ProductType[],
    };
  },
  methods: {
    sortMaxPrice() {
      this.products.sort((a, b) => (a.price < b.price ? 1 : -1));
    },
    sortMinPrice() {
      this.products.sort((a, b) => (a.price > b.price ? 1 : -1));
    },
  },
  components: { ProductCard },
});
</script>

<style lang="scss">
.card-sorting-container {
  display: flex;
  margin-left: auto;
  gap: 8px;
  div {
    cursor: pointer;
    &:hover {
      color: rgb(17, 151, 196);
    }
  }
}
</style>
