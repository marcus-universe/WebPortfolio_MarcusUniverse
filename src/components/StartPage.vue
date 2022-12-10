<template>
<section class="Start flex_c">

    <div class="HeadBox flex_c">
        <h1 v-if="lang.includes('de')">Willkommen in <br> <b>Marcus Universe</b></h1>
        <h1 v-if="!lang.includes('de')">Welcome to <br> <b>Marcus Universe</b></h1>

        <div
            class="playcontainer flex_c"
            @mouseover="focus()"
            @mouseleave="unfocus()"
            :class="{ 'activeplay': focusPlay }">

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

    <VideoBG :focusVid="focusPlay" />
</section>
</template>

<script>
// import rellax from 'rellax';
import VideoBG from './Ui/VideoBG.vue';

import {
    ref
} from 'vue';
import {
    useStore
} from 'vuex';

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
        lang() {
            return this.$store.state.lang;
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
    },

}
</script>

<style lang="scss">

</style>
