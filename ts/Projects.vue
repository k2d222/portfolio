<style lang="sass">
  #cards
    display: grid
    gap: 2rem
    grid-template-columns: 1fr
    @media (min-width: 1023px)
      grid-template-columns: repeat(4, 1fr)
</style>

<template>
  <section id="projets">
    <h2>{{ $t("titleprojects") }}</h2>
    <div id="cards">
      <card v-for="proj in projects" :projectid=proj></card>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        projects: [ 'moncraft', 'ur', 'pixels', 'podelium', 'goteka' ]
      }
    },
  }
</script>
