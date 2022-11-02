<template>
<nav
    id="Menu"
    ref="nav">
    <ul class="flex_c_h">

        <li
            v-for="(navitem, index ) in navlists"
            :key="index" class="flex_c">


            <router-link :to=" '/' + navitem.link" :class="[{activeMenu: currentRouteName === navitem.name}]" @click="$emit('transitionbgAction')" >
                <Logo :icon="navitem.icon" :navname="navitem.name" />
            </router-link>
        </li>
    </ul>
</nav>
</template>

<script>
import Logo from '@/components/Ui/Logo.vue';
export default {
    name: 'Menu',
    components: {
        Logo
    },
    emits: ['transitionbgAction'],
    computed: {
        navlists() {
            return this.$store.state.navigation.navlist
        },
        currentRouteName() {
            return this.$route.name;
        }
    },
    methods: {
        WindowResize: function () {
            this.NavElement = this.$refs.nav;
        },
    }
}
</script>

<style lang="scss">
    
</style>
