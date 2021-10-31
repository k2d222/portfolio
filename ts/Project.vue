<style lang="sass">
</style>

<template>
  <div class="card">
    <h1>{{ proj("name") }}</h1>
  </div>
</template>

<script>
  export default {
    props: [ 'projectid' ],
    methods: {
      proj(attr) {
        return this.$t('projects.' + this.$route.params.projectid + '.' + attr)
      }
    }
  }
</script>
