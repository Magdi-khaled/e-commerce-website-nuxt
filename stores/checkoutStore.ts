import { defineStore } from "pinia";
import type Order from "~/types/useOrder";

export const useCheckoutStore = defineStore("checkout", () => {
  const orders = ref<Order[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchOrders = async () => {
    loading.value = true;
    error.value = null;
    try {
      // Replace with your API call
      // const data = await $fetch<[]>("/api/orders");

      const storedItems = JSON.parse(localStorage.getItem("cartItems"));
      setOrders(storedItems ? storedItems : []);
    } catch (err: any) {
      error.value = err.message || "Failed to fetch collections";
    } finally {
      loading.value = false;
    }
  };

  const setOrders = (items: Order[]) => (orders.value = items);

  return { orders, fetchOrders, setOrders };
});
