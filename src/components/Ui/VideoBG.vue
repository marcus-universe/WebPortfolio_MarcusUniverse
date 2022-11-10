<template>
    <div class="videoBG flex_c" :class="{ 'focusActive': focusVid }">
        <video v-if="!videoSwitch" autoplay @ended="StartVideo()" allow="autoplay" muted ref="startvideo">
            <source src="@/assets/video/Start.webm" type="video/webm" />
            <source src="@/assets/video/Start.mp4" type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
        </video>
    
        <video v-show="videoSwitch" loop muted ref="loopvideo">
            <source src="@/assets/video/Loop.webm" type="video/webm" />
            <source src="@/assets/video/Loop.mp4" type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
        </video>

    </div>
</template>
<script>
import { ref } from 'vue'
export default {
    name: 'VideoBG',
    props: {
        focusVid: {
            type: Boolean,
            required: true
        }
    },
    setup() {
        const videoSwitch = ref(false)
        const startvideo = ref(null)
        const loopvideo = ref(null)

        return {
            videoSwitch,
            startvideo,
            loopvideo,
        }
        
    },
    methods: {
        StartVideo() {
            var self = this
            self.videoSwitch = true
            try {
                if (self.$refs.loopvideo !== null) {
                    self.$refs.loopvideo.currentTime = 0
                    self.$refs.loopvideo.play()
                    }
            } catch (error) {
                console.log(error)
            }
            
        },
    }

    
}
</script>
<style lang="">
    
</style>