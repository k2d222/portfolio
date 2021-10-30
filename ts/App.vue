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
      <img @click="_ = fr" class="flag" src="../assets/flag_fr.svg" alt="français">
      <img  @click="_ = en" class="flag" src="../assets/flag_en.svg" alt="english">
      <a href="#contact">{{ _.titlecontact }}</a>
      <a href="#cv">{{ _.titlecv }}</a>
    </nav>
  </header>

  <section id="presentation">
    <anim-title text="Mathis Brossier"></anim-title>
    <div id="about">
      <p>{{ _.subtitle }}</p>
      <p>{{ _.internship }}</p>
    </div>
  </section>

  <section id="projets">
    <h2>{{ _.titleprojects }}</h2>
    <div id="cards">
      <card
        v-for="card in _.projects"
        v-bind:card="card">
      </card>
    </div>
  </section>

  <section id="contact">
    <h2>{{ _.titlecontact }}</h2>
    <p>{{ _.contactme }}</p>
    <p><a href="mailto:mathis.brossier@universite-paris-saclay.fr">mathis.brossier@universite-paris-saclay.fr</a> — (+33)7.81.40.33.66</p>
  </section>

  <section id="cv">
    <h2>{{ _.titlecv }}</h2>
    <p>{{ _.curriculum }}</p>
    <p>
      <a href="CV_Mathis_Brossier_fr.pdf"><img class="flag" src="../assets/flag_fr.svg" alt="français"> français</a>
       —
      <a href="CV_Mathis_Brossier_en.pdf"><img class="flag" src="../assets/flag_en.svg" alt="english"> english</a></p>
  </section>

</template>

<script>
  import fr from "../i18n/fr.yaml"
  import en from "../i18n/en.yaml"

  const lang = fr

  export default {
    data() {
      return {
        fr, en,
        _: lang
      }
    }
  }
</script>
