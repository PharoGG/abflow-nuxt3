// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',

  app: {
    baseURL: '/abflow-nuxt3/',
    head: {
      title: 'AB FLOW',
      htmlAttrs: {
        lang: 'ru',
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { name: 'description', content: 'Описание вашего сайта для поисковиков' },
        { name: 'keywords', content: 'разработка, дизайн, стартапы, веб-сервисы' },
        { name: 'author', content: 'AB FLOW' },

        // Open Graph
        // { property: 'og:title', content: 'Название сайта' },
        // { property: 'og:description', content: 'Описание для соцсетей' },
        // { property: 'og:type', content: 'website' },
        // { property: 'og:url', content: 'https://ваш-домен.kz/' },
        // { property: 'og:image', content: 'https://ваш-домен.kz/og-preview.jpg' },

        // Twitter Card
        // { name: 'twitter:card', content: 'summary_large_image' },
        // { name: 'twitter:title', content: 'Название сайта' },
        // { name: 'twitter:description', content: 'Описание для Twitter' },
        // { name: 'twitter:image', content: 'https://ваш-домен.kz/og-preview.jpg' }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap',
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  },

  runtimeConfig: {
    public: {
      site: {
        url: 'https://pharogg.github.io/abflow-nuxt3',
        name: 'Abflow',
        description: 'Abflow - автоматизация бизнес процессов',
      }
    }
  },

  nitro: {
    preset: 'static'
  },

  devtools: { enabled: true },

  modules: [
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@vueuse/nuxt',
    '@nuxtjs/seo'
  ],

  components: true,
  pages: true,

  css: ['@/assets/styles/main.scss'],

  dir: {
    public: "./public",
    assets: "./assets",
    pages: "./pages",
    layouts: "./layouts"
  },
})