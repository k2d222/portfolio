<style lang="sass">
  .project
    font-size: 1.5rem
    font-family: sans-serif
    margin: 3rem 3rem
    background: #dedede
    color: #171617
    padding: 2rem
    border-radius: 5px
    box-shadow: 0px 0px 0px 2px black

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

  .project-overview
    overflow: hidden
    margin: 5rem 5rem
    display: flex
    justify-content: space-between
    flex-wrap: wrap

    h1
      margin-top: 0

    h3 + *
      margin-left: 1rem
</style>

<template>
  <article>
    <section class="project-overview">
      <img :src="getImg()" />
      <div class="left">
        <h1>{{ proj("name") }}</h1>
        <h2 class="brief">{{ proj("brief") }}</h2>
      </div>
      <div class="right">
        <div v-if="proj_e('collab')">
          <h3>{{ $t('projectcollab') }}</h3>
          <span>{{ proj('collab') }}</span>
        </div>
        <div v-if="proj_e('link')">
          <h3>{{ $t('projectlink') }}</h3>
          <a :href="proj('link')">{{ proj('link') }}</a>
        </div>
        <div v-if="proj_e('git')">
          <h3>{{ $t('projectgit') }}</h3>
          <a :href="proj('git')">{{ proj('git') }}</a>
        </div>
      </div>
    </section>
    <section class="project" v-html=getProjectContent()></section>
  </article>
</template>

<script>
  export default {
    methods: {
      getImg() {
        const projectid = this.$route.params.projectid
        return this.projects[projectid].img
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
