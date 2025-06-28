import { defineStore } from "pinia";
import type Order from "~/types/useProduct";

export const useCartStore = defineStore("cart", () => {
  const cartItems = ref<Order[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchCart = async () => {
    loading.value = true;
    error.value = null;
    try {
      // Replace with your API call
      // const data = await $fetch<[]>("/api/cart");
      const storedItems = JSON.parse(localStorage.getItem("cartItems"));
      cartItems.value = storedItems ? storedItems : [];
    } catch (err: any) {
      error.value = err.message || "Failed to fetch cart items";
    } finally {
      loading.value = false;
    }
  };

  const addToCart = async (order: Order) => {
    loading.value = true;
    error.value = null;
    try {
      // Replace with your API call
      // const data = await $fetch<[]>("/api/cart/addtocart/id");
      const existItem = cartItems.value.findIndex((v) => v.id === order.id);
      if (existItem === -1) {
        cartItems.value.push(order);
        localStorage.setItem("cartItems", JSON.stringify(cartItems.value));
      } else {
        cartItems.value.map((item) =>
          item.id === order.id ? item.orderQuantity++ : true
        );
        localStorage.setItem("cartItems", JSON.stringify(cartItems.value));
      }
    } catch (err: any) {
      error.value = err.message || "Failed to add item to cart";
    } finally {
      loading.value = false;
    }
  };

  const removeFromCart = async (item: Order) => {
    loading.value = true;
    error.value = null;
    try {
      // Replace with your API call
      // const data = await $fetch<[]>("/api/cart/remove/:id");
      const existIndx = cartItems.value.findIndex((v) => v.id === item.id);

      if (item.orderQuantity === 1) {
        cartItems.value.splice(existIndx, 1);
        localStorage.setItem("cartItems", JSON.stringify(cartItems.value));
      } else {
        cartItems.value.map((v) =>
          v.id === item.id ? v.orderQuantity-- : true
        );
        localStorage.setItem("cartItems", JSON.stringify(cartItems.value));
      }
    } catch (err: any) {
      error.value = err.message || "Failed to add item to cart";
    } finally {
      loading.value = false;
    }
  };

  const removeItemFromCart = async (item: Order) => {
    loading.value = true;
    error.value = null;
    try {
      // Replace with your API call
      // const data = await $fetch<[]>("/api/cart/remove/:id");
      const existIndx = cartItems.value.findIndex((v) => v.id === item.id);

      cartItems.value.splice(existIndx, 1);
      localStorage.setItem("cartItems", JSON.stringify(cartItems.value));
    } catch (err: any) {
      error.value = err.message || "Failed to add item to cart";
    } finally {
      loading.value = false;
    }
  };

  return {
    cartItems,
    fetchCart,
    addToCart,
    removeFromCart,
    removeItemFromCart,
  };
});
