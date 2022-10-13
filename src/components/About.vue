<template>
<section class="About">
    <h1 class="Headline AboutTitle">Who am I
    </h1>
    <img src="../assets/img/me_profile.jpg" alt="profile_picture" class="profile_img">
    <div class="centerText">

        <transition
            name="fade"
            mode="out-in">

            <ThreeDAboutDE
                v-if="currentIndex == 0"
                key="1"
                :showPolygon="showPoly" />
            <MusicAboutDE
                key="2"
                v-else-if="currentIndex == 1"
                :showPolygon="showPoly" />
            <CodeAboutDE
                key="3"
                v-else-if="currentIndex == 2"
                :showPolygon="showPoly" />
        </transition>

    </div>
    <div class="rellax-wrapper">
        <div
            v-if="showPoly == true"
            class="polyloop rellax"
            data-rellax-speed="3.5">

            <!-- <Vue3Lottie
                ref="anim"
                :animationData="PolyloopJSON"
                :loop="true"
                :autoPlay="false"
                :speed="1.3"
                direction="alternate" /> -->
       

        </div>

        <div
            class="polyloop SecondPoly rellax"
            data-rellax-speed="3.5">

            <!-- <Vue3Lottie
                class="flipAnimation"
                ref="polytwo"
                :animationData="PolyloopJSON"
                :loop="true"
                :autoPlay="false"
                :speed="1"
                direction="alternate" /> -->
       

        </div>
    </div>

</section>
</template>

<style lang="scss">

</style>

<script>
// import { Vue3Lottie } from 'vue3-lottie';
import rellax from 'rellax';
// import {
//     useWindowSize
// } from 'vue-window-size';
const PolyloopJSON = require('../assets/lotties/polyloopanim.json')

import {
    ThreeDAboutDE,
    CodeAboutDE,
    MusicAboutDE,
} from './AboutContent/German';

export default {
    name: 'About',
    components: {
        // Vue3Lottie,
        ThreeDAboutDE,
        CodeAboutDE,
        MusicAboutDE,
    },
    props: {
        currentIndex: {
            type: Number,
            default: 0,
            required: false
        }
    },
    data() {
        return {
            PolyloopJSON,
            showPoly: true,
        }
    },
    mounted() {
        new rellax('.rellax', {
            breakpoints: [640, 1280, 1600],
          
       
        });

        this.checkWindowSize();
        window.addEventListener('resize', this.checkWindowSize);

    },

    unmounted() {
        window.removeEventListener('resize', this.checkWindowSize);
        // var polytwo = this.$refs.polytwo;
        // polytwo.goToAndStop(0);
    },
    methods: {
        checkWindowSize() {
            var data = this
            if (document.documentElement.clientWidth < 640) {
                data.showPoly = false;

            } else {
                data.showPoly = true;
            }
            console.log(data.showPoly);
        }
    },

    setup() {
        // const {
        //     width,
        //     height
        // } = useWindowSize();
        // return {
        //     windowWidth: width,
        //     windowHeight: height,
        // };
    },

}
</script>
