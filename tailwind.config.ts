import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        facebook: '#3b5999',
        messenger: '#0084ff',
        twitter: '#55acee',
        linkedin: '#0077b5',
        skype: '#00aff0',
        dropbox: '#007ee5',
        wordpress: '#21759b',
        vimeo: '#1ab7ea',
        slideshare: '#0077b5',
        vk: '#4c75a3',
        tumblr: '#34465d',
        yahoo: '#410093',
        'google-plus': '#dd4b39',
        pinterest: '#bd081c',
        youtube: '#cd201f',
        reddit: '#ff5700',
        whatsapp: '#25d366',
        instagram: '#e4405f',
        snapchat: '#fffc00'
      }
    }
  }
}
