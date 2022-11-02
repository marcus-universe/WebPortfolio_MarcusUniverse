<template>
<div
    v-if="work.video === false"
    class="work_thumbnail"
    ref="transformElement"
    :style="{
            backgroundImage: 'url(' + require(`@/assets/img/works/${work.thumbnail}.jpg`) + ')',
        transform: setTransform(),
        transition: setTransition()
    }"
    >
    <div class="WorkHeadline">{{work.name}}</div>
</div>

<div
    v-if="work.video === true"
    class="work_thumbnail"
    @click="showWork(work)"
    ref="transformElement"
    :style="{
    transform: setTransform(),
    transition: setTransition()
    }"
    >
    <div class="WorkHeadline">{{work.name}}</div>
    <video :poster="require(`@/assets/img/works/${work.vidPreview}.jpg`)" autoplay loop>
        <source
            :src="require(`@/assets/img/works/${work.thumbnail}.mp4`)"
            type="video/mp4">
    </video>
</div>
</template>

<script>
import {
    useMouseInElement
} from '@vueuse/core'
import {computed, ref } from 'vue'

export default {
    props: {
        work: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    methods: {
        showWork(work) {
            if (work.direct === true) {
                window.open(work.link, '_blank').focus();
            }
        },
        setTransform() {
            if (this.isOutside === false) {
                return this.cardTransform
            } else {
                return ''
            }
        },
        setTransition() {
            if (this.isOutside === true) {
                return 'all 0.25s ease-out'
            } else {
                return ''
            }
        }

    },
    setup() {
        const transformElement = ref(null)

        const {
            elementX,
            elementY,
            elementHeight,
            elementWidth,
            isOutside
        } = useMouseInElement(transformElement)

        const cardTransform = computed(() => {

            const Max_Rotation = 10

            const rX = (
                Max_Rotation / 2 -
                (elementY.value / elementHeight.value) * Max_Rotation).toFixed(2)

            const rY = (
                (elementX.value / elementWidth.value) * Max_Rotation - Max_Rotation / 2).toFixed(2)

            return `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
        })

        return {
            cardTransform,
            transformElement,
            elementX,
            elementY,
            elementHeight,
            elementWidth,
            isOutside,

        }


    }

    
}


</script>
