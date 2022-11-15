<template lang="en">
    <div v-if="lang.includes('de')" class="flex_c alignSelf flexInline LetsExploreContainer">

        <div class="flex_c gap1 letsexploreItems">
            <h2>Entdecke meine <em>Kreationen</em></h2>
            <p>Schau dir meine eye candy Werke an, die ich über die Jahre in der Uni, im Job und in meiner Freizeit erstellt
                habe.</p>
            <CAButton
                @click="goExplore"
                class="marginTopButton">
                Entdecke
            </CAButton>
        </div>
        <div class="bglayer"></div>

    </div>

    <div v-if="!lang.includes('de')" class="flex_c alignSelf flexInline LetsExploreContainer">
        <div class="flex_c gap1 letsexploreItems">
            <h2>Explore my <em>creations</em></h2>
            <p>Look at my eye candy works which I have created over the years in university, work and spare time.</p>
            <CAButton
                @click="goExplore"
                class="marginTopButton">
                Explore
            </CAButton>
        </div>
        <div class="bglayer"></div>
    </div>
</template>

<script>
import CAButton from '@/components/Ui/CAButton.vue'
export default {
    components: {
        CAButton
    },
    methods: {
        goExplore() {
            this.$router.push('/explore')
        }
    },
    computed: {
        lang() {
            return this.$store.state.lang
        }
    }

}
</script>

<style lang="">

</style>
