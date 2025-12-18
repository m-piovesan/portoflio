// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/i18n'
  ],
  css: ['~/assets/css/main.css'],
  image: {
    domains: ['nuxt.com']
  },
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'pt-br', name: 'Portuguese', file: 'br.json' },
      { code: 'es', name: 'Spanish', file: 'es.json' }
    ]
  }
})