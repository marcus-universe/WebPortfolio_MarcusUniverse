<template>
    <div class="Videobox">
        <div class="Video">
            <h3> Showreel in making ...</h3>
            <p>Here if you can't wait:
                <br>
                <a :href="navlists[currentIndex].link" target="_blank" rel="noopener noreferrer">{{navlists[currentIndex].linkTitle}}</a></p>

            <!-- <video class="VideoContent" autoplay loop>
                <source src="../../assets/videos/showreel.mp4" type="video/mp4">
            </video> -->
        </div>
    </div>


</template>



<script>
export default {
    props: {
        currentIndex: {
            type: Number,
            required: true
        },
        navlists: {
            type: Array,
            required: true
        },
    },
}
</script>