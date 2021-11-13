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

      a
        text-decoration: none
        border-bottom: 2px solid transparent
        &:hover
          border-bottom-color: inherit
          transition: border .2s
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
      <router-link :to="{ name: 'home', hash: '#projects'}">
        {{ $t("navprojects") }}
      </router-link>
      <router-link :to="{ name: 'home', hash: '#contact'}">
        {{ $t("navcontact") }}
      </router-link>
      <router-link :to="{ name: 'home', hash: '#cv'}">
        {{ $t("navcv") }}
      </router-link>
    </nav>
  </header>
</template>

<script>
  export default {}
</script>
