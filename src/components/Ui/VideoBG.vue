<template>
    <div class="videoBG flex_c" :class="{ 'focusActive': focusVid }">
        <video autoplay allow="autoplay" muted ref="startvideo" loop>
            <source src="@/assets/video/LoopStart.webm" type="video/webm" />
            <source src="@/assets/video/LoopStart.mp4" type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
        </video>
    </div>
</template>
<script>
export default {
    name: 'VideoBG',
    props: {
        focusVid: {
            type: Boolean,
            required: true
        }
    }

    
}
</script>
<style lang="">
    
</style>