<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

definePageMeta({
  layout: "dashboard",
});
</script>

<template>
  <div class="p-5">
    <h2 class="text-2xl">Hello {{ user?.name }}</h2>
  </div>
</template>
