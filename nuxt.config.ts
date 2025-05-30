// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/icon", "@nuxt/fonts", "@nuxt/image"],
  css: ["@/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    format: ["webp", "avif"],
  },
  app: {
    head: {
      title: "e-commerce website",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/icon.png",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.cdnfonts.com/css/beatrice-display-trial",
        },
      ],
    },
  },
});
