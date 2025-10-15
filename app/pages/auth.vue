<script setup lang="ts">
import Login from "~/components/Login.vue";
import Register from "~/components/Register.vue";

const items = [
  {
    label: "Login",
    icon: "i-heroicons-user-solid",
    slot: "login",
  },
  {
    label: "Register",
    icon: "i-heroicons-pencil-square-solid",
    slot: "register",
  },
];

definePageMeta({
  layout: "auth",
});
</script>

<template>
  <UTabs class="w-[380px]" :items="items">
    <template #login>
      <Login />
    </template>

    <template #register>
      <Register />
    </template>
  </UTabs>
</template>
