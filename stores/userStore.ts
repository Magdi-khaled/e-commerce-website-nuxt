import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const user = ref<{} | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const login = async (email: string, password: string) => {
    loading.value = true;
    error.value = null;
    try {
      // Replace with your API call
      // const data = await $fetch<[]>("/api/login", { method: "POST", body: { email, password } });
      setUser({ name: "magdi" });
    } catch (err: any) {
      error.value = err.message || "Failed to login";
    } finally {
      loading.value = false;
    }
  };

  const logout = async () => {
    loading.value = true;
    error.value = null;
    try {
      // Replace with your API call
      // await $fetch("/api/logout");
      setUser(null);
    } catch (err: any) {
      error.value = err.message || "Failed to logout";
    } finally {
      loading.value = false;
    }
  };

  const signup = async (email: string, password: string) => {
    loading.value = true;
    error.value = null;
    try {
      // Replace with your API call
      // const data = await $fetch<[]>("/api/signup", { method: "POST", body: { email, password } });
      setUser({ name: "magdi" });
    } catch (err: any) {
      error.value = err.message || "Failed to signup";
    } finally {
      loading.value = false;
    }
  };

  const fetchUser = async () => {
    loading.value = true;
    error.value = null;
    try {
      // Replace with your API call
      // const data = await $fetch<[]>("/api/user");
      setUser({ name: "magdi" });
    } catch (err: any) {
      error.value = err.message || "Failed to fetch collections";
    } finally {
      loading.value = false;
    }
  };

  const setUser = (item: {} | null) => (user.value = item);
  const getUser = computed(() => user.value);

  return { login, logout, signup, fetchUser, getUser };
});
