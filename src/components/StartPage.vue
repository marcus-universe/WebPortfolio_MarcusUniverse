<template>
<section class="Start flex_c">

        <div class="playcontainer flex_c" @mouseover="focus()" @mouseleave="unfocus()" :class="{ 'activeplay': focusPlay }">

            <Vue3Lottie
                class="playbutton"
                ref="playButton"
                :animationData="require('../assets/lotties/play.json')"
                :loop="false"
                :autoPlay="false"
                :speed="1"
                :pauseAnimation="true"
                direction="reverse"
                v-on:mouseover="hoverPlay"
                v-on:mouseleave="leavePlay"
                @click="OpenVideoBox" />

        </div>

        <VideoBG :focusVid="focusPlay"/>

 

    <Showreel
        class="Showreelbox rellax" data-rellax-speed="3.5" data-rellax-mobile-speed="3.5" data-rellax-desktop-speed="7"
        :class="{activeShowreel: OpenVideo}"
        @click="OpenVideo = false" 
        :navlists="navlists"
        />
    <!-- <div class="ContentBox"></div> -->
<!-- <canvas class="pointcloud" ref="pointcloud"></canvas> -->
</section>
</template>

<script>

import Showreel from './Popups/Showreel.vue';
import rellax from 'rellax';
import VideoBG from './Ui/VideoBG.vue';
// import { ref } from 'vue3-lottie/dist/vue3-lottie.ssr';

export default {
    name: 'StartPage',
    data() {
        return {
            OpenVideo: false,
            focusPlay: false,
            // navlistsElement: navlists,
        }
    },
    props: {
        title: {
            type: String,
            required: true
        },
        smallHeadline: {
            type: Boolean,
            required: true
        },
        hideHeadline: {
            type: Boolean,
            required: true
        },
        currentIndex: {
            type: Number,
            required: true
        },
        navlists: {
            type: Array,
            required: true
        }

    },
    mounted() {
        new rellax('.rellax', {
                breakpoints: [640, 1280, 1600]
            // wrapper: '.rellax-wrapper',
            // center: true,
            // horizontal: true
        });
    },
    
    methods: {
        hoverPlay: function () {
            this.$refs['playButton'].setDirection("forward");
            this.$refs['playButton'].play();
        },
        leavePlay: function () {
            this.$refs['playButton'].setDirection("reverse");
            this.$refs['playButton'].play();
        },
        OpenVideoBox: function () {
            this.OpenVideo = true;
        },
        focus() {
            this.focusPlay = true;
        },
        unfocus() {
            this.focusPlay = false;
        }
    },
    components: {
        Showreel,
        VideoBG
    },

}
</script>

<style lang="scss">

</style>
