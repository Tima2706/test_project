import { useAuthStore } from '~/stores/auth'

export default defineNuxtPlugin(async (nuxtApp) => {
    const auth = useAuthStore()
    if (auth.hasToken) {
        const user = await auth.fetchMe()

        if (!user) {
            const newToken = await auth.refreshToken()
            if (newToken) {
                await auth.fetchMe()
            } else {
                await auth.logout()
            }
        }
    }
})
