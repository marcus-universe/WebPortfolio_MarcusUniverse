<template>
<div class="MoreWorks flex_c_h">
    <div class="MoreWorks__container gap2 flex_c">
        <div class="MoreWorks__container__title">
            <h2 v-if="lang.includes('de')">Du willst mehr sehen?</h2>
            <h2 v-if="!lang.includes('de')">Wanna see more?</h2>
        </div>
        <div ref="ShowElement" class="flex_c_h gap2 MoreWorkIconContainer" :class="[{ 'show': isVisible }]">
            <a class="flex_c" target="_blank" href="https://github.com/marcus-universe">
                <Logo :icon="'github'" />
                Github
            </a>
            <a class="flex_c" target="_blank" href="https://www.artstation.com/marcusharting">
                <Logo :icon="'artstation'" />
                Artstation
            </a>
            <a class="flex_c" target="_blank" href="https://open.spotify.com/artist/0bDs1T3bM2eIwv1Yo5EvuY?si=F945nqOsQmC-Khm8LNmlwQ">
                <Logo :icon="'spotify'" />
                Spotify
            </a>

        </div>
    </div>
    <Logo
        :icon="'spaceclouds'"
        class="SpaceClouds" />

</div>
</template>

<script>
import Logo from '@/components/Ui/Logo.vue'
import { useElementVisibility } from '@vueuse/core'
import { ref } from 'vue'
export default {
    name: 'MoreWorks',
    setup() {
        const ShowElement = ref(null)
        const isVisible = useElementVisibility(ShowElement)
        return {
            ShowElement,
            isVisible
        }
    },
    components: {
        Logo
    },
    computed: {
        lang() {
            return this.$store.state.lang
        }
    },

}
</script>

<style lang="">

</style>
