<template>
  <main class="main">
    <div class="container">
      <section class="container-promo">
        <section class="promo pizza">
          <h1 class="promo-title">Онлайн-сервис <br />доставки еды на дом</h1>
          <p class="promo-text">
            Блюда из любимого ресторана привезет курьер в перчатках, маске и с
            антисептиком
          </p>
        </section>
      </section>
      <section class="restaurants">
        <div class="section-heading">
          <h2 class="section-title">Рестораны</h2>
          <label class="search">
            <input
              type="text"
              class="input input-search"
              v-model="search"
              placeholder="Поиск блюд и ресторанов"
            />
          </label>
        </div>
        <div class="cards cards-restaurants">
          <RestaurantCard
            v-for="(restaurant, index) in filteredList"
            :restaurant="restaurant"
            :key="index"
            :value="restaurant.name"
          />
        </div>
        <!-- /.cards -->
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import json from "@/assets/db/db.json";
import RestaurantCard from "@/components/RestaurantCard.vue";
import { RestaurantType } from "@/types/types";

export default defineComponent({
  name: "HomeView",
  data() {
    return {
      search: "",
      restaurants: json.db,
    };
  },
  components: {
    RestaurantCard,
  },
  computed: {
    filteredList(): RestaurantType[] {
      const resultsSet = new Set();

      // Search for restaurant names
      this.restaurants.partners.forEach((partner) => {
        if (partner.name.toLowerCase().includes(this.search.toLowerCase())) {
          resultsSet.add(partner);
        }
      });

      // Search for dishes and their components
      for (const partner of this.restaurants.partners) {
        const products = require("@/assets/db/" + partner?.products);
        for (const product of products) {
          if (
            product.name.toLowerCase().includes(this.search.toLowerCase()) ||
            product.description
              .toLowerCase()
              .includes(this.search.toLowerCase())
          ) {
            resultsSet.add(partner);
          }
        }
      }

      // Convert Set back to an array
      const results = Array.from(resultsSet);

      return results as RestaurantType[];
    },
  },
});
</script>
