<template>
    <Menu v-if="error == false" />
<router-view v-slot="{Component}">
    <transition
        name="fade"
        mode="out-in">
        <component :is="Component" :key="$route.path" />
    </transition>
</router-view>


<Footer v-if="error == false" />
<!-- <p>
  Klicken Sie <a href="#" @click.prevent="disableTracking">hier</a>,
  um das Tracking durch Google Analytics zu deaktivieren.
</p> -->
</template>

<style lang="scss">
@import '@/sass/base.sass';
@import '@/sass/Pages/about.sass';
@import '@/sass/Pages/Impressum.sass';

@font-face {
  font-family: Assistant;
  src: url(./assets/fonts/Assistant/Assistant-VariableFont_wght.ttf) format("truetype");
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    right: 50%;
    transform: scale(1.1) translateY(0%) translateX(0%);
    
}
</style>

<script>
import Menu from '@/components/Ui/Menu.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'Marcus Universe Webportfolio',
    components: {
        Menu,
        Footer
    },
    methods: {
        disableTracking: function () {
            this.$ga.disable();
            alert('Tracking disabled');
        }
    },
    computed: {
        error() {
            return this.$store.state.error
        }
    }
}
</script>
