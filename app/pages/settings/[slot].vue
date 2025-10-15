<script lang="ts" setup>
definePageMeta({
  layout: "dashboard",
});
</script>

<template>
  <h1 class="text-2xl font-bold">Page: {{ $route.params.slot }}</h1>
</template>
