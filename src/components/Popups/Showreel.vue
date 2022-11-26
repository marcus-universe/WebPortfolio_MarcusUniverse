<template>
 <div class="Videobox Showreelbox">
    <video ref="videoElement" class="VideoContent" poster="@/assets/thumbnail/thumbnail3d.jpg" controls>
        <source src="@/assets/video/MarcusUniverseShowreel2022.mp4" type="video/mp4">
    </video>
 </div>
</template>

<script>
import { ref, watch, computed } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useStore } from 'vuex';
export default {
    name: 'Videobox',
    setup() {
        const videoElement = ref(null)
        const store = useStore()
        const OpenVideo = computed(() => store.state.OpenVideo)

        onClickOutside(videoElement, () => {
            CloseVideoBox();
        })

        function CloseVideoBox() {
            store.commit('setVideo', false);
            videoElement.value.pause();
            videoElement.value.currentTime = 0;
        }

        watch(OpenVideo, (value) => {
            if (value) {
                if (videoElement.value.mozRequestFullScreen) {
                    videoElement.value.mozRequestFullScreen();
                } else if (videoElement.value.webkitRequestFullScreen) {
                    videoElement.value.webkitRequestFullScreen();
                }
                videoElement.value.volume = 0.5
                videoElement.value.play();
            } else {
                videoElement.value.pause();
                videoElement.value.currentTime = 0;
            }
        })

        return {
            videoElement,
            CloseVideoBox,
        }
    },
    mounted() {
        var video = this.videoElement;
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
}
</script>
