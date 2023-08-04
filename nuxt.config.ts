// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   devtools: { enabled: true },
   runtimeConfig: {
      public: {
         baseURL: process.env.BASE_URL || "https://6082e3545dbd2c001757abf5.mockapi.io",
      },
   },
});
