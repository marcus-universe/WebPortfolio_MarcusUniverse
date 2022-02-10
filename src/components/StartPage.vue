<template>
<section class="Start">
    <div class="HeadlineBox">
        <h1 class="Headline">I think
            <br>
            <b :class="{smallerHeadline: smallHeadline, hideHeadline: hideHeadline}">{{title}}</b>
        </h1>

    </div>

    <!-- <div class="ContentBox"></div> -->

</section>
</template>

<script>
export default {
    name: 'StartPage',
    props: {
        title: {
            type: String,
            required: true
        },
        smallHeadline: {
            type: Boolean,
            required: true
        },
        hideHeadline: {
            type: Boolean,
            required: true
        }
    },
    methods: {}

}
</script>

<style lang="scss">
@import '../sass/pages/startpage.sass';
</style>
