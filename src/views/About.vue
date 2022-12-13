<template>
<div class="Section">
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
