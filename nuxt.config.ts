// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["@/assets/css/global.scss"],
  modules: [
    "@nuxt/icon",
    "@nuxt/image",
    "@ant-design-vue/nuxt",
    "@nuxtjs/i18n",
    "@vesp/nuxt-fontawesome",
    "@vee-validate/nuxt",
  ],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    },
  },
  i18n: {
    defaultLocale: "en",
    locales: [{ code: "en", name: "English", file: "en.json" }],
    strategy: "prefix",
  },
});
