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
      column-gap: 1rem

  #presentation
    text-align: center

    #about
      margin: 5rem 0

    h1
      font-size: 4rem

    p
      font-size: 1.5rem

  #cards
    display: grid
    gap: 2rem
    grid-template-columns: 1fr
    @media (min-width: 1023px)
      grid-template-columns: repeat(4, 1fr)

  section
    margin: 10rem 0

  .flag
    height: 1em

</style>

<template>

  <header>
    <img src="../assets/logo-light.svg" alt="Mathis Brossier">
    <nav>
      <a href="/fr/"><img class="flag" src="../assets/flag_fr.svg" alt="français"></a>
      <a href="/en/"><img class="flag" src="../assets/flag_en.svg" alt="english"></a>
      <a href="#contact">{{ _.titlecontact }}</a>
      <a href="#cv">{{ _.titlecv }}</a>
    </nav>
  </header>

  <section id="presentation">
    <h1>Mathis Brossier</h1>
    <div id="about">
      <p>{{ _.subtitle }}</p>
      <p>{{ _.internship }}</p>
    </div>
  </section>

  <section id="projets">
    <h2>{{ _.titleprojects }}</h2>
    <div id="cards">
      <card
        v-for="card in cards"
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
  import lang from "../i18n/en.yaml"

  const cards = lang.projects

  export default {
    data() {
      return {
        _: lang,
        cards,
      }
    },
  }
</script>
