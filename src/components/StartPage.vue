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

        <Showreel v-if="OpenVideo"/>

<!-- <div class="Videobox Showreelbox"
        v-show="OpenVideo">
    <video ref="videoElement" class="VideoContent" poster="@/assets/thumbnail/thumbnail3d.jpg" controls>
        <source src="@/assets/video/MarcusUniverseShowreel2022.mp4" type="video/mp4">
    </video>
</div> -->
    <!-- <div class="ContentBox"></div> -->
<!-- <canvas class="pointcloud" ref="pointcloud"></canvas> -->
</section>
</template>

<script>
// import rellax from 'rellax';
import VideoBG from './Ui/VideoBG.vue';

import { ref, defineAsyncComponent } from 'vue';
import { useStore } from 'vuex';

const Showreel = defineAsyncComponent(() => import('@/components/Popups/Showreel.vue'));

// import { ref } from 'vue3-lottie/dist/vue3-lottie.ssr';

export default {
    name: 'StartPage',
    data() {
        return {
            focusPlay: false,
            // navlistsElement: navlists,
        }
    },
    props: {
        title: {
            type: String,
            required: true
        },

    },
   
    computed: {
        OpenVideo () {
            return this.$store.state.OpenVideo;
        },
    },
    setup() {
        const videoElement = ref(null)
        const store = useStore()

        function CloseVideoBox() {
            store.commit('setVideo', false);
            videoElement.value.pause();
            videoElement.value.currentTime = 0;
        }

        function OpenVideoBox() {
            store.commit('setVideo', true);
        }

        return {
            videoElement,
            CloseVideoBox,
            OpenVideoBox
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
        focus() {
            this.focusPlay = true;
        },
        unfocus() {
            this.focusPlay = false;
        }
    },
    components: {
        VideoBG,
        Showreel
    },

}
</script>

<style lang="scss">

</style>
