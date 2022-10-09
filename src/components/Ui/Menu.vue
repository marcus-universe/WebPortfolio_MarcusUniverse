<template>
<nav
    id="Menu"
    ref="nav">
    <ul class="flex_c_h">

        <li
            v-for="(navitem, index ) in navlists"
            :key="index" class="flex_c">

            <a :href="'/' + navitem.link" :class="[{activeMenu: currentRouteName === navitem.name}]">
                <Logo :icon="navitem.icon" :navname="navitem.name"/>
            </a>
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
@import '../../sass/menu.sass';
</style>
