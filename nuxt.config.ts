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
   app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  css: ['~/assets/css/main.css'],
  image: {
    domains: ['nuxt.com']
  },
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: 'en.yml' },
      { code: 'pt-br', name: 'Portuguese', file: 'br.yml' },
      { code: 'es', name: 'Spanish', file: 'es.yml' }
    ]
  }
})