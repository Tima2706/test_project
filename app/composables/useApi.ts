export function useApi() {
    const accessCookie = useCookie<string | null>('accessToken');
    const refreshCookie = useCookie<string | null>('refreshToken');

    async function refreshAccess(): Promise<string> {
        const refreshToken = refreshCookie.value;
        if (!refreshToken) throw new Error('No refresh token');

        const res = await $fetch<{ accessstoken: string }>('/api/auth/refresh', {
            method: 'POST',
            body: { refreshToken },
        });

        const newAccess = res.accessstoken;
        accessCookie.value = newAccess;
        return newAccess;
    }

    async function apiFetch<T = any>(
        input: string,
        opts: RequestInit = {},
        retry = true
    ): Promise<T> {
        const token = accessCookie.value;
        const headers = new Headers((opts.headers as HeadersInit) || {});
        if (token) headers.set('Authorization', `Bearer ${token}`);

        try {
            const result = (await $fetch(input, {
                ...opts,
                headers,
            } as any)) as T;
            return result;
        } catch (e: any) {
            const status = e?.status || e?.response?.status;
            if ((status === 401 || status === 403) && retry) {
                try {
                    const newAccess = await refreshAccess();
                    headers.set('Authorization', `Bearer ${newAccess}`);
                    const retryResult = (await $fetch(input, {
                        ...opts,
                        headers,
                    } as any)) as T;
                    return retryResult;
                } catch (refErr) {
                    accessCookie.value = null;
                    refreshCookie.value = null;
                    throw refErr;
                }
            }
            throw e;
        }
    }

    return { apiFetch, refreshAccess };
}
