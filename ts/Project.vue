<style lang="sass">
  .project
    font-size: 1.5rem
    font-family: serif

    img
      width: 100%

    strong
      font-weight: bolder
      color: white

    .img-desc
      font-style: italic
      font-size: 1rem
      margin-left: 2rem
      margin-bottom: 1rem
</style>

<template>
  <div>
    <h1>{{ proj("name") }}</h1>
    <div class='project' v-html=getProjectContent()></div>
  </div>
</template>

<script>
  import moncraft_fr from "bundle-text:../projects/moncraft/fr.pug"


  export default {
    props: [ 'projectid' ],
    methods: {
      proj(attr) {
        return this.$t('projects.' + this.$route.params.projectid + '.' + attr)
      },
      getProjectContent() {
        const lang = this.$i18n.locale
        const projectid = this.$route.params.projectid
        const project = this.projects[projectid]
        if(project === undefined) return this.proj('desc')
        else return project[lang] || project['en'] || Object.values(project)[0]
      }
    },
    data() {
      return {
        projects: {
          moncraft: {
            fr: moncraft_fr
          }
        }
      }
    },
  }
</script>
