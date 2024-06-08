// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image"],
  app: {
    head: {
      title: 'Nuxt test',
      meta: [{
        name: 'description', content: 'Everything about Nuxt 3'
      }],
      link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Icons' }, { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined' }],
    }
  },
  runtimeConfig: {
    currencyKey: process.env.APIKEY
  }
})