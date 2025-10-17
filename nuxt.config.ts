// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxt/ui", "@pinia/nuxt"],
  css: ["@/assets/css/main.css"],
  app: {
    head: {
      title: "Nuxt 3 | Test Task",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },
        {
          name: "description",
          content: "Test task for developers.",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  image: {
    // Options
  },
  ui: {
    // Options
    colorMode: false,
  },

  runtimeConfig: {
    // Private keys are only available on the server
    jwtAccessSecret: process.env.JWT_ACCESS_SECRET,
    jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
    jwtAccessExpires: process.env.JWT_ACCESS_EXPIRES || "15m",
    jwtRefreshExpires: process.env.JWT_REFRESH_EXPIRES || "7d",
    // Public keys that are exposed to the client
    public: {
      apiBase: process.env.BASE_API_URL || "http://localhost:3000/api",
    },
  },
});
