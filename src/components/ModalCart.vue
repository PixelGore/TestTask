<template>
  <div class="modal modal-cart" :class="isOpen && cart.length > 0 && 'open'">
    <div class="modal-dialog">
      <div class="modal-header">
        <h3 class="modal-title">Корзина</h3>
        <button class="close" @click="close">&times;</button>
      </div>
      <!-- /.modal-header -->
      <div class="modal-body">
        <CartItem
          v-for="(product, index) in cart"
          :product="product"
          :key="index"
          :value="product.name"
        />
      </div>
      <!-- /.modal-body -->
      <div class="modal-footer">
        <span class="modal-pricetag">{{ totalPrice }} ₽</span>
        <div class="footer-buttons">
          <button class="button button-primary">Оформить заказ</button>
          <button class="button clear-cart" @click="close">Отмена</button>
        </div>
      </div>
      <!-- /.modal-footer -->
    </div>
    <!-- /.modal-dialog -->
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/store";
import CartItem from "@/components/CartItem.vue";
const store = useStore();

export default defineComponent({
  name: "ModalCart",
  components: {
    CartItem,
  },
  props: {
    isOpen: { type: Boolean, required: true },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
  computed: {
    totalPrice() {
      return store.getters.getTotalPrice;
    },
  },
  setup() {
    const cart = computed(() => store.state.cart);
    return { cart };
  },
});
</script>
