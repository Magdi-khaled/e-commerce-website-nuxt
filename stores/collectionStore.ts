import { defineStore } from "pinia";
import type Product from "~/types/useProduct";

export const useCollectionStore = defineStore("collection", () => {
  const collections = ref<Product[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchCollections = async () => {
    loading.value = true;
    error.value = null;
    try {
      // Replace with your API call
      // const data = await $fetch<[]>("/api/collections");

      const storedProducts = localStorage.getItem("products");
      setCollections(
        storedProducts && Object.keys(useRoute().query).length > 0
          ? JSON.parse(storedProducts)
          : xivCollection || []
      );
    } catch (err: any) {
      error.value = err.message || "Failed to fetch collections";
    } finally {
      loading.value = false;
    }
  };

  const setCollections = (items: Product[]) => (collections.value = items);

  return { collections, fetchCollections, setCollections };
});
