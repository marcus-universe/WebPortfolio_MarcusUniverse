<template>
    <div class="Section Explore">
        
        <ExploreBanner/>

        <div class="WorkList flex_c_h flex_wrap gap2 ">
            <WorkThumbnail v-for="(work, index) in works" :key="work" :work="work" :index="index"/>
        </div>

    </div>
</template>

<script>
import WorkThumbnail from '@/components/Explore/WorkThumbnail.vue'
import ExploreBanner from '@/components/Explore/ExploreBanner.vue'
export default {
    name: 'Explore',
    components: {
        WorkThumbnail,
        ExploreBanner
    },
    computed: {
        works() {
            return this.$store.state.works
        }
    },
    mounted() {
        document.documentElement.style.setProperty('--color_p', '#a25aff');
        document.documentElement.style.setProperty('--color_bg', '57, 35, 66');
    }
        
    }
</script>
