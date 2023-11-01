<template>
  <MainHeader @openAuth="showAuthModal" @openCart="showCartModal" />
  <router-view />
  <ModalCart :isOpen="isCartModal" @close="closeCartModal" />
  <ModalAuth :isOpen="isAuthModal" @close="closeAuthModal" />
  <MainFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
import ModalCart from "@/components/ModalCart.vue";
import ModalAuth from "@/components/ModalAuth.vue";

export default defineComponent({
  components: {
    MainHeader,
    MainFooter,
    ModalCart,
    ModalAuth,
  },
  data() {
    return {
      isCartModal: false,
      isAuthModal: false,
    };
  },
  methods: {
    showCartModal() {
      this.isCartModal = true;
    },
    closeCartModal() {
      this.isCartModal = false;
    },
    showAuthModal() {
      this.isAuthModal = true;
    },
    closeAuthModal() {
      this.isAuthModal = false;
    },
  },
});
</script>

<style lang="scss">
@import "./assets/styles/normalize.css";
@import "./assets/styles/style.css";
</style>
