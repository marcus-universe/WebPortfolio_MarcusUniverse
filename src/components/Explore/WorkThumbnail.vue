<template>
<div>
    <Suspense>

        <template #default>
            <a v-if="work.video === false" :href="work.link" target="_blank" :alt="work.name" class="work_thumbnail flex_c" ref="transformElement" @click="showWork(work)" :style="{
            transform: setTransform(),
            transition: setTransition()
        }">

                <picture>
                    <source
                        :srcset="require(`@/assets/img/works/${work.thumbnail}.webp`)"
                        type="image/webp" lazy="load" decode="async">
                    <img :src="require(`@/assets/img/works/${work.thumbnail}.jpg`)" :alt="work.name" lazy="load" decode="async">
                </picture>
                <div class="WorkHeadline">{{work.name}}</div>
            </a>
        </template>
        <template #fallback>
            <div class="loading">
                Loading...
            </div>
        </template>

    </Suspense>

    <Suspense>
        <template #default>

            <a v-if="work.video === true" class="work_thumbnail" :href="work.link" target="_blank" :alt="work.name" @click="showWork(work)" ref="transformElement" :style="{
    transform: setTransform(),
    transition: setTransition()
    }">
                <div class="WorkHeadline">{{work.name}}</div>
                <video :poster="require(`@/assets/img/works/${work.vidPreview}.jpg`)" autoplay loop muted>
                    <source
                        :src="require(`@/assets/img/works/${work.thumbnail}.mp4`)"
                        type="video/mp4">
                </video>
            </a>

        </template>
        <template #fallback>
            <div class="loading">
                Loading...
            </div>
        </template>
    </Suspense>

</div>
</template>

<script>
import {
    useMouseInElement
} from '@vueuse/core'
import {
    computed,
    ref,
    Suspense
} from 'vue'

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
            window.open(work.link, "_blank").focus();
        },
        setTransform() {
            if (this.isOutside === false) {
                return this.cardTransform;
            } else {
                return "";
            }
        },
        setTransition() {
            if (this.isOutside === true) {
                return "all 0.25s ease-out";
            } else {
                return "";
            }
        }
    },
    setup() {
        const transformElement = ref(null);
        const {
            elementX,
            elementY,
            elementHeight,
            elementWidth,
            isOutside
        } = useMouseInElement(transformElement);
        const cardTransform = computed(() => {
            const Max_Rotation = 10;
            const rX = (Max_Rotation / 2 -
                (elementY.value / elementHeight.value) * Max_Rotation).toFixed(2);
            const rY = ((elementX.value / elementWidth.value) * Max_Rotation - Max_Rotation / 2).toFixed(2);
            return `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;
        });
        return {
            cardTransform,
            transformElement,
            elementX,
            elementY,
            elementHeight,
            elementWidth,
            isOutside,
        };
    },
    components: {
        Suspense
    }
}
</script>
