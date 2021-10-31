import { createApp } from "vue"
import { createI18n } from "vue-i18n"
import { createRouter, createWebHistory } from "vue-router"

import Root from './Root.vue'
import App from './App.vue'
import Home from './Home.vue'
import Card from './Card.vue'
import MyTitle from './Title.vue'
import Projects from './Projects.vue'
import Project from './Project.vue'
import MyHeader from './Header.vue'

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
      path: '/:locale',
      component: App,
      children: [
        {
          name: 'home',
          path: '',
          component: Home
        },
        {
          name: 'project',
          path: 'projects/:projectid',
          component: Project
        }
      ]
    },
    {
      path: '/',
      redirect: { name: 'lang', params: { locale: 'fr' } }
    },
  ],
})

router.beforeEach(localeGuard)

const app = createApp(Root)
app.use(i18n)
app.use(router)
app.component('home', Home)
app.component('card', Card)
app.component('my-header', MyHeader)
app.component('my-title', MyTitle)
app.component('projects', Projects)
app.component('project', Project)
app.mount('#app')
