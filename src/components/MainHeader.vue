<template>
  <div class="container">
    <header class="header">
      <router-link class="logo" to="/">
        <img src="@/assets/img/logo.svg" alt="Logo" />
      </router-link>
      <label class="address">
        <input
          type="text"
          class="input input-address"
          placeholder="Адрес доставки"
        />
      </label>
      <div class="buttons">
        <span class="user-name"></span>
        <button class="button button-primary button-auth" @click="openAuth">
          <span class="button-auth-svg"></span>
          <span class="button-text">Войти</span>
        </button>
        <button
          class="button button-cart"
          id="cart-button"
          @click="openCart"
          :class="totalCount > 0 && 'open'"
        >
          <span class="button-cart-svg"></span>
          <span class="button-text">Корзина</span>
        </button>
        <button class="button button-primary button-out">
          <span class="button-text">Выйти</span>
          <span class="button-out-svg"></span>
        </button>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { defineComponent } from "vue";
const store = useStore();
export default defineComponent({
  name: "MainHeader",
  methods: {
    openAuth() {
      this.$emit("openAuth");
    },
    openCart() {
      this.$emit("openCart");
    },
  },
  computed: {
    totalCount() {
      return store.getters.totalCount;
    },
  },
});
</script>
