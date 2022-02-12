<template>
<div class="Impressum">

    <router-link to="/">
        <Logo class="LogoImpressum" />
    </router-link>

    <h1>Impressum</h1>
</div>
</template>

<style lang="sass">
@import '../sass/base.sass'
@import '../sass/Pages/Impressum.sass'


</style>

<script>
import Logo from '../components/Ui/Logo.vue';

export default {
    name: 'Impressum',
    components: {
        Logo
    },
}
</script>
