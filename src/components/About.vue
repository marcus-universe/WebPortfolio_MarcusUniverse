<template>
<section class="About">
    <img src="../assets/img/me_profile.jpg" alt="profile_picture" class="profile_img">
    

    
    <div class="ContentAbout flex_c_v flex_start gap2 ">
        <h1 class="AboutTitle">You want me!
        </h1>
        <h2>Meine Specs</h2>
        <div class="flex_c_h flex_wrap gap2 alignStretch spec">
            <p class="flex_c flex_space flex_start"><Logo :icon="'education'"/>Abgeschlossendes Kommunikationsdesign Studium (Note: 94%)</p>
            <p class="flex_c flex_space flex_start"><Logo :icon="'work'" />
                2,5 Jahre Berufserfahrung als 3D Artist, Frontend Developer, Social Media Produzent und Produkt Fotograf/Film Produzent bei <a href="https://www.morgenland-teppiche.de/" target="_blank" rel="noopener noreferrer">Morgenland-Teppiche</a>
            </p>
            <p class="flex_c flex_space flex_start"><Logo :icon="'education'" />Abgeschlossende Screendesign Ausbildung + Fachabitur (Note: 2,1)</p>
            <p class="flex_c flex_space flex_start"><Logo :icon="'synth'" />Spiele über 10 Jahre Piano/Synth & Gitarre + produziere Songs <br>(Achtung: Synthesizer-Nerd)</p>
            <p class="flex_c flex_space flex_start"><Logo :icon="'yt'" />Betreibe als Hobby einen <a href="https://www.morgenland-teppiche.de/" target="_blank" rel="noopener noreferrer">Youtube Kanal</a> seit 2012 mit über 1.300 Abonnenten</p>
        </div>

        <LetsTalk />
    </div>

</section>
</template>

<style lang="scss">

</style>

<script>
import Logo from '@/components/Ui/Logo.vue'
import LetsTalk from '@/components/LetsTalk.vue'

export default {
    name: 'About',
    components: {
        Logo,
        LetsTalk
    },
    props: {
        currentIndex: {
            type: Number,
            default: 0,
            required: false
        }
    },
    mounted() {
        this.checkWindowSize();
        window.addEventListener('resize', this.checkWindowSize);

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
        }
    },

    setup() {
    },

}
</script>
