<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items: NavigationMenuItem[] = [
  {
    // ADMIN, MANAGER, USER
    label: "Home",
    icon: "i-lucide-house",
    to: "/dashboard",
  },
  {
    // ADMIN, MANAGER, USER
    label: "Inbox",
    icon: "i-lucide-inbox",
    badge: "4",
    to: "/inbox",
  },
  {
    // MANAGER
    label: "Contacts",
    icon: "i-lucide-users",
    to: "/contacts",
  },
  {
    // ADMIN, MANAGER, USER
    label: "Settings",
    icon: "i-lucide-settings",
    defaultOpen: true,
    children: [
      {
        label: "General",
        to: "/settings",
      },
      {
        // ADMIN
        label: "Members",
        to: "/settings/members",
      },
      {
        label: "Notifications",
        to: "/settings/notifications",
      },
    ],
  },
];
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
          :items="items"
          orientation="vertical"
        />
      </template>
    </UDashboardSidebar>

    <div class="p-5">
      <slot />
    </div>
  </UDashboardGroup>
</template>
