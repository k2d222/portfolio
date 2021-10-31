<style lang="sass">
  .card
    border: 1px solid black
    padding: 1rem

  .brief
    font-style: italic
</style>

<template>
  <router-link :to="{ name: 'project', params: { projectid } }">
    <div class="card">
      <h3>{{ proj('name') }}</h3>
      <span class="brief">{{ proj('brief') }}</span>
      <p>{{ proj('desc') }}</p>
    </div>
  </router-link>
</template>

<script>
  export default {
    props: [ 'projectid' ],

    methods: {
      proj(attr) {
        return this.$t('projects.' + this.projectid + '.' + attr)
      }
    }
  };
</script>
