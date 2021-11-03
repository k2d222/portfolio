import { createApp } from "vue"
import { createI18n } from "vue-i18n"
import { createRouter, createWebHistory } from "vue-router"

import VueRoot from './Root.vue'
import VueApp from './App.vue'
import VueHome from './Home.vue'
import VueCard from './Card.vue'
import VueTitle from './Title.vue'
import VueProjects from './Projects.vue'
import VueProject from './Project.vue'
import VueHeader from './Header.vue'

import Projects from './projects'

import fr from "../i18n/fr.yaml"
import en from "../i18n/en.yaml"

const i18n = createI18n({
  locale: navigator.language.substr(0, 2),
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
  scrollBehavior (to, from, savedPosition) {
    if(to.hash) {
       return { el: to.hash, behavior: 'smooth' }
    }
    else {
      return { to: 0 }
    }
  },
  routes: [
    {
      path: '/:locale',
      component: VueApp,
      children: [
        {
          name: 'home',
          path: '',
          component: VueHome
        },
        {
          name: 'project',
          path: 'projects/:projectid',
          component: VueProject
        }
      ]
    },
    {
      path: '/',
      redirect: { name: 'home', params: { locale: 'fr' } }
    },
  ],
})

router.beforeEach(localeGuard)

const app = createApp(VueRoot)
app.config.globalProperties.projects = Projects
app.use(i18n)
app.use(router)
app.component('home', VueHome)
app.component('card', VueCard)
app.component('my-header', VueHeader)
app.component('my-title', VueTitle)
app.component('projects', VueProjects)
app.component('project', VueProject)
app.mount('#app')
