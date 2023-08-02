import { defaultTheme } from '@vuepress/theme-default'
import sidebar from "./sidebar.ts";
import { searchPlugin } from '@vuepress/plugin-search';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom';
import { viteBundler } from '@vuepress/bundler-vite';
import { path } from '@vuepress/utils'

export default {
  title: "Cours",
  description: "Cette documentation est réalisée par Valentin Brosseau (pour le BTS SIO, GRETA, et dans différentes interventions), vous retrouverez dans l’ensemble des cours (slide) ainsi que les TP.",
  bundler: viteBundler(),
  plugins: [
    mediumZoomPlugin(),
    googleAnalyticsPlugin({ 'id': 'UA-2107503-8' }),
    searchPlugin({
      hotKeys: ["s", "/", { shift: true, key: "k" }],
      locales: {
        "/": {
          placeholder: "Rechercher",
        },
      },
    }),
    require('./plugins/authors.ts')
  ],
  locales: {
    '/': {
      lang: 'fr-FR',
      title: "Cours",
      description: "Supports de cours de Valentin Brosseau",
    }
  },
  lang: "fr-FR",
  dest: "docs",
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['link', { rel: 'icon', href: '/icons/icon-72x72.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3e80af' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3e80af' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#3e80af' }],
    ['meta', { name: 'google-site-verification', content: 'IpzGtrtih2KT0f0XkFOsx0qHPBihE6JADKtXpO-KN-4' }]
  ],
  theme: defaultTheme({
    docsBranch: 'master',
    editLinks: true,
    nextLinks: false,
    prevLinks: false,
    displayAllHeaders: true,
    lastUpdatedText: 'Mis à jour le',
    contributorsText: "Contributeurs",
    sidebarDepth: 0,
    navbar: [
      { text: 'Accueil', link: '/' },
      { text: 'Une question ?', link: '/pages/contact.md' },
    ],
    sidebar: sidebar
  }),
  alias: {
    '@theme/Sidebar.vue': path.resolve(__dirname, './components/overridingTheme/Sidebar.vue'),
    '@theme/Page.vue': path.resolve(__dirname, './components/overridingTheme/Page.vue'),
  }
};
