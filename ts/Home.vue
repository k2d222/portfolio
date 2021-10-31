<style lang="sass">
  header
    display: flex
    flex-direction: row
    gap: 1rem
    align-items: center
    justify-content: space-between

    > img
      height: 3rem

    > nav
      display: flex
      gap: 2rem

  section#presentation
    margin: 10rem 0
    text-align: center

    #about
      margin: 5rem 0

    p
      font-size: 1.5rem

  #cards
    display: grid
    gap: 2rem
    grid-template-columns: 1fr
    @media (min-width: 1023px)
      grid-template-columns: repeat(4, 1fr)

  section
    margin: 5rem 0

  .flag
    height: 1em

</style>

<template>

  <header>
    <img src="../assets/logo-light.svg" alt="Mathis Brossier">
    <nav>
      <router-link :to="{ name: 'lang', params: { locale: 'fr' }}"><img class="flag" src="../assets/flag_fr.svg" alt="français"></router-link>
      <router-link :to="{ name: 'lang', params: { locale: 'en' }}"><img class="flag" src="../assets/flag_en.svg" alt="english"></router-link>
      <a href="#contact">{{ $t("titlecontact") }}</a>
      <a href="#cv">{{ $t("titlecv") }}</a>
    </nav>
  </header>

  <section id="presentation">
    <anim-title text="Mathis Brossier"></anim-title>
    <div id="about">
      <p>{{ $t("subtitle") }}</p>
      <p>{{ $t("internship") }}</p>
    </div>
  </section>

  <section id="projets">
    <h2>{{ $t("titleprojects") }}</h2>
    <div id="cards">
      <card
        v-for="proj in projects"
        :projectid=proj>
      </card>
    </div>
  </section>

  <section id="contact">
    <h2>{{ $t("titlecontact") }}</h2>
    <p>{{ $t("contactme") }}</p>
    <p><a href="mailto:mathis.brossier@universite-paris-saclay.fr">mathis.brossier@universite-paris-saclay.fr</a> — (+33)7.81.40.33.66</p>
  </section>

  <section id="cv">
    <h2>{{ $t("titlecv") }}</h2>
    <p>{{ $t("curriculum") }}</p>
    <p>
      <a href="CV_Mathis_Brossier_fr.pdf"><img class="flag" src="../assets/flag_fr.svg" alt="français"> français</a>
       —
      <a href="CV_Mathis_Brossier_en.pdf"><img class="flag" src="../assets/flag_en.svg" alt="english"> english</a></p>
  </section>

</template>

<script>
  const locales = [ 'en', 'fr' ]

  function updateLang(to, from) {
    const locale = to.params.locale
    const locales = this.$i18n.availableLocales
    if (typeof locale === 'string' && locales.includes(locale)) {
      this.$i18n.locale = locale
    }
  }

  export default {
    data() {
      return {
        projects: [ 'moncraft', 'ur', 'pixels', 'podelium', 'goteka' ]
      }
    },
    beforeRouteUpdate: updateLang,
    beforeRouteEnter: (to, from, next) => next(vm => updateLang.bind(vm)(to, from)),
  }
</script>
