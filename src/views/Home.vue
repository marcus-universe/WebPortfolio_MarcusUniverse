<template>
<div class="HOME">

    <teleport to="head">
        <title>Marcus Universe Portfolio</title>

        <meta
            name="msapplication-TileColor"
            content="#3ee4ff">

        <meta
            name="theme-color"
            content="#3ee4ff">
        <meta
            property="og:title"
            content="Marcus Universe Portfolio">
        <meta property="title" name="title" content="Marcus Universe Portfolio">

        <meta
            property="og:description"
            content="Marcus Harting (alias Marcus Universe) Portfolio. Im an artist, musician and coder">
        <meta property="description" name="description"
            content="Marcus Harting (alias Marcus Universe) Portfolio. Im an artist, musician and coder">

        <meta
            property="og:image"
            content="./assets/img/me_profile.png">
    </teleport>

    <ErrorPage v-if="error == true" />

    <StartPage
        v-if="error == false"
        :title="title"
        :smallHeadline="smallHeadline"
        :hideHeadline="hideHeadline"
        :navlists="navigation.navlist"
        :currentIndex="currentselectedIndex" />
    <LetsExplore />

</div>
</template>

<script>
import StartPage from '../components/StartPage.vue'
import LetsExplore from '../components/LetsExplore.vue'
import ErrorPage from '../components/ErrorPage.vue'

// let root = document.documentElement;

export default {
    name: 'App',
    components: {
        StartPage,
        ErrorPage,
        LetsExplore
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
        }
    },
    mounted() {
        document.documentElement.style.setProperty('--color_p', '#3ee4ff');
        document.documentElement.style.setProperty('--color_bg', '35, 45, 66');
    }
}
</script>
