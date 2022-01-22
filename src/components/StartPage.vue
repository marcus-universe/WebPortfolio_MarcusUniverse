<template>

<section class="Start">
  <h1 class="Headline">I think
  <br>
    <b :class="{smallerHeadline: smallHeadline}">{{title}}</b> 
  </h1>
  
</section>
</template>

<script>



export default {
  name: 'StartPage',
  props: {
    title: {
      type: String,
      required: true
    },
    smallHeadline:{
      type: Boolean,
      required: true
    }
  },
  methods: {
  }
  
}
</script>


<style lang="scss">
  @import '../sass/pages/startpage.sass';
  

</style>