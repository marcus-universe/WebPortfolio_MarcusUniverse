<template>
    <div class="FormSubmit flex_c gap2">
        <h1 v-if="lang.includes('de')">Marcus Universe hat <br v-if="screen !== 'phone'">deine Nachricht erhalten</h1>
        <h1 v-if="!lang.includes('de')">Marcus Universe <br v-if="screen !== 'phone'"> received your Message</h1>
        <p v-if="!lang.includes('de')">
            Marcus Universe received your Message. Be patient until you get an answer. The universe is very big and messages take time to get to you at the speed of light.
        </p>
        <p v-if="lang.includes('de')">
            Marcus Universe hat deine Nachricht erhalten. Hab etwas Geduld, bis du eine Antwort bekommt. Das Universum ist sehr groß und Nachrichten brauchen Zeit, um dich mit Lichtgeschwindigkeit zu erreichen.
        </p>
        <CAButton @click="goHome" class="p1" >Go Home</CAButton>

        <Logo :icon="'spaceclouds'" class="SpaceClouds" />
    </div>
</template>
<script>
import Logo from '@/components/Ui/Logo.vue'
import CAButton from '@/components/Ui/CAButton.vue'
export default {
    computed: {
        lang() {
            return this.$store.state.lang;
        },
        screen() {
            return this.$store.state.screen;
        }
    },
    components: {
        Logo,
        CAButton
    },
    methods: {
        goHome() {
            this.$router.push('/')
        }
    }
    
}
</script>
<style lang="">
    
</style>