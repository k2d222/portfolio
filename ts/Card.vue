<style lang="sass">
  .card
    border: 1px solid black
    padding: 1rem

  .brief
    font-style: italic
</style>

<template>
  <div class="card">
    <h3>{{ card.name }}</h3>
    <span class="brief">{{ card.brief }}</span>
    <p>{{ card.desc }}</p>
  </div>
</template>

<script>
  export default {
    props: [ 'card' ]
  };
</script>
