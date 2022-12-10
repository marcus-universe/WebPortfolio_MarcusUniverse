<template>
<div class="Impressum">

    <teleport to="head">
        <title>Impressum</title>

        <meta
            property="og:title"
            content="Marcus Universe Impressum">

        <meta
            property="og:description"
            content="Marcus Harting (alias Marcus Universe) Portfolio. Im an artist, musician and coder">

        <meta
            property="og:image"
            content="./assets/img/me_profile.png">
    </teleport>
<ImpressumDE v-if="lang.includes('de')"/>
<ImpressumEN v-if="!lang.includes('de')"/>


</div>
</template>

<style lang="sass">

</style>

<script>
import { defineAsyncComponent } from 'vue';
const ImpressumDE = defineAsyncComponent(() => import('@/components/Impressum/ImpressumDE.vue'));
const ImpressumEN = defineAsyncComponent(() => import('@/components/Impressum/ImpressumEN.vue'));
export default {
    name: 'Impressum',
    components: {
        ImpressumDE,
        ImpressumEN
    },
    computed: {
        lang() {
            return this.$store.state.lang
        }
    }
}
</script>
