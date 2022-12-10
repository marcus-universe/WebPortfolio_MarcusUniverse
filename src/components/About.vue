<template>
<section class="About">
    
    <div class="ContentAbout flex_c_v flex_start gap2 alignCenter">
        
     <h1 v-if="!lang.includes('de')" class="AboutTitle">You want me!</h1>
      <h1 v-if="lang.includes('de')" class="AboutTitle">Sie wollen mich!</h1>
        <div class="profilimgContainer" v-on:mouseover="hovered = true" v-on:mouseleave="hovered = false">
            <Logo :icon="'glasses'" ref="logo" :hovered="hovered"/>
            <img src="../assets/img/me_profile.jpg" alt="profile_picture" class="profile_img">
        </div>
        
        
       <h2 v-if="!lang.includes('de')">Specs</h2>
<h2 v-if="lang.includes('de')">Spezifikationen</h2>
        <div class="flex_c_h flex_wrap gap2 alignStretch spec">
  
            <template v-if="lang.includes('de')" >
                <p class="flex_c flex_space flex_start">
                    <Logo :icon="'education'" />Abgeschlossenes Kommunikationsdesign Studium (Note: 94%)
                </p>
                <p class="flex_c flex_space flex_start">
                    <Logo :icon="'work'" />
                    2,5 Jahre Berufserfahrung als 3D Artist, Frontend Developer, Social Media Produzent und Produkt Fotograf/Film
                    Produzent bei <a href="https://www.morgenland-teppiche.de/" target="_blank"
                        rel="noopener noreferrer">Morgenland-Teppiche</a>
                </p>
                <p class="flex_c flex_space flex_start">
                    <Logo :icon="'education'" />Abgeschlossene Screendesign Ausbildung + Fachabitur (Note: 2,1)
                </p>
                
                <p class="flex_c flex_space flex_start">
                    <Logo :icon="'synth'" />Spiele über 10 Jahre Piano/Synth & Gitarre + produziere Songs <br>(Achtung:
                    Synthesizer-Nerd)
                </p>
                <p class="flex_c flex_space flex_start">
                    <Logo :icon="'yt'" />Betreibe als Hobby einen <a href="https://youtube.com/@marcusunivers" target="_blank"
                        rel="noopener noreferrer">Youtube Kanal</a> seit 2012 mit über 1.300 Abonnenten
                </p>
            </template>
    

            <template v-if="!lang.includes('de')" tag="div">
                <p class="flex_c flex_space flex_start">
                    <Logo :icon="'education'" />Degree in communication design (grade: 94%)
                </p>
                <p class="flex_c flex_space flex_start">
                    <Logo :icon="'work'" />
                    2,5 years work experience as 3D Artist, Frontend Developer, Social Media Producer and Product Photographer/Film Producer
                    at <a href="https://www.morgenland-teppiche.de/" target="_blank"
                        rel="noopener noreferrer">Morgenland-Teppiche</a>
                </p>
                <p class="flex_c flex_space flex_start">
                    <Logo :icon="'education'" />Degree in screen design + specialized baccalaureate in art (grade: 2.1)
                </p>
            
                <p class="flex_c flex_space flex_start">
                    <Logo :icon="'synth'" />I play piano/synth & guitar for over 10 years and produce songs (note: synth nerd).
                </p>
                <p class="flex_c flex_space flex_start">
                    <Logo :icon="'yt'" />Run as a hobby a <a href="https://youtube.com/@marcusunivers" target="_blank" rel="noopener noreferrer">Youtube channel</a>since 2012 with over 1.300 subscribers
                </p>
            </template>
        </div>

        <h2>Skills</h2>
        <SoftwareSkills />
    </div>

</section>
</template>

<style lang="scss">

</style>

<script>
import Logo from '@/components/Ui/Logo.vue'
import SoftwareSkills from '@/components/SoftwareSkills.vue'

export default {
    name: 'About',
    components: {
        Logo,
        SoftwareSkills
    },
    props: {
        currentIndex: {
            type: Number,
            default: 0,
            required: false
        }
    },
    data() {
        return {
            hovered: false
        }
    },
    mounted() {
        this.checkWindowSize();
        window.addEventListener('resize', this.checkWindowSize);

    },
    computed: {
        lang () {
            return this.$store.state.lang
        }
    },

    unmounted() {
        window.removeEventListener('resize', this.checkWindowSize);
    },
    methods: {
        checkWindowSize() {
            var data = this
            if (document.documentElement.clientWidth < 640) {
                data.showPoly = false;

            } else {
                data.showPoly = true;
            }
            console.log(data.showPoly);
        },
        hoverProfil: function () {
            this.$refs['logo'].setDirection("forward");
            this.$refs['logo'].play();
        },

        leaveProfil: function () {
            this.$refs['logo'].setDirection("reverse");
            this.$refs['logo'].play();
        }


    },

    setup() {
    },

}
</script>
