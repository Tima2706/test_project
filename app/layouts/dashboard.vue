<script setup lang="ts">



const toast = useToast();
const router = useRouter();
const auth = useAuthStore();


const handleLogout = async () => {
  await auth.logout();
  toast.add({title: 'You have been logged out', color: 'info'})
  router.push('/')

};
</script>

<template>
  <UDashboardGroup>
    <UDashboardSidebar
        collapsible
        resizable
        :ui="{ footer: 'border-t border-default' }"
    >
      <template #header="{ collapsed }">
        <div class="text-2xl text-primary font-bold">Auth Task</div>
      </template>

      <template #default="{ collapsed }">
        <UNavigationMenu
            :collapsed="collapsed"
            :items="auth.filteredMenu"
            orientation="vertical"
        />
      </template>

      <template #footer>
        <UButton @click="handleLogout" class="w-full justify-center" color="error">
          Logout
        </UButton>
      </template>
    </UDashboardSidebar>

    <div class="p-5">
      <slot/>
    </div>
  </UDashboardGroup>
</template>
