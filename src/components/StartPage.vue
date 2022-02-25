<template>
<section class="Start">
    <div class="HeadlineBox">
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

</section>
</template>

<script>
import Vue3Lottie from 'vue3-lottie';
import Showreel from './Popups/Showreel.vue';

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
        Vue3Lottie,
        Showreel
    },

}
</script>

<style lang="scss">
@import '../sass/pages/startpage.sass';
</style>
