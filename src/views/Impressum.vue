<template>
<div class="Impressum">
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
