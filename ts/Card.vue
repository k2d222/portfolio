<style lang="sass" scoped>
  a
    text-decoration: none

  .card
    border: 2px solid black
    padding: 1rem
    width: 100%
    height: 100%
    position: relative
    font-size: 1.5rem
    line-height: 2rem

    $bg: rgba(0, 0, 0, 0.9)

    h2 > span, .brief
        padding: .5rem 1rem
        background: $bg

    p
      margin: 0
      position: absolute
      bottom: 0
      left: 0
      right: 0
      padding: 1.5rem 2rem
      background: white
      color: black
      border-top: 2px solid black


    img
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      object-fit: cover
      z-index: -1

    .brief
      font-style: italic

  // anims
  .card
    overflow: hidden

    p
      transition: transform .1s

    &:not(:hover) p
        transform: translateY(100%)

    img
      transition: transform .3s

    &:hover img
      transform: scale(1.1)


</style>

<template>
  <router-link :to="{ name: 'project', params: { projectid } }">
    <div class="card">
      <img :src="images[projectid] || images['moncraft']" alt="">
      <h2><span>{{ proj('name') }}</span></h2>
      <span class="brief">{{ proj('brief') }}</span>
      <p>{{ proj('desc') }}</p>
    </div>
  </router-link>
</template>

<script>
  const images = {
    moncraft: new URL('../projects/moncraft/moncraft.png?as=webp&width=800', import.meta.url),
    ur: new URL('../projects/ur/gameofur.png?as=webp&width=800', import.meta.url),
    pixels: new URL('../projects/pixels/pixels.png?as=webp&width=800', import.meta.url),
    podelium: new URL('../projects/podelium/artwork.png?as=webp&width=800', import.meta.url),
    goteka: new URL('../projects/goteka/widgets.png?as=webp&width=800', import.meta.url),
  }

  export default {
    data() {
      return { images }
    },
    props: [ 'projectid' ],

    methods: {
      proj(attr) {
        return this.$t('projects.' + this.projectid + '.' + attr)
      }
    }
  };
</script>
