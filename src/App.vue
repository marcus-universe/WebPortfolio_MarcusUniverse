<template>
<Menu
    v-if="error == false"
    @transitionbgAction="playTransition" />

        <div class="transitionbg flex_c" ref="transBG">
            <Vue3Lottie ref="transitionBG" v-show="checkTransitonState()"
                :animationData="require('@/assets/lotties/transition.json')" :loop="1" :autoPlay="false" :speed="1"
                :width="'100vw'" :height="'100vh'" :pauseAnimation="false" direction="forward"
                :rendererSettings="{ preserveAspectRatio: 'xMinYMin slice' }" class="flex_c"
                @onComplete="activeTransition = false" />
        </div>

<router-view v-slot="{Component}">
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
import { useBreakpoints, useWindowSize } from '@vueuse/core'
import { ref, } from 'vue'
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
            var self = this;
            if (self.Smartphone === false) {
                self.activeTransition = true
                self.$refs['transitionBG'].stop();
                self.$refs['transitionBG'].play();
            }
            
        },

        checkTransitonState: function () {
            var self = this;

            if (!self.Smartphone) {
                return self.activeTransition
            } else {
                return false
            }
            
            
        }
    },
    data() {
        return {
            activeTransition: false,
        }
    },
    computed: {
        error() {
            return this.$store.state.error
        },
        routeName() {
            return this.$route.path;
        }
    },
    setup() {
        const transBG = ref(null)
        const { width } = useWindowSize()
        
        const breakpoints = useBreakpoints({
            phone: 640,
            tablet: 1280,
            desktop: 1600,
        })
        const Smartphone = ref(breakpoints.smaller('phone'))
           

        // watch(breakpoints.smaller('phone'), () => {
        //     watch(width, (value) => {
        //         if (breakpoints.smaller('phone').value === true) {
        //             transBG.value.children[0].children[0].setAttribute("viewBox", `${value * 1.5}, 0, ${value}, 1080`)
        //         } else {
        //             transBG.value.children[0].children[0].setAttribute("viewBox", `0 0 1920 1080`)
        //         }
        //     })
        // })
        


        return {
            breakpoints,
            transBG,
            width,
            Smartphone
        }
    }
}
</script>
