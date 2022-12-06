<template>
<div class="Section Explore">
    <teleport to="head">
        <title>Explore</title>

        <meta
            name="msapplication-TileColor"
            content="#FFA05F">

        <meta
            name="theme-color"
            content="#FFA05F">
        <meta
            property="og:title"
            content="Marcus Universe Portfolio">

        <meta
            property="og:description"
            content="Marcus Harting (alias Marcus Universe) Portfolio. Explore my designs, 3D art, music and work">

<meta property="title" name="title" content="Marcus Universe | Explore">

<meta property="og:description"
    content="Marcus Harting (alias Marcus Universe) Portfolio. Explore my designs, 3D art, music and work">
<meta property="description" name="description"
    content="Marcus Harting (alias Marcus Universe) Portfolio. Explore my designs, 3D art, music and work">

        <meta
            property="og:image"
            content="./assets/img/me_profile.png">
    </teleport>

    <ExploreBanner />
    <div ref="workDom" class="workDom">
        <transition-group
            name="fadeWork"
            tag="div"
            class="flex_c_h flex_wrap gap2 WorkList">
            <WorkThumbnail
                v-for="(work, index) in loadWorks"
                :key="work"
                :work="work"
                :index="index" />
        </transition-group>
    </div>

    <MoreWorks />

</div>
</template>

<script>
import {
    ref,
    onMounted,
    onUnmounted,
    computed,
    defineAsyncComponent
} from 'vue'

import WorkThumbnail from '@/components/Explore/WorkThumbnail.vue'
import ExploreBanner from '@/components/Explore/ExploreBanner.vue'
const MoreWorks = defineAsyncComponent(() =>
    import('@/components/Explore/MoreWorks.vue')
)
import {
    useStore
} from 'vuex'

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

        function loadMoreWorks(){
            if (sliceNumber.value < works.value.length) {
                if (works.value.length % 2 === 0) {
                    sliceNumber.value += 2
                } else {
                    sliceNumber.value += 3
                }
            }

            if (sliceNumber.value === works.value.length || sliceNumber.value > works.value.length) {
                window.removeEventListener('scroll', handleScroll)
            }
        }

        const handleScroll = () => {
            const element = workDom.value
            try {
                if (element.getBoundingClientRect().bottom < window.innerHeight) {
                    loadMoreWorks()
                } 
            }catch (error) {
                console.log(error)
                sliceNumber.value = works.value.length
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
        MoreWorks,

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
