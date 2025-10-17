export interface MenuItem {
    label: string
    icon?: string
    to?: string
    children?: MenuItem[]
    roles: string[]
}
