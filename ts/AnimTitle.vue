<style lang="sass">
  h1
    font-size: 4rem


    > span
      position: relative

      > span
        opacity: .2

      > div
        position: absolute
        top: 0
        left: 0
        width: .1em
        height: 100%
        background: #0b715e
</style>

<template>
    <h1>
      <span ref="title1"></span>
      <span>
        <span ref="title2">{{ text }}</span>
        <div ref="cursor"></div>
      </span>
    </h1>
</template>

<script>
  import fr from "../i18n/fr.yaml"
  import en from "../i18n/en.yaml"

  const lang = fr

  export default {
    data() {
      return {
        titleInterval: 0
      }
    },
    props: [ "text" ],

    mounted() {
      let blinkCount = 4;
      let blinkInterval = 500;
      let typeInterval = 100;

      const t1 = this.$refs.title1;
      const t2 = this.$refs.title2;
      const cur = this.$refs.cursor;
      const text = this.text;

      this.titleInterval = setInterval(() => {
        cur.style.visibility = cur.style.visibility === "visible" ? "hidden" : "visible";
      }, blinkInterval);

      let index = 0;

      setTimeout(() => {
        cur.style.visibility = "visible";
        clearInterval(this.titleInterval);
        this.titleInterval = setInterval(() => {
          index++;
          t1.innerHTML = text.substring(0, index);
          t2.innerHTML = text.substring(index, text.length);
          if(index >= text.length) {
            cur.style.visibility = "hidden";
            clearInterval(this.titleInterval);
            this.titleInterval = setInterval(() => {
              cur.style.visibility = cur.style.visibility === "visible" ? "hidden" : "visible";
            }, blinkInterval);
          }
        }, typeInterval);
      }, blinkInterval * blinkCount);
    },

    beforeUnmount() {
      clearInterval(this.titleInterval);
    }
  }
</script>
