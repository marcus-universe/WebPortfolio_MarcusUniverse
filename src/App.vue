<template>
<Menu
    v-if="error == false"
    @transitionbgAction="playTransition" />

<router-view v-slot="{Component}">
    <div class="transitionbg flex_c">
        <Vue3Lottie
            ref="transitionBG"
            :animationData="require('@/assets/lotties/transitionbg.json')"
            :loop="false"
            :autoPlay="false"
            :speed="1"
            :width="'100vw'"
            :height="'1080px'"
            :pauseAnimation="false"
            direction="forward"
            :rendererSettings="{ preserveAspectRatio: 'xMinYMin slice' }"
            class="flex_c"
             />
    </div>

    <transition
        name="fade"
        mode="out-in">
        <component
            :is="Component"
            :key="$route.path" />
    </transition>
</router-view>

<Footer v-if="error == false" />
<!-- <p>
  Klicken Sie <a href="#" @click.prevent="disableTracking">hier</a>,
  um das Tracking durch Google Analytics zu deaktivieren.
</p> -->
</template>

<style lang="scss" >
// @import "@/sass/_variables.sass";
@import "@/sass/_base.sass";
@import '@/sass/menu.sass';
@import '@/sass/pages/startpage.sass';
@import '@/sass/socialMedia.sass';
@import '@/sass/Pages/about.sass';
@import '@/sass/Pages/explore.sass';
@import '@/sass/Pages/Impressum.sass';
@import '@/sass/Pages/footer.sass';
</style>

<script>
import Menu from '@/components/Ui/Menu.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'Marcus Universe Webportfolio',
    components: {
        Menu,
        Footer
    },
    methods: {
        disableTracking: function () {
            this.$ga.disable();
            alert('Tracking disabled');
        },
        playTransition: function () {
            this.$refs['transitionBG'].stop();
            this.$refs['transitionBG'].play();
        }
    },
    computed: {
        error() {
            return this.$store.state.error
        }
    }
}
</script>
