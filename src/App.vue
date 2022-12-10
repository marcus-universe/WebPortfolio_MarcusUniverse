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


<LetsTalk />
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
@import '@/sass/Pages/startpage.sass';
@import '@/sass/socialMedia.sass';
@import '@/sass/Pages/about.sass';
@import '@/sass/Pages/explore.sass';
@import '@/sass/Pages/impressum.sass';
@import '@/sass/Pages/footer.sass';
</style>

<script>
import { ref, watch, defineAsyncComponent } from 'vue'
const Menu = defineAsyncComponent(() => import('@/components/Ui/Menu.vue'))
const LetsTalk = defineAsyncComponent(() => import('@/components/LetsTalk.vue'))
const Footer = defineAsyncComponent(() => import('@/components/Footer.vue'))
import { useBreakpoints, useWindowSize, useMouse } from '@vueuse/core'
import { useStore } from 'vuex'
import { useNavigatorLanguage } from '@vueuse/core'



export default {
    name: 'Marcus Universe Webportfolio',
    components: {
        Menu,
        Footer,
        LetsTalk
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
        const store = useStore()
        const transBG = ref(null)
        const { width } = useWindowSize()
        const { sourceType } = useMouse()
        const { language } = useNavigatorLanguage()
        store.commit('setLang', language)
        watch(language, (value) => {
            store.commit('setLang', value)
        })

        console.log(store.state.lang)
        const breakpoints = useBreakpoints({
            phone: 640,
            tablet: 1280,
            desktop: 1600,
        })

        function checkScreenSize(value) {
            if (value < 640) {
                store.dispatch('changeScreen', 'phone')
            }
            else if (value < 1280) {
                store.dispatch('changeScreen', 'tablet')
            }
            else if (value < 1600) {
                store.dispatch('changeScreen', 'desktop')
            }
        }
        checkScreenSize(width.value)

        function checkMouse(sourceType ) {
            store.dispatch('changeMouseSource', sourceType)   
        }
        checkMouse(sourceType.value)

        watch(sourceType, (value) => {
            checkMouse(value)
        })

        //add a watcher to the breakpoints and add the current breakpoint to store.state.screen
        watch(width, (value) => {
            checkScreenSize(value)
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
