// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["@/assets/css/global.scss", "@/assets/css/mobile.scss"],
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
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css",
        },
      ],
    },
  },
  i18n: {
    defaultLocale: "en",
    locales: [{ code: "en", name: "English", file: "en.json" }],
    strategy: "prefix",
  },
});
