<template>
<div class="HOME">

    <teleport to="head">
        <title>Marcus Universe Portfolio</title>

  <meta name="msapplication-TileColor" :content="color_p[currentselectedIndex]">

        <meta
            name="theme-color"
            :content="color_p[currentselectedIndex]">
        <meta
            property="og:title"
            content="Marcus Universe Portfolio">

        <meta
            property="og:description"
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

    <About
        v-if="error == false"
        :currentIndex="currentselectedIndex" />

    <LetsTalk v-if="error == false" />

    
</div>
</template>

<style lang="scss">
@import '../sass/base.sass';
</style>

<script>

// import Menu from '../components/Ui/Menu.vue'
import StartPage from '../components/StartPage.vue'
import About from '../components/About.vue'
import LetsTalk from '../components/LetsTalk.vue'
import ErrorPage from '../components/ErrorPage.vue'
// import Footer from '../components/Footer.vue'
// let root = document.documentElement;

export default {
    name: 'App',
    components: {
        StartPage,
        About,
        LetsTalk,
        ErrorPage,
    },

    setup() {

    },

    data() {
        return {
            title: "3D",
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
    methods: {},
}
</script>
