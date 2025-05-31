// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  components: [{path: '~/shared/icons', prefix: 'Icon'}, '~/components'],
  css: ['~/assets/css/main.css']
})
