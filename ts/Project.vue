<style lang="sass">
  .project-overview
    overflow: hidden
    margin: 3rem
    margin-bottom: 0
    padding: 1rem
    display: flex
    justify-content: space-between
    flex-wrap: wrap
    position: relative

    $bg: rgba(14, 14, 19, 0.89)

    @media (max-width: 800px)
      margin: 1rem
      margin-top: 3rem
      margin-bottom: 0

    img
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      object-fit: cover
      z-index: -1

    h1
      margin-top: 0

    h3 + *
      margin-left: 1rem

    .right
      padding: 1rem
      background: $bg
      &:empty
        display: none

      > *:first-child h3
        margin-top: 0

    .left
      h1, h2
        & > span
          background: $bg
          padding: .5rem 1rem
          box-decoration-break: clone
          line-height: 1.5em

      h2 > span
        line-height: 2em

  .project
    font-size: 1.5rem
    font-family: sans-serif
    margin: 3rem
    margin-top: 0
    background: #d4e0e1
    color: #171617
    padding: 2rem

    @media (max-width: 800px)
      margin: 1rem
      margin-top: 0

    > p:first-child
      margin-top: 0

    img
      width: 100%

    strong
      font-weight: bolder

    .img-desc
      font-style: italic
      font-size: 1rem
      margin-left: 2rem
      margin-bottom: 2rem
</style>

<template>
  <article>
    <section class="project-overview">
      <img :src="getImg()" />
      <div class="left">
        <h1><span>{{ proj("name") }}</span></h1>
        <h2 class="brief"><span>{{ proj("brief") }}</span></h2>
      </div>
      <div class="right">
        <div v-if="projmeta_e('collab')">
          <h3>{{ $t('projectcollab') }}</h3>
          <span>{{ projmeta('collab') }}</span>
        </div>
        <div v-if="projmeta_e('link')">
          <h3>{{ $t('projectlink') }}</h3>
          <a :href="projmeta('link')">{{ fmturl(projmeta('link')) }}</a>
        </div>
        <div v-if="projmeta_e('git')">
          <h3>{{ $t('projectgit') }}</h3>
          <a :href="projmeta('git')">{{ projmeta('git') }}</a>
        </div>
      </div>
    </section>
    <section class="project" v-html=getProjectContent()></section>
  </article>
</template>

<script>
  export default {
    mounted () {
      window.scrollTo(0, 0)
    },
    methods: {
      getImg() {
        const projectid = this.$route.params.projectid
        return this.projects[projectid].img
      },
      fmturl(url) {
        const re = /(?:https?:\/\/)?(.+?)\/?$/
        const match = re.exec(url)
        if(match) return match[1]
        else return url
      },
      projmeta(attr) {
        const projectid = this.$route.params.projectid
        return this.projects[projectid][attr]
      },
      projmeta_e(attr) {
        const projectid = this.$route.params.projectid
        return attr in this.projects[projectid]
      },
      proj(attr) {
        return this.$t('projects.' + this.$route.params.projectid + '.' + attr)
      },
      proj_e(attr) {
        return this.$te('projects.' + this.$route.params.projectid + '.' + attr)
      },
      getProjectContent() {
        const lang = this.$i18n.locale
        const projectid = this.$route.params.projectid
        const project = this.projects[projectid]
        if(project === undefined) return this.proj('desc')
        const content = project.content
        if(content === undefined) return this.proj('desc')
        else return content[lang] || content['en'] || Object.values(content)[0]
      }
    },
  }
</script>
