<style lang="sass">
  #cards
    display: grid
    gap: 2rem
    grid-template-columns: 1fr
    grid-auto-rows: 60vw
    @media (min-width: 1500px)
      grid-template-columns: repeat(2, 1fr)
      grid-auto-rows: 30vw
</style>

<template>
  <section id="projects">
    <h2>{{ $t("titleprojects") }}</h2>
    <div id="cards">
      <card v-for="proj in Object.keys(projects)" :projectid=proj></card>
    </div>
  </section>
</template>

<script>
  export default {}
</script>
