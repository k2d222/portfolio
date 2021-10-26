

<template>
  <header>
    <h1>Mathis Brossier</h1>
    <p>{{ _.subtitle }}</p>
    <p><i> {{ _.internship }} </i></p>
  </header>
  <section>
    <card v-for="card in cards"></card>
  </section>
</template>

<script>
  import lang from "../i18n/fr.yaml"

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
