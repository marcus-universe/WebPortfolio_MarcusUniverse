<template>
<ul class="flex_c_h">
    <li v-for="(navitem, index) in navlists" :key="index">
        <a :href="navitem.link">{{navitem.name}}</a>
    </li>
</ul>
</template>

<script>
export default {
    name: 'Menu',
    props: {
        navlists: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss">
@import '../sass/menu.sass';
</style>
