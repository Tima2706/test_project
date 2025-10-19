import {defineStore} from 'pinia'
import type {User, LoginData} from '~/types/auth.interface'
import type {MenuItem} from '~/types/menu.interface'
import {menuItems} from '~/utils/menuItems'

export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null)
    const isLoading = ref(false)
    const error = ref<string | null>(null)

    const accessCookie = useCookie<string | null>('accessToken', {sameSite: 'lax'})
    const refreshCookie = useCookie<string | null>('refreshToken', {sameSite: 'lax'})

    const isAuthenticated = computed(() => !!user.value)

    const accessToken = computed(() => accessCookie.value)

    const hasToken = computed(() => !!accessCookie.value)

    async function setSessionFromResponse(resp: LoginData) {
        accessCookie.value = resp.accessToken
        refreshCookie.value = resp.refreshToken
        user.value = resp.user
    }

    async function login(payload: { email: string; password: string }) {
        isLoading.value = true
        error.value = null
        try {
            const resp = await $fetch<LoginData>('/api/auth/login', {
                method: 'POST',
                body: payload,
            })
            await setSessionFromResponse(resp)
            return resp
        } catch (e: any) {
            error.value = e?.data?.message || e?.message || 'Login failed'
            throw e
        } finally {
            isLoading.value = false
        }
    }

    async function register(payload: { name: string; email: string; password: string; role?: string }) {
        isLoading.value = true
        error.value = null
        try {
            const resp = await $fetch<LoginData>('/api/auth/register', {
                method: 'POST',
                body: payload,
            })
            await setSessionFromResponse(resp)
            return resp
        } catch (e: any) {
            error.value = e?.data?.message || e?.message || 'Register failed'
            throw e
        } finally {
            isLoading.value = false
        }
    }

    async function fetchMe() {
        const access = accessCookie.value
        if (!access) return null

        try {
            const resp = await $fetch<{ user: User }>('/api/auth/me', {
                method: 'GET',
                headers: { Authorization: `Bearer ${access}` },
            })
            user.value = resp.user
            return resp.user
        } catch (err: any) {
            console.warn('⚠️ fetchMe failed, trying to refresh...', err?.response?._data || err)

            const newToken = await refreshToken()
            if (!newToken) {
                console.error('❌ Refresh failed during fetchMe')
                await logout()
                return null
            }

            try {
                const resp = await $fetch<{ user: User }>('/api/auth/me', {
                    method: 'GET',
                    headers: { Authorization: `Bearer ${newToken}` },
                })
                user.value = resp.user
                return resp.user
            } catch (e) {
                console.error('❌ Second fetchMe attempt failed even after refresh', e)
                await logout()
                return null
            }
        }
    }


    async function refreshToken() {
        const refresh = refreshCookie.value
        if (!refresh) {
            console.warn('Нет refresh токена в cookie')
            return null
        }

        try {
            const resp = await $fetch<{ accessToken: string }>('/api/auth/refresh', {
                method: 'POST',
                body: { refreshToken: refresh },
            })
            console.log('✅ Token refreshed:', resp)
            accessCookie.value = resp.accessToken
            return resp.accessToken
        } catch (e: any) {
            console.error('❌ Refresh failed:', e)
            await logout()
            return null
        }
    }



    async function logout() {
        accessCookie.value = null
        refreshCookie.value = null
        user.value = null
        try {
            await $fetch('/api/auth/logout', {method: 'POST'}).catch(() => {
            })
        } catch {
        }
    }

    const filteredMenu = computed<MenuItem[]>(() => {
        const role = user.value?.role
        if (!role) return []

        const filterByRole = (items: MenuItem[]): MenuItem[] =>
            items
                .filter(item => item.roles.includes(role))
                .map(item => ({
                    ...item,
                    children: item.children ? filterByRole(item.children) : [],
                }))

        return filterByRole(menuItems)
    })

    return {
        user,
        isLoading,
        error,
        isAuthenticated,
        accessToken,
        hasToken,
        filteredMenu,
        login,
        register,
        fetchMe,
        refreshToken,
        logout,
    }
})
