<template>
<div class="HOME">

    <teleport to="head">
        <title>Marcus Universe Portfolio</title>

  <meta name="msapplication-TileColor" :content="color_p[currentselectedIndex]">

        <meta
            name="theme-color"
            :content="color_p[currentselectedIndex]">


        <meta
            property="og:title"
            content="Marcus Universe Portfolio">

        <meta
            property="og:description"
            content="Marcus Harting (alias Marcus Universe) Portfolio. Im an artist, musician and coder">
        
        <meta
            property="og:image"
            content="./assets/img/me_profile.png">
    </teleport>
    <ErrorPage v-if="error == true" />

    <Logo v-if="error == false" />

    <Menu
        :navlists="navigation.navlist"
        v-if="error == false"
        :selectedIndex="currentselectedIndex"
        @ChangeNav="changeNav" />
    <StartPage
        v-if="error == false"
        :title="title"
        :smallHeadline="smallHeadline"
        :hideHeadline="hideHeadline"
        :navlists="navigation.navlist"
        :currentIndex="currentselectedIndex" />

    <Slider
        v-if="error == false"
        :navlists="navigation.navlist"
        @ChangeNav="changeNav"
        :selectedIndex="currentselectedIndex" />

    <About
        v-if="error == false"
        :currentIndex="currentselectedIndex" />

    <LetsTalk v-if="error == false" />

    <Footer v-if="error == false" />
</div>
</template>

<style lang="scss">
@import '../sass/base.sass';
</style>

<script>
import Logo from '../components/Ui/Logo.vue';
import Menu from '../components/Ui/Menu.vue'
import StartPage from '../components/StartPage.vue'
import Slider from '../components/Ui/Slider.vue'
import About from '../components/About.vue'
import LetsTalk from '../components/LetsTalk.vue'
import ErrorPage from '../components/ErrorPage.vue'
import Footer from '../components/Footer.vue'
let root = document.documentElement;

export default {
    name: 'App',
    components: {
        Logo,
        Menu,
        StartPage,
        Slider,
        About,
        LetsTalk,
        ErrorPage,
        Footer
    },

    setup() {

    },

    data() {
        return {
            error: false,
            color_p: ["#3EE4FF", "#A25AFF", "#FFA05F"],
            color_bg: ["35, 45, 66", "57, 35, 66", "66, 40, 35"],
            title: "3D",
            smallHeadline: false,
            currentselectedIndex: 0,
            hideHeadline: false,
            navigation: {
                navlist: [{
                        name: '3D',
                        subDo: 'think',
                        linkTitle: 'Artstation Profile',
                        link: 'https://www.artstation.com/marcusharting',
                        iconlink: 'artstation',
                        selected: true
                    },
                    {
                        name: 'Music',
                        subDo: 'make',
                        linkTitle: 'Soundcloud Tracks',
                        link: 'https://soundcloud.com/marcus-universe/tracks',
                        iconlink: 'soundcloud',
                        selected: false
                    },
                    {
                        name: 'Code',
                        subDo: 'write',
                        linkTitle: 'Github Profile',
                        link: 'https://github.com/marcus-universe',
                        iconlink: 'github',
                        selected: false
                    }
                ]
            }

        }
    },
    created() {
        this.changeNav(0);
    },
    methods: {
        changeNav: function (MycurrentIndex) {
            this.currentselectedIndex = MycurrentIndex;
            console.log(this.currentselectedIndex);

            if (this.currentselectedIndex == 0 || this.navigation.navlist[0].selected == true) {

                this.navigation.navlist.forEach(function (navitem) {
                    navitem.selected = false;
                });
                this.navigation.navlist[0].selected = true
                root.style.setProperty('--color_p', this.color_p[0]);
                root.style.setProperty('--color_bg', this.color_bg[0]);
                var self = this;
                var textArr = self.navigation.navlist[0].name.split('');
                this.hideHeadline = true;

                //add every textArray element a class in an interval of 0.1s
                textArr.forEach(function (letter, index) {
                    setTimeout(function () {

                    }, index * 100);
                });

                setTimeout(function () {
                    self.title = self.navigation.navlist[0].name;
                    self.smallHeadline = false;
                    self.hideHeadline = false;
                }, 400);

            }
            if (this.currentselectedIndex == 1 || this.navigation.navlist[1].selected == true) {

                this.navigation.navlist.forEach(function (navitem) {
                    navitem.selected = false;
                });

                this.navigation.navlist[1].selected = true
                root.style.setProperty('--color_p', this.color_p[1]);
                root.style.setProperty('--color_bg', this.color_bg[1]);

                self = this;
                this.hideHeadline = true;
                setTimeout(function () {

                    self.title = self.navigation.navlist[1].name;
                    self.smallHeadline = true;
                    self.hideHeadline = false;
                }, 400);

            }
            if (this.currentselectedIndex == 2 || this.navigation.navlist[2].selected == true) {

                this.navigation.navlist.forEach(function (navitem) {
                    navitem.selected = false;
                });

                this.navigation.navlist[2].selected = true
                root.style.setProperty('--color_p', this.color_p[2]);
                root.style.setProperty('--color_bg', this.color_bg[2]);

                self = this;
                this.hideHeadline = true;
                setTimeout(function () {
                    self.smallHeadline = true;
                    self.title = self.navigation.navlist[2].name;
                    self.hideHeadline = false;
                }, 400);

            }
        },
    },

}
</script>
