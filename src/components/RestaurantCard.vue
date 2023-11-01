<template>
  <router-link
    :to="{ name: 'restaurants', params: { name: restaurant!.name } }"
    class="card card-restaurant"
  >
    <img
      :src="require('@/assets/' + restaurant?.image)"
      alt="image"
      class="card-image"
    />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title">{{ restaurant?.name }}</h3>
        <span class="card-tag tag">
          {{ restaurant?.time_of_delivery }} мин
        </span>
      </div>
      <!-- /.card-heading -->
      <div class="card-info">
        <div class="rating">{{ restaurant?.stars }}</div>
        <div class="price">{{ restaurant?.price }} ₽</div>
        <div class="category">{{ restaurant?.kitchen }}</div>
      </div>
      <!-- /.card-info -->
    </div>
    <!-- /.card-text -->
  </router-link>
  <!-- /.card -->
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { RestaurantType } from "@/types/types";

export default defineComponent({
  name: "RestaurantCard",
  props: {
    restaurant: Object as PropType<RestaurantType>,
  },
});
</script>

<style lang="scss" scoped></style>
