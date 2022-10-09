<template>
<div class="Videobox">
    <div class="Video">
        <h3 v-if="currentIndex == 4"> Showreel in making ...</h3>
        <p v-if="currentIndex != 0 || videoOneActive == false"> <span v-if="currentIndex == 4"> Here if you can't wait: </span>
<br v-if="currentIndex == 4">
<br v-if="currentIndex == 4">
            <a :href="navigation.navlist[currentIndex].link" target="_blank" rel="noopener noreferrer">
                <img 
            :src="require('@/assets/' + navigation.navlist[currentIndex].iconlink + '.svg')" 
            :alt="navigation.navlist[currentIndex].linkTitle" />
            <br>
            {{navigation.navlist[currentIndex].linkTitle}}
            </a>
            
            
            </p>

        <video ref="video1" v-if="currentIndex == 0 && videoOneActive == true" class="VideoContent" poster="../../assets/thumbnail/thumbnail3d.jpg" controls>
            <source
                src="../../assets/video/video_1.mp4"
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
        currentIndex: {
            type: Number,
            required: true
        },


    },
    computed: {
        navigation: function () {
            return this.$store.state.navigation;
        },
    },
}
</script>
