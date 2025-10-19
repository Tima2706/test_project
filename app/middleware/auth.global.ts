    import { useAuthStore } from '~/stores/auth'

    export default defineNuxtRouteMiddleware(async (to) => {
        const publicPaths = ['/','/login', '/register', '/no-access']
        if (publicPaths.includes(to.path)) return

        const auth = useAuthStore()
        const access = useCookie<string | null>('accessToken').value
        const refresh = useCookie<string | null>('refreshToken').value


        if (auth.isAuthenticated) return

        if (access || refresh) {
            try {
                await auth.fetchMe()
                console.log('Fetched user in global auth middleware')
                if (auth.isAuthenticated) return
            } catch (err) {
                useCookie('accessToken').value = null
                useCookie('refreshToken').value = null
            }
        }

        if (to.path !== '/auth') {
            return navigateTo(`/auth?redirect=${encodeURIComponent(to.fullPath)}`)
        }
    })
