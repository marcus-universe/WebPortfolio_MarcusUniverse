<template>
<footer>

    <div class="flex_c_h">
        <router-link to="/impressum" class="flex_c_h impressumButton">
            Impressum / Datapolicy
        
        </router-link>
    </div>
    

    <div class="social_media gap2">
        <a class="flex_c" target="_blank" href="https://www.artstation.com/marcusharting"><img src="../assets/artstation.svg" alt="Artstation">
            <p>Artstation</p>
        </a>
        <a class="flex_c" target="_blank" href="https://www.instagram.com/marcusunivers/"><img src="../assets/insta.svg" alt="Instagram">
            <p>Instagram</p>
        </a>
        <a class="flex_c" target="_blank" href="https://youtube.com/@marcusunivers"><img src="../assets/yt.svg" alt="YouTube">
            <p>YouTube</p>
        </a>

    </div>

    <div class="flex_c_h" >
        <ShareButton />
    </div>

    <div class="flex_c_h">
        <div class="CreditSection GithubRepo">
            <a class="flex_c" target="_blank" href="https://github.com/marcus-universe/WebPortfolio_MarcusUniverse">
                Github Repo
            </a>
        </div>
    </div>

    <div class="CreditSection">©2022 coded by Marcus Harting </div>

</footer>
</template>

<script>
import ShareButton from '@/components/Ui/ShareButton.vue'
export default {
    name: 'Footer',
    components: {
        ShareButton
    },
}

</script>

<style lang="scss">

</style>
