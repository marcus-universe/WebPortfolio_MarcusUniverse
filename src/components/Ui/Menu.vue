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
                class="flex_c flex_start" :alt="navitem.name">
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
<div class="langSelector">
    <transition name="langChange">
        <Logo v-if="selectedLang === 'de'" :icon="'de'" />
        </transition>

        <transition name="langChange">
            <Logo v-if="selectedLang === 'en'" :icon="'en'" />
        </transition>

   
    
    <select name="lang" id="lang" v-model="selectedLang">
        
        <option value="de">
           de 
        </option>
        <option value="en">
            en <Logo :icon="'en'" />
        </option>
    </select>
</div>
</template>

<script>
import Logo from '@/components/Ui/Logo.vue';
import { ref, watch } from 'vue';
import { useStore } from 'vuex';
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
    setup() {
        const selectedLang = ref('de');
        const store = useStore();

        function setDefaultLang () {
            if (store.state.lang.includes('de')) {
                selectedLang.value = 'de';
            } else {
                selectedLang.value = 'en';
            }
        } 
        setDefaultLang();

        watch (selectedLang, (val) => {
            store.state.lang = val;
        })

        return {
            selectedLang
        }
    },
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
