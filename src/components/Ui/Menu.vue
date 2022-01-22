<template>
<nav class="flex_c_h">
    <ul class="flex_c_h">
        <li
            v-for="(navitem, index ) in navlists"
            :key="index"
            :class="{activeNav: navitem.selected}"
            v-on:click="selectNav({navitem})">
            {{navitem.name}}
        </li>
    </ul>
</nav>
</template>

<script>
export default {
    name: 'Menu',
    props: {
        navlists: {
            type: Array,
            required: true
        }
    },
    methods: {
        selectNav: function (navitem){
            this.navlists.forEach(function (navitem) {
                navitem.selected = false;
            });
            navitem.navitem.selected = true;
            this.$emit('ChangeNav');
        }
    }
}
</script>

<style lang="scss">
@import '../../sass/menu.sass';
</style>
