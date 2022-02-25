<template>
<section class="About">
    <h1 class="Headline AboutTitle">Who am I

    </h1>
    <img src="../assets/img/me_profile.png" alt="profile_picture" class="profile_img">
    <div class="centerText">

        <transition
            name="fade"
            mode="out-in">

            <ThreeDAboutDE
                v-if="currentIndex == 0"
                key="1" />
            <MusicAboutDE
                key="2"
                v-else-if="currentIndex == 1" />
            <CodeAboutDE
                key="3"
                v-else-if="currentIndex == 2" />
        </transition>

    </div>
    <div class="rellax-wrapper">
        <div
            class="polyloop rellax"
            data-rellax-speed="3.5">

            <Vue3Lottie
                ref="anim"
                :animationData="require('../assets/lotties/polyloop.json')"
                :loop="true"
                :autoPlay="false"
                :speed="1"
                direction="alternate" />

        </div>

        <div
            class="polyloop SecondPoly rellax"
            data-rellax-speed="3.5">

            <Vue3Lottie
                ref="polytwo"
                :animationData="require('../assets/lotties/polyloop.json')"
                :loop="true"
                :autoPlay="false"
                :speed="0.9"
                direction="alternate" />
                />

        </div>
    </div>

</section>
</template>

<style lang="scss">
@import '../sass/Pages/about.sass';
</style>

<script>
import Vue3Lottie from 'vue3-lottie';
import rellax from 'rellax';
import {
    ThreeDAboutDE,
    CodeAboutDE,
    MusicAboutDE,
} from './AboutContent/German';

export default {
    name: 'About',
    components: {
        Vue3Lottie,
        ThreeDAboutDE,
        CodeAboutDE,
        MusicAboutDE,
    },
    props: {
        currentIndex: {
            type: Number,
            required: true
        }
    },
    data() {
        return {

        }
    },
    methods: {
      
    },
    mounted() {
        // var polytwo = this.$refs.polytwo;
        // polytwo.goToAndPlay(1000, true);

        new rellax('.rellax', {
            breakpoints: [640, 1280, 1600]
            // wrapper: '.rellax-wrapper',
            // center: true,
            // horizontal: true
        });
    },

}
</script>
