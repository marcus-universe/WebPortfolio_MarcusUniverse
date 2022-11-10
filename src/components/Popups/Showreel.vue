<template>
<div class="Videobox">
    <div class="Video">


        <video ref="video1" v-if="videoOneActive == true" class="VideoContent" poster="@/assets/thumbnail/thumbnail3d.jpg" controls>
            <source
                src="@/assets/video/video_1.mp4"
                type="video/mp4">
        </video>
    </div>
</div>
</template>

<script>
export default {
    name: 'Videobox',
    data() {
        return {
            videoOneActive: true,
        }
    },
    mounted() {

        var video1 = this.$refs.video1;
        var thisvar = this;

        // if (this.currentIndex == 0) {
        //         thisvar.videoOneActive = true;
        //     } else {
        //         thisvar.videoOneActive = false;
        //     }

        if (video1 != null) {
            // this is the local scope
            video1.addEventListener('ended', function () {
                // this.currentTime = 0;
                // this.play();
                thisvar.videoOneActive = false;
                console.log('video ended');
            }, false);
        }
    },

    props: {


    },
    computed: {
        navigation: function () {
            return this.$store.state.navigation;
        },
    },
}
</script>
