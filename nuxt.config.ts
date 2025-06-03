// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },
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
      title: "E-commerce | VR XIV QR",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/icon.webp",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.cdnfonts.com/css/beatrice-display-trial",
        },
      ],
    },
  },
});
