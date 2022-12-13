<template>
<div class="HOME">

    <StartPage
        :title="title"
        :smallHeadline="smallHeadline"
        :hideHeadline="hideHeadline"
        :navlists="navigation.navlist"
        :currentIndex="currentselectedIndex" />

    <Showreel v-show="OpenVideo" />
    <LetsExplore />

</div>
</template>

<script>
import StartPage from '../components/StartPage.vue'
import LetsExplore from '../components/LetsExplore.vue'
import { defineAsyncComponent } from 'vue'
const Showreel = defineAsyncComponent(() => import(/* webpackChunkName: 'showreel' */ '@/components/Popups/Showreel.vue'));

export default {
    name: 'App',
    components: {
        StartPage,
        LetsExplore,
        Showreel
    },

    setup() {

    },

    data() {
        return {
            title: "Home",
            smallHeadline: false,
            currentselectedIndex: 0,
            hideHeadline: false,
        }
    },
    created() {
        // this.changeNav(0);
    },
    computed: {
        navigation() {
            return this.$store.state.navigation;
        },
        color_p() {
            return this.$store.state.color_p;
        },
        color_bg() {
            return this.$store.state.color_bg;
        },
        error() {
            return this.$store.state.error
        },
        OpenVideo() {
            return this.$store.state.OpenVideo;
        },
    },
    mounted() {
        document.documentElement.style.setProperty('--color_p', '#3ee4ff');
        document.documentElement.style.setProperty('--color_bg', '35, 45, 66');
    }
}
</script>
