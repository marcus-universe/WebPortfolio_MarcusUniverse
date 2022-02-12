<template>
<section class="About">
    <h1 class="Headline AboutTitle">Who am I

    </h1>

    <div class="centerText">
        <p class="Intro">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Ipsum maiores nobis quae dolores hic reiciendis iure assumenda
            distinctio facilis.
            Doloremque fugiat eius minus dolores enim expedita sunt
            quisquam exercitationem dicta.
        </p>

    </div>
<div class="polyloop">

    <Vue3Lottie
  ref="anim"
  :animationData="require('../assets/lotties/polyloop.json')"
  :loop="true"
  :autoPlay="false"
  :speed="1"
  direction="alternate"
/>

</div>


</section>
</template>

<style lang="scss">
@import '../sass/Pages/about.sass';
</style>

<script>

import Vue3Lottie from 'vue3-lottie';
export default {
    components: { 
        Vue3Lottie
    },
    
}
</script>
