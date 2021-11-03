<style lang="sass">
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

    > h2
      font-size: 2rem

      &::before
        content: "// "

  .flag
    height: 1em

</style>

<template>

  <section id="presentation">
    <my-title text="Mathis Brossier"></my-title>
    <div id="about">
      <!-- <p>(site en travaux)</p> -->
      <p>{{ $t("subtitle") }}</p>
      <p>{{ $t("internship") }}</p>
    </div>
  </section>

  <projects></projects>

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
  export default {}
</script>
