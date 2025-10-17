import type { MenuItem } from '~/types/menu.interface'

export const menuItems: MenuItem[] = [
    {
        label: 'Home',
        icon: 'i-heroicons-home',
        to: '/dashboard',
        roles: ['admin', 'manager', 'user'],
    },
    {
        label: 'Inbox',
        icon: 'i-heroicons-inbox',
        to: '/inbox',
        roles: ['admin', 'manager', 'user'],
    },
    {
        label: 'Contacts',
        icon: 'i-heroicons-users',
        to: '/contacts',
        roles: ['admin', 'manager'],
    },
    {
        label: 'Settings',
        icon: 'i-heroicons-cog-6-tooth',
        roles: ['admin', 'manager', 'user'],
        children: [
            {
                label: 'General',
                icon: 'i-heroicons-adjustments-horizontal',
                to: '/settings/general',
                roles: ['admin', 'manager', 'user'],
            },
            {
                label: 'Members',
                icon: 'i-heroicons-user-group',
                to: '/settings/members',
                roles: ['admin'],
            },
            {
                label: 'Notifications',
                icon: 'i-heroicons-bell',
                to: '/settings/notifications',
                roles: ['admin', 'manager', 'user'],
            },
        ],
    },
]
