<style lang="sass">
  header
    display: flex
    flex-direction: row
    gap: 1rem
    align-items: center
    justify-content: space-between

    #home
      height: 3rem

    nav
      display: flex
      gap: 2rem
</style>

<template>
  <header>
    <router-link :to="{ name: 'home' }">
      <img id="home" src="../assets/logo-light.svg" alt="Mathis Brossier">
    </router-link>
    <nav>
      <router-link :to="{ params: { locale: 'fr' }}">
        <img class="flag" src="../assets/flag_fr.svg" alt="français">
      </router-link>
      <router-link :to="{ params: { locale: 'en' }}">
        <img class="flag" src="../assets/flag_en.svg" alt="english">
      </router-link>
      <a href="#contact">{{ $t("titlecontact") }}</a>
      <a href="#cv">{{ $t("titlecv") }}</a>
    </nav>
  </header>
</template>

<script>
  export default {}
</script>
