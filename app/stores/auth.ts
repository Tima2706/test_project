import { defineStore } from "pinia";

interface User {
  id: string;
  email: string;
  name?: string;
  role?: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  role?: string;
}

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>(null);

  return {
    user,
  };
});
