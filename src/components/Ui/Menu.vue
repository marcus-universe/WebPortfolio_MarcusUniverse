<template>
<nav
    id="Menu"
    ref="nav"
    @mouseover="HoverNav = true"
    @mouseleave="HoverNav = false"
    :class="[{ activeNav: HoverNav && mouseSource === 'mouse' }]">
    <ul class="flex_c_h">

        <li
            v-for="(navitem, index ) in navlists"
            :key="index"
            class="flex_c"
            :class="[{ activeMenuName: currentRouteName === navitem.name }]">
            <router-link
                :to=" '/' + navitem.link"
                :class="[{activeMenu: currentRouteName === navitem.name}]"
                @click="$emit('transitionbgAction', navitem.link)"
                class="flex_c flex_start">
                <Logo
                    :icon="navitem.icon"
                    :navname="navitem.name" />
                <transition name="navfade">
                    <div
                        class="nameNav"
                        v-show="HoverNav && mouseSource === 'mouse'">{{navitem.name}}</div>
                </transition>
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
    data() {
        return {
            HoverNav: false,
        }
    },
    emits: ['transitionbgAction'],
    computed: {
        navlists() {
            return this.$store.state.navigation.navlist
        },
        currentRouteName() {
            return this.$route.name;
        },
        screen() {
            return this.$store.state.screen
        },
        isDesktop() {
            return this.$store.getters.isDesktop
        },
        mouseSource() {
            return this.$store.state.mouseSource
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
