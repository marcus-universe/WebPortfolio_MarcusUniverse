<template>
<section class="Start">
    <div class="HeadlineBox rellax" data-rellax-speed="3.5" data-rellax-mobile-speed="3.5" data-rellax-desktop-speed="7">
        
        
        <h1 class="Headline">I {{navlists[currentIndex].subDo}}
            <br>
            <b :class="{smallerHeadline: smallHeadline, hideHeadline: hideHeadline}">{{title}}</b>
        </h1>


        <div class="playcontainer">

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

    </div>

    <Showreel
        class="Showreelbox"
        :class="{activeShowreel: OpenVideo}"
        @click="OpenVideo = false" 
        :currentIndex="currentIndex"
        :navlists="navlists"
        />
    <!-- <div class="ContentBox"></div> -->
<!-- <canvas class="pointcloud" ref="pointcloud"></canvas> -->
</section>
</template>

<script>

import Showreel from './Popups/Showreel.vue';
import rellax from 'rellax';
// import { ref } from 'vue3-lottie/dist/vue3-lottie.ssr';

export default {
    name: 'StartPage',
    data() {
        return {
            OpenVideo: false,
            // currentIndexSelected: currentIndex,
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
    //     var pointcloud = this.$refs.pointcloud
    //     pointcloud.width = window.innerWidth;
    //     pointcloud.height = window.innerHeight;
    //     var c = pointcloud.getContext('2d')
        
    //     var lastposition = [100, 100]
    //   for (var i = 0; i < 100; i++) {
    //       var x = Math.random() * (window.innerWidth - 200) + 100;
    //     var y = Math.random() * (window.innerHeight - 200) + 100;
    //     var radius =  Math.random() * (30 - 3) + 3;
    //     c.beginPath();
    //     c.arc(x, y, radius, 0, 2 * Math.PI, false)
    //     c.fillStyle = 'rgba(238, 238, 238, 1)'
    //     c.fill();
    //     c.beginPath();
    //     c.moveTo(lastposition[0], lastposition[1])
    //     c.lineTo(x, y)
    //     c.lineWidth = 5
    //     c.strokeStyle = 'rgba(238, 238, 238, 1)'
    //     c.stroke();
    //     lastposition = [x,y]
    //   }
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
        }
    },
    components: {
        Showreel
    },

}
</script>

<style lang="scss">
@import '../sass/pages/startpage.sass';
</style>
