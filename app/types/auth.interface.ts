export interface User {
    id: string | number;
    name: string;
    email: string;
    role: 'admin' | 'manager' | 'user' | string;
}

export interface LoginData {
    accessToken: string;
    refreshToken: string;
    user: User;
}
