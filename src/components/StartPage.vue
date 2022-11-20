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

<div class="Videobox Showreelbox"
        v-show="OpenVideo"
        :navlists="navlists">
    <video ref="videoElement" class="VideoContent" poster="@/assets/thumbnail/thumbnail3d.jpg" controls>
        <source src="@/assets/video/video_1.mp4" type="video/mp4">
    </video>
</div>
    <!-- <div class="ContentBox"></div> -->
<!-- <canvas class="pointcloud" ref="pointcloud"></canvas> -->
</section>
</template>

<script>
// import rellax from 'rellax';
import VideoBG from './Ui/VideoBG.vue';
import { ref } from 'vue';
import { useStore } from 'vuex';
import { onClickOutside } from '@vueuse/core'


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
        var video = this.$refs.videoElement;
        var self = this;

        if (video != null) {
            video.addEventListener('ended', function () {
                self.$store.commit('setVideo', false);
                if (video.exitFullscreen)
                    video.exitFullscreen();
                else if (video.webkitExitFullscreen)
                    video.webkitExitFullscreen();
                else if (video.mozCancelFullScreen)
                    video.mozCancelFullScreen();
                else if (video.msExitFullscreen)
                    video.msExitFullscreen();
            }, false);


            video.addEventListener('fullscreenchange', (event) => { 
                console.log('fullscreenchange', event);
            });
        }
    },
    computed: {
        OpenVideo () {
            return this.$store.state.OpenVideo;
        },
    },
    setup() {
        const videoElement = ref(null)
        const store = useStore()

        onClickOutside(videoElement, () => {
            CloseVideoBox();
        })

        function CloseVideoBox() {
            store.commit('setVideo', false);
            videoElement.value.pause();
            videoElement.value.currentTime = 0;
        }

        function OpenVideoBox() {
            store.commit('setVideo', true);
            if (videoElement.value.mozRequestFullScreen) {
                videoElement.value.mozRequestFullScreen();
            } else if (videoElement.value.webkitRequestFullScreen) {
                videoElement.value.webkitRequestFullScreen();
            }  
            videoElement.value.volume = 0.5
            videoElement.value.play();
           
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
        VideoBG
    },

}
</script>

<style lang="scss">

</style>
