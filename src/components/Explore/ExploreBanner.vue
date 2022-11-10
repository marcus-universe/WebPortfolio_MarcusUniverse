<template>
    <div class="exploreBanner" >
        <div class="flex_c_h slider">
            <Logo :icon="'rocket'" :customClass="'inverseX'" @click="changeindexDown()"/>
            <Logo :icon="'rocket'" @click="changeindexUp()"/>
        </div>

        <div class="points flex_c_h gap1">
            <div class="point" v-for="(project, index) in BannerLength()" :key="project" :class="{ 'activepoint': index === currentIndex }" @click="selectProject(index)"></div>
        </div>

        
        <template v-for="(ban, ind) in BannerLength()" :key="ban">
            <transition :name="slide">
                <div v-if="ind === currentIndex" class="banner w100">
                    <h1 @click="OpenProject">{{ Banner[currentIndex].title}}</h1>
                    
                    
                    <div class="vidBanner flex_c" @click="OpenProject">
                        <video autoplay muted loop :poster="require(`@/assets/img/banner/${Banner[ind].thumbnail}.webp`)">
                            <source :src="require(`@/assets/img/banner/${Banner[ind].video}.mp4`) " type="video/mp4">
                        </video>
                    </div>

                </div>
                
            </transition>

            
        </template>        
    </div>
</template>
<script>
import Logo from '@/components/Ui/Logo.vue'
export default {
    name: 'ExploreBanner',
    components: {
        Logo
    },
    data() {
        return {
            currentIndex: 2,
            slide: 'slideL'
        }
    },
    methods: {
        OpenProject() {
            window.open(this.Banner[this.currentIndex].link, '_blank').focus();
        },
        BannerLength() {
            return this.Banner.length
        },
        selectProject(index) {
            this.currentIndex = index
        },
        changeindexUp() {
            this.slide = 'slideR'
            if (this.currentIndex < this.BannerLength() - 1) {
                this.currentIndex++
                
            } else {
                this.currentIndex = 0
            }
        },
        changeindexDown() {
            this.slide = 'slideL'
            if (this.currentIndex > 0) {
                this.currentIndex--
                
            } else {
                this.currentIndex = this.BannerLength() - 1
            }
        },
    },
    computed: {
        Banner() {
            return this.$store.state.Banner;
        }
    },
    
}
</script>