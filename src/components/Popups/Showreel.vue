<template>

</template>

<script>
import { ref } from 'vue'
export default {
    name: 'Videobox',
    setup() {
        const videoElement = ref(null)

        return {
            videoElement,
        }
    },
    

    props: {


    },
    computed: {
        navigation: function () {
            return this.$store.state.navigation;
        },
        OpenVideo: function () {
            return this.$store.state.OpenVideo;
        },
    },
}
</script>
