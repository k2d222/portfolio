import { createApp } from "vue"
import { createI18n } from "vue-i18n"
import { createRouter, createWebHistory } from "vue-router"

import App from './App.vue'
import Home from './Home.vue'
import Card from './Card.vue'
import AnimTitle from './AnimTitle.vue'

import fr from "../i18n/fr.yaml"
import en from "../i18n/en.yaml"

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: { fr, en },
})

const localeGuard = (to, from) => {
  const locale = to.params.locale
  const locales = i18n.global.availableLocales as string[]
  if (typeof locale === 'string' && locales.includes(locale)) {
    i18n.global.locale = locale as any
  }
  else {
    return { params: { locale: 'en' }, redirect: true }
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'lang',
      path: '/:locale',
      component: Home,
      children: [
      ]
    },
    {
      path: '/',
      component: Home,
      redirect: { name: 'lang', params: { locale: 'fr' } }
    },
  ],
})

router.beforeEach(localeGuard)

const app = createApp(App)
app.use(i18n)
app.use(router)
app.component('home', Home)
app.component('card', Card)
app.component('anim-title', AnimTitle)
app.mount('#app')
