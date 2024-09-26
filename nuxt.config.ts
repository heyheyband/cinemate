// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      link: [
        {
          rel: 'styleshit',
          href: 'https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.css'
        }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js'
        }
      ]
    }
  },
  runtimeConfig: {
    AccessToken: process.env.AccessToken,
    ApiBaseUrl: process.env.ApiBaseUrl
  }
})
