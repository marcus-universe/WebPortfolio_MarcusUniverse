<template>
<div class="logo">
    <Vue3Lottie
    ref="logo"
    :animationData="require('../../assets/lotties/logo.json')"
    :loop="false"
    :autoPlay="false"
    :speed="1"
    :pauseAnimation="true"
    direction="reverse"
    v-on:mouseover="hoverLogo"
    v-on:mouseleave="leaveLogo"
    

     />
</div>

</template>

<script>


export default {
    components: {

    },
    methods: {
        stopLogo: function(){
            this.$refs.logo.stop();
        },

        hoverLogo: function () {
            this.$refs['logo'].setDirection("forward");
            this.$refs['logo'].play();
        },

        leaveLogo: function () {
            this.$refs['logo'].setDirection("reverse");
            this.$refs['logo'].play();
        }
    }
    
    
}
</script>
