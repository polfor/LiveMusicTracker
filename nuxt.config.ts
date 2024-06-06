// @ts-nocheck
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // ...
  build: {
    transpile: ["vuetify"]
  },
  runtimeConfig: {
    MONGO_URI: process.env.MONGODB_URI,
    JWT_TOKEN_SECRET: process.env.JWT_TOKEN_SECRET
  },
  nitro: {
    plugins: ["@/server/db/index.ts"]
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", config => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@nuxtjs/eslint-module"
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    }
  },
  plugins: ["./plugins/vuetify.ts"]
});
