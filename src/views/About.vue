<template>
<div class="Section">
    <teleport to="head">
        <title>About Me</title>

        <!-- <meta
     name="msapplication-TileColor"
     :content="color_p[currentselectedIndex]"> -->

        <!-- <meta
     name="theme-color"
     :content="color_p[currentselectedIndex]"> -->

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

    <About />
</div>
</template>

<script>
import About from '@/components/About.vue'
export default {
    components: {
        About
    },
    mounted() {
        document.documentElement.style.setProperty('--color_p', '#a25aff');
        document.documentElement.style.setProperty('--color_bg', '57, 35, 66');
    }

}
</script>

<style>

</style>
