<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
  middleware: ['role'],
  allowedRoles: ['admin', 'manager', 'user'],
});

</script>

<template>
  <div class="p-5">
    <h2 class="text-2xl">Page: Inbox</h2>
  </div>
</template>
