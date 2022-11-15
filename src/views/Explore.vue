<template>

<div ref="workDom" class="Section Explore">
<teleport to="head">
    <title>Explore</title>

    <meta name="msapplication-TileColor" :content="color_p[2]">

    <meta name="theme-color" :content="color_p[2]">
    <meta property="og:title" content="Marcus Universe Portfolio">

    <meta property="og:description"
        content="Marcus Harting (alias Marcus Universe) Portfolio. Im an artist, musician and coder">

    <meta property="og:image" content="./assets/img/me_profile.png">
</teleport>



    <ExploreBanner />

        <transition-group name="fadeWork" tag="div" class="flex_c_h flex_wrap gap2 WorkList">
            <WorkThumbnail v-for="(work, index) in loadWorks" :key="work" :work="work" :index="index" />
        </transition-group>
            

</div>
</template>

<script>
import {
    ref, onMounted, onUnmounted, computed
} from 'vue'
import WorkThumbnail from '@/components/Explore/WorkThumbnail.vue'
import ExploreBanner from '@/components/Explore/ExploreBanner.vue'
import { useStore } from 'vuex'

export default {
    name: 'Explore',
    setup() {

        const workDom = ref(null)
        const sliceNumber = ref(6)
        const store = useStore()
        const works = computed(() => store.state.works)

        const loadWorks = computed(() => {
            const workList = []
            for (let i = 0; i < sliceNumber.value; i++) {
                workList.push(works.value[i])
        }
            return workList
        })
        console.log(loadWorks.value)

        
        onMounted(() => {
            window.addEventListener('scroll', handleScroll)
        })

        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll)
        })


        const handleScroll = () => {
            const element = workDom.value
            if(element.getBoundingClientRect().bottom < window.innerHeight) {
                if (sliceNumber.value < works.value.length) {
                    if(works.value.length % 2 === 0) {
                        sliceNumber.value += 2
                    }
                    else {
                        sliceNumber.value += 3
                    }
                }

                if(sliceNumber.value === works.value.length || sliceNumber.value > works.value.length ) {
                    window.removeEventListener('scroll', handleScroll)
                }
                console.log(loadWorks.value)
            }
        }

        return {
            workDom,
            sliceNumber,
            loadWorks,
            store,
            works
        }
    },
    components: {
        WorkThumbnail,
        ExploreBanner,

    },
    methods: {
        
        
    },
    
    computed: {
        color_p() {
            return this.$store.state.color_p;
        },
        color_bg() {
            return this.$store.state.color_bg;
        },
    },
    mounted() {
        
        document.documentElement.style.setProperty('--color_p', '#FFA05F');
        document.documentElement.style.setProperty('--color_bg', '66, 40, 35');
    },

}
</script>
