<template>
<nav
    id="Menu"
    :class="{stickyNav: navSticky}"
    ref="nav"
    >
    <ul class="flex_c_h">
        <li
            v-for="(navitem, index ) in navlists"
            :key="index"
            :class="{activeNav: navitem.selected}"
            v-on:click="selectNav(index, {navitem})">
            {{navitem.name}}
        </li>
    </ul>
</nav>
</template>

<script>
export default {
    name: 'Menu',
    data() {
        return {
            navSticky: false,
            NavElementPos: 0,
            NavElement: null,
        }
    },
    props: {
        navlists: {
            type: Array,
            required: true
        },
        selectedIndex: {
            type: Number,
            required: true
        },
       
    },

    created() {
    },

    mounted() {
        window.addEventListener('scroll', this.checkSticky);
        this.checkSticky;
        window.addEventListener('resize', this.WindowResize);
        this.NavElement = this.$refs.nav;
    },

    unmounted() {
        window.removeEventListener('scroll', this.checkSticky);
    },

    methods: {
        selectNav: function (index, navitem) {
            this.navlists.forEach(function (navitem) {
                navitem.selected = false;
            });
            navitem.navitem.selected = true;
            // this.selectedIndex = index;
            this.$emit('ChangeNav', index);
            
        },
        WindowResize: function () {
            this.NavElement = this.$refs.nav;
        },

        checkSticky: function () {
            // console.log({NavPos:this.NavElement.offsetTop,
            // Window:window.pageYOffset});
            if (window.pageYOffset >= this.NavElement.offsetTop) {
                this.navSticky = true;
            } else {
                this.navSticky = false;
            }
        }
    }
}
</script>

<style lang="scss">
@import '../../sass/menu.sass';
</style>
