import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware(async (to) => {
    const allowed = (to.meta?.allowedRoles ?? []) as string[]
    if (!Array.isArray(allowed) || allowed.length === 0) return

    const auth = useAuthStore()
    if (!auth.isAuthenticated) {
        await auth.fetchMe().catch(()=>{})
    }

    const role = auth.user?.role
    if (!role || !allowed.includes(role)) {
        return navigateTo('/error')
    }
})
